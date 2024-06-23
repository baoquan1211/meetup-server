import { Button } from "@/components/ui/button";
import React, { useRef, useLayoutEffect } from "react";
import { ZodError, z } from "zod";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { authSignal } from "@/auth/signals";
import { toast } from "sonner";
import useLogin from "@/hooks/auth/useLogin";
import InputField from "@/components/input-field";
import useAuth from "@/hooks/auth/useAuth";
import handleToastPromise from "@/lib/handleToastPromise";
import useRefreshUser from "@/hooks/auth/useRefreshUser";
import { Token } from "@/models/auth";

function LoginPage() {
  const [isLoginPending, startLoginTransition] = React.useTransition();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useLogin();
  const auth = useAuth();
  const refreshUser = useRefreshUser();
  const location = useLocation();

  const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email" }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters",
    }),
  });

  useLayoutEffect(() => {
    if (
      authSignal.value.accessToken.value &&
      authSignal.value.accessToken.value !== ""
    ) {
      if (location.state && location.state.prevRoute) {
        navigate(location.state.prevRoute);
      } else navigate("/");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authSignal.value.accessToken.value]);

  const loginHandle = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    if (emailRef.current && passwordRef.current && !isPending) {
      loginSchema
        .parseAsync({
          email: emailRef.current.value as string,
          password: passwordRef.current.value as string,
        })
        .then((data) => {
          if (!isLoginPending)
            startLoginTransition(() => {
              handleToastPromise({
                promiseFunc: mutateAsync(data),
                loadingMessage: "Login ...",
                optionalFunc: [refreshUser],
                dataOptionalFunc: [(token: Token) => auth({ token: token })],
                successMessage: "Login successfully!",
              });
            });
        })

        .catch((err) => {
          const error: ZodError[] = JSON.parse(err);
          error.forEach((e) => {
            toast(e.message);
          });
        });
    }
  };

  return (
    <main
      onSubmit={loginHandle}
      className="flex min-h-[calc(100dvh-theme(space.16))] justify-center bg-muted p-4 py-8 lg:py-16"
    >
      <section className="flex h-fit flex-col gap-1 rounded-xl bg-background p-8 md:min-w-[500px] lg:p-16">
        <h2 className="text-xl font-semibold">{"Login"}</h2>
        <h3 className="text-sm">
          {"Please provide the necessary information to log in"}
        </h3>
        <form className="mt-6 flex flex-col gap-3">
          <InputField
            placeholder="Email"
            label="Email"
            name={"email"}
            inputRef={emailRef}
          />
          <InputField
            placeholder={"Password"}
            label={"Password"}
            name={"password"}
            type="password"
            inputRef={passwordRef}
          />

          <Button type="submit" className="w-full">
            {"Login"}
          </Button>

          <span className="text-xs">
            {"Do not have account?"}{" "}
            <Link to="/sign-up" className="text-primary">
              {"Sign up"}
            </Link>
          </span>
        </form>
      </section>
    </main>
  );
}

export default LoginPage;
