import { authSignal } from "@/auth/signals";

const useLogout = () => {
  return () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    authSignal.value.accessToken.value = undefined;
    authSignal.value.refreshToken.value = undefined;
  };
};

export default useLogout;
