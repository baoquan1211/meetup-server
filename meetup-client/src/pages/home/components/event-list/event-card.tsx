import { Event } from "@/models/event";
import { Calendar, CircleCheck, Ticket } from "lucide-react";
import { Link } from "react-router-dom";

type EventCardProps = {
  event: Event;
};

function EventCard({ event }: EventCardProps) {
  return (
    <Link to="#" className="flex flex-row md:flex-col group">
      <img
        src="public/png/event.webp"
        alt="event"
        className="max-w-[272px] rounded-md"
      />
      <div className="flex flex-col gap-y-2">
        <h2 className="text-lg font-bold hover:underline group-hover:underline">
          {event.name}
        </h2>
        <div className="flex gap-2">
          <Calendar />
          {" Fri Jun 21 2024 11:30:00"}
        </div>
        <div className="flex gap-4 text-slate-600 items-center">
          <div className="flex gap-1 items-center">
            <CircleCheck className="size-5" /> {"51 going"}
          </div>
          <div className="flex gap-1 items-center">
            <Ticket className="size-5" /> {"Free"}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default EventCard;
