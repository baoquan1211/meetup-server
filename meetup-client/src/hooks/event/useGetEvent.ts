import { type Event } from "@/models/event";
import { getEvent } from "@/services/event";
import { useQuery } from "@tanstack/react-query";

function useGetEventById(id: Event["id"]) {
  return useQuery({
    queryKey: ["event", id],
    queryFn: async () => {
      const response = await getEvent(id);
      return response.data;
    },

    staleTime: 1000,
  });
}

export default useGetEventById;
