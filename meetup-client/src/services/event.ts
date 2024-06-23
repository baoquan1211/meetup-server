import apiInstance from "./instance";
import { type Event } from "@/models/event";

export const getEvents = async () => {
  const response = await apiInstance.get<Event[]>(
    `/event-service/api/v1/events`
  );
  return response;
};

export const getEvent = async (id: number) => {
  const response = await apiInstance.get<Event>(
    `/event-service/api/v1/event/${id}`
  );
  return response;
};
