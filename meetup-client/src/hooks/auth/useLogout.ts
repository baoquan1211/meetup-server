import { authSignal } from "@/auth/signals";

const useLogout = () => {
  return () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("email");

    authSignal.value.accessToken.value = undefined;
    authSignal.value.email.value = undefined;
  };
};

export default useLogout;
