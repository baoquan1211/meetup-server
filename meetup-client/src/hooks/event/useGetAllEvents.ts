import { getEvents } from "@/services/event";
import { useQuery } from "@tanstack/react-query";

function useGetAllEvents() {
  return useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const response = await getEvents();
      return response.data;
    },
    gcTime: 0,
  });
}

export default useGetAllEvents;
