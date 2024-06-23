import { authSignal } from "@/auth/signals";
import { Token } from "@/models/auth";

function useAuth() {
  return ({ token, email }: { token: Token; email: string }) => {
    authSignal.value.accessToken.value = token.access_token;
    authSignal.value.email.value = email;

    localStorage.setItem("access_token", token.access_token);
    localStorage.setItem("email", email);
  };
}

export default useAuth;
