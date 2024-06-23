import { Outlet, useLocation, useNavigate } from "react-router";
import Header from "./header";
import { authSignal } from "@/auth/signals";
import { useLayoutEffect } from "react";
import Footer from "./footer";

function RootLayout() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("access_token");
  const email = localStorage.getItem("email");
  const location = useLocation();

  useLayoutEffect(() => {
    if (accessToken && email) {
      authSignal.value.accessToken.value = accessToken;
      authSignal.value.email.value = email;
    } else {
      if (
        location.pathname !== "/sign-up" &&
        location.pathname !== "/login" &&
        location.pathname !== "/"
      ) {
        navigate("/login", { state: { prevRoute: location.pathname } });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authSignal.value.accessToken.value, authSignal.value.email.value]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
