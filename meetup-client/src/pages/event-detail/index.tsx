import { Button } from "@/components/ui/button";
import useGetEventById from "@/hooks/event/useGetEvent";
import { useParams } from "react-router-dom";

function EventDetail() {
  const { id } = useParams();

  const { data: event } = useGetEventById(Number(id));
  return (
    <>
      <div className="w-full border flex justify-center py-6">
        <div className="max-w-7xl w-full">
          <h1 className="text-3xl font-bold">{event?.name}</h1>
          <p>Hosted By</p>
          <p>{event?.owner_name}</p>
        </div>
      </div>
      <div className="flex justify-center bg-muted py-8">
        <section className="w-full max-w-7xl">
          <img
            src="/png/event.webp"
            alt="event"
            className="max-w-[272px] rounded-md"
          />
          <p className="font-semibold mt-2">
            Location: <span className="font-normal">{event?.location}</span>
          </p>
          <p className="font-semibold mt-2">
            Started date:{" "}
            <span className="font-normal">{event?.start_date}</span>
          </p>
          <p className="font-semibold mt-2">
            Attendances:{" "}
            <span className="font-normal">{event?.attendates}</span>
          </p>
          <p className="font-semibold mt-2">
            Spot left: <span className="font-normal">{event?.left}</span>
          </p>
        </section>
      </div>
      <div className="sticky bottom-0 left-0 w-full border flex justify-center py-6">
        <div className="max-w-7xl w-full flex justify-between">
          <div className="flex flex-col gap-2">
            <p>{event?.start_date}</p>
            <p className="font-bold">{event?.name}</p>
          </div>
          <div className="flex gap-4">
            <div>
              <p className="font-bold">{event?.price}</p>
              <p>{event?.left} spots left</p>
            </div>
            <Button size={"lg"}>Attend</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventDetail;
