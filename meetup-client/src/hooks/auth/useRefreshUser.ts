import { useQueryClient } from "@tanstack/react-query";

function useRefreshUser() {
  const queryClient = useQueryClient();

  return () => {
    queryClient.invalidateQueries({
      queryKey: ["get-me"],
    });
  };
}

export default useRefreshUser;
