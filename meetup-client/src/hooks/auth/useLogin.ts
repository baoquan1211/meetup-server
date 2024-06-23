import { LoginRequest, login } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";

function useLogin() {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: async (data: LoginRequest) => {
      const response = await login(data);
      return response.data;
    },
  });
}

export default useLogin;
