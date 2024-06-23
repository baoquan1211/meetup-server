import { getUser } from "@/services/auth";
import { useQuery } from "@tanstack/react-query";

function useGetUser() {
  return useQuery({
    queryKey: ["get-me"],
    queryFn: async () => {
      const response = await getUser();
      return response.data;
    },
    staleTime: Infinity,
    retry: false,
  });
}

export default useGetUser;
