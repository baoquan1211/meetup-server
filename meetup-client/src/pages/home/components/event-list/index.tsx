import { type Event } from "@/models/event";
import EventCard from "./event-card";
import { Link } from "react-router-dom";

function EventList() {
  const events: Event[] = [
    {
      id: 1,
      name: "Event 1",
      about: "About Event 1",
      location: "Location 1",
      start_date: new Date("2024-06-21T11:30:00Z"),
      end_date: new Date("2024-06-21T14:30:00Z"),
      owner: "owner1",
      owner_name: "Owner 1",
    },
    {
      id: 2,
      name: "Event 2",
      about: "About Event 2",
      location: "Location 2",
      start_date: new Date("2024-06-21T11:30:00Z"),
      end_date: new Date("2024-06-21T14:30:00Z"),
      owner: "owner2",
      owner_name: "Owner 2",
    },
    {
      id: 3,
      name: "Event 3",
      about: "About Event 3",
      location: "Location 3",
      start_date: new Date("2024-06-21T11:30:00Z"),
      end_date: new Date("2024-06-21T14:30:00Z"),
      owner: "owner3",
      owner_name: "Owner 3",
    },
    {
      id: 4,
      name: "Event 3",
      about: "About Event 3",
      location: "Location 3",
      start_date: new Date("2024-06-21T11:30:00Z"),
      end_date: new Date("2024-06-21T14:30:00Z"),
      owner: "owner3",
      owner_name: "Owner 3",
    },
    {
      id: 5,
      name: "Event 3",
      about: "About Event 3",
      location: "Location 3",
      start_date: new Date("2024-06-21T11:30:00Z"),
      end_date: new Date("2024-06-21T14:30:00Z"),
      owner: "owner3",
      owner_name: "Owner 3",
    },
    {
      id: 6,
      name: "Event 3",
      about: "About Event 3",
      location: "Location 3",
      start_date: new Date("2024-06-21T11:30:00Z"),
      end_date: new Date("2024-06-21T14:30:00Z"),
      owner: "owner3",
      owner_name: "Owner 3",
    },
    {
      id: 7,
      name: "Event 3",
      about: "About Event 3",
      location: "Location 3",
      start_date: new Date("2024-06-21T11:30:00Z"),
      end_date: new Date("2024-06-21T14:30:00Z"),
      owner: "owner3",
      owner_name: "Owner 3",
    },
    {
      id: 8,
      name: "Event 3",
      about: "About Event 3",
      location: "Location 3",
      start_date: new Date("2024-06-21T11:30:00Z"),
      end_date: new Date("2024-06-21T14:30:00Z"),
      owner: "owner3",
      owner_name: "Owner 3",
    },
  ];
  return (
    <section className="mt-12 px-6 w-full">
      <h2 className="flex flex-wrap items-baseline gap-x-1 gap-y-2 font-semibold md:gap-x-2 xl:text-[1.75rem] xl:leading-9 justify-between">
        Upcoming online events
        <Link to="#" className="text-base text-secondary hover:underline">
          {" "}
          See all events
        </Link>
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-6 w-full gap-2">
        {events.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
    </section>
  );
}

export default EventList;
