from fastapi import APIRouter, Depends, Query
from api.auth.dependencies import ManagementUser
from api.service import EventService
from api.schema import EventCreate, EventView, EventUpdate
from core.database.mysql import get_db
from api.response import (
    Response,
    HTTP_404_NOT_FOUND,
    HTTP_500_INTERNAL_SERVER_ERROR,
    HTTP_403_FORBIDDEN,
    HTTP_204_NO_CONTENT,
)
from core.kafka import KafkaProducer
from core import settings

EventRouter = APIRouter(
    tags=["Manage - Event"],
    dependencies=[Depends(ManagementUser), Depends(get_db)],
)


@EventRouter.get("/events", response_model=EventView)
def manage_events(
    user=Depends(ManagementUser),
    db=Depends(get_db),
    name=Query(""),
    location=Query(""),
    start_date=Query(None),
):
    metadata = EventService(db).all(
        Manager_ID=None if user.get("role") == "Admin" else user.get("_id"),
        Name=name,
        Location=location,
        Start_Date=start_date,
    )
    return Response(message="List Events", metadata=metadata)


@EventRouter.get("/event/{Event_ID}", response_model=EventView)
def view_event(Event_ID: int, user=Depends(ManagementUser), db=Depends(get_db)):
    metadata = EventService(db).find(Event_ID)
    if metadata is None:
        raise HTTP_404_NOT_FOUND("Event Not Found")
    if user.get("role") != "Admin" and metadata.get("owner") != user.get("_id"):
        raise HTTP_403_FORBIDDEN("Access Forbidden")
    return Response(metadata=metadata)


@EventRouter.post("/event", response_model=EventView)
async def create_event(
    Information: EventCreate, user=Depends(ManagementUser), db=Depends(get_db)
):
    instance = EventService(db).add(Information, user)
    producer = KafkaProducer(KAFKA_BOOTSTRAP_SERVERS=settings.KAFKA_BOOTSTRAP_SERVERS)
    await producer.connect()
    import json

    await producer.sendMessage(
        Topic="NewEvent", Message=json.dumps(instance).encode("utf-8")
    )
    return Response(status=201, message="Event created successfully", metadata=instance)


@EventRouter.put("/event/{Event_ID}", response_model=EventView)
def update_event(
    Information: EventUpdate,
    Event_ID: int,
    user=Depends(ManagementUser),
    db=Depends(get_db),
):
    EventTable = EventService(db)
    # ----------------------------#
    Event = EventTable.find(Event_ID)
    if Event is None:
        raise HTTP_404_NOT_FOUND("Event Not Found")
    if user.get("role") != "Admin" and user.get("_id") != Event["owner"]:
        raise HTTP_403_FORBIDDEN("Access Forbidden")
    NewEvent = EventTable.update(Event_ID, Information)
    if not NewEvent:
        raise HTTP_500_INTERNAL_SERVER_ERROR("Failed to update Event!")
    return Response(
        message="Updated Event",
        metadata=NewEvent,
    )


@EventRouter.delete("/event/{Event_ID}")
def delete_event(Event_ID: int, user=Depends(ManagementUser), db=Depends(get_db)):
    EventTable = EventService(db)
    Event = EventTable.find(Event_ID)
    if Event is None:
        raise HTTP_404_NOT_FOUND("Event Not Found")
    if user.get("role") == "Admin" or user.get("_id") == Event["owner"]:
        EventTable.delete(Event_ID)
        raise HTTP_204_NO_CONTENT()
    raise HTTP_403_FORBIDDEN("Access Forbidden")
