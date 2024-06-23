#! venv/bin/python3.12
from fastapi import FastAPI
import uvicorn
from core import settings
from core.database.mysql import Base, Engine
from api.router import ManageRouter, UserRouter
from api.auth.middleware import ExceptionHandlerMiddleware
from core.kafka import KafkaConsumer
import asyncio
from fastapi.middleware.cors import CORSMiddleware


# Lifespan
async def lifespan(app: FastAPI):
    Consumer = KafkaConsumer(
        KAFKA_BOOTSTRAP_SERVERS=settings.KAFKA_BOOTSTRAP_SERVERS,
        TOPIC=["update_profile", "booking", "payment_return"],
    )
    await Consumer.connect()
    asyncio.create_task(Consumer.run())
    yield
    await Consumer.close()


# App
app = FastAPI(
    title=settings.APP_TITLE,
    debug=settings.APP_DEBUG,
    version=settings.APP_VERSION,
    root_path="/api/v1",
    docs_url="/",
    lifespan=lifespan,
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Database
Base.metadata.create_all(Engine)
# Router
app.include_router(
    router=ManageRouter,
    prefix="/manage",
)
app.include_router(
    router=UserRouter,
    prefix="",
)
# Handle Error
app.add_middleware(ExceptionHandlerMiddleware)
# Run App
if __name__ == "__main__":
    uvicorn.run(
        app="main:app",
        port=settings.APP_PORT,
        reload=settings.APP_DEBUG,
    )
