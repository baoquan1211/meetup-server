import { Outlet, useLocation, useNavigate } from "react-router";
import Header from "./header";
import { authSignal } from "@/auth/signals";
import { useLayoutEffect } from "react";
import Footer from "./footer";
import { Toaster } from "@/components/ui/sonner";

function RootLayout() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("access_token");
  const refreshToken = localStorage.getItem("refresh_token");
  const location = useLocation();

  useLayoutEffect(() => {
    if (accessToken && refreshToken) {
      authSignal.value.accessToken.value = accessToken;
      authSignal.value.refreshToken.value = refreshToken;
    } else {
      if (location.pathname !== "/sign-up" && location.pathname !== "/login") {
        navigate("/login", { state: { prevRoute: location.pathname } });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authSignal.value.accessToken.value, authSignal.value.refreshToken.value]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Toaster />
    </>
  );
}

export default RootLayout;
