import React, { Suspense } from "react";
import RootLayout from "./layouts/root";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoadingPage from "./components/loading-page";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const queryClient = new QueryClient();

const HomePage = React.lazy(() => import("./pages/home"));
const LoginPage = React.lazy(() => import("./pages/login"));
const SignUpPage = React.lazy(() => import("./pages/sign-up"));
const EventDetailPage = React.lazy(() => import("./pages/event-detail"));

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<LoadingPage />}>
            <Routes>
              <Route element={<RootLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="events/:id" element={<EventDetailPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="sign-up" element={<SignUpPage />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
