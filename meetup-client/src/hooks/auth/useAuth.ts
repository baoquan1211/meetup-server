import { authSignal } from "@/auth/signals";
import { Token } from "@/models/auth";

function useAuth() {
  return ({ token }: { token: Token }) => {
    console.log(token);
    authSignal.value.accessToken.value = token.access_token;
    authSignal.value.refreshToken.value = token.refresh_token;

    localStorage.setItem("access_token", token.access_token);
    localStorage.setItem("refresh_token", token.refresh_token);
  };
}

export default useAuth;
