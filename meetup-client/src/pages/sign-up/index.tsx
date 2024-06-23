import InputField from "@/components/input-field";
import { Button } from "@/components/ui/button";
import React, { useRef } from "react";
import { ZodError, z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import LoadingPage from "@/components/loading-page";
import { toast } from "sonner";
import useSignUp from "@/hooks/auth/useSignUp";
import handleToastPromise from "@/lib/handleToastPromise";
import { getErrorElement } from "@/lib/handleError";

function SignUpPage() {
  const [isSignUpPending, startSignUpTransition] = React.useTransition();

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const { mutateAsync, isPending } = useSignUp();
  const navigate = useNavigate();

  const registerSchema = z
    .object({
      first_name: z.string(),
      last_name: z.string(),
      email: z.string().email({ message: "Invalid email" }),
      password: z.string().min(6, {
        message: "Password must be at least 6 characters",
      }),
      confirmPassword: z.string(),
    })
    .refine((val) => val.password == val.confirmPassword, {
      message: "Confirm the password does not match",
    });

  const handleLogin = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    if (
      emailRef.current &&
      passwordRef.current &&
      firstNameRef.current &&
      lastNameRef.current &&
      confirmPasswordRef.current
    ) {
      registerSchema
        .parseAsync({
          first_name: firstNameRef.current.value as string,
          last_name: lastNameRef.current.value as string,
          email: emailRef.current.value as string,
          password: passwordRef.current.value as string,
          confirmPassword: confirmPasswordRef.current.value as string,
        })
        .then((data) => {
          if (!isSignUpPending)
            startSignUpTransition(() => {
              handleToastPromise({
                promiseFunc: mutateAsync({
                  email: data.email,
                  password: data.password,
                  first_name: data.first_name,
                  last_name: data.last_name,
                }),
                loadingMessage: "Signing up ...",
                optionalFunc: [() => navigate("/login")],
                successMessage:
                  "Created account successfully! Please login to continue.",
              });
            });
        })
        .catch((err) => {
          const error: ZodError[] = JSON.parse(err);
          error.forEach((e) => {
            toast.error(getErrorElement(e.message));
          });
        });
    }
  };

  return (
    <main
      onSubmit={handleLogin}
      className="flex min-h-[calc(100dvh-theme(space.16))] w-full justify-center bg-muted p-4 py-8 lg:py-16"
    >
      {isPending && isSignUpPending ? <LoadingPage isLayout={true} /> : null}
      <section className="flex h-fit flex-col gap-1 rounded-xl bg-background p-8 md:min-w-[500px] lg:p-16">
        <h2 className="text-xl font-semibold">{"Sign up"}</h2>
        <h3 className="text-sm">
          {
            "Please fill in the most accurate information fields to register an account"
          }
        </h3>
        <form className="mt-6 flex flex-col gap-3">
          <InputField
            placeholder={"First name"}
            label={"First name"}
            name={"first-name"}
            inputRef={firstNameRef}
          />
          <InputField
            placeholder={"Last name"}
            label={"Last name"}
            name={"last-name"}
            inputRef={lastNameRef}
          />
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
          <InputField
            placeholder={"Confirm password"}
            label={"Confirm password"}
            name={"confirmPassword"}
            type="password"
            inputRef={confirmPasswordRef}
          />

          <Button
            type="submit"
            disabled={isPending && isSignUpPending}
            className="w-full"
          >
            {"Sign up"}
          </Button>

          <span className="text-xs">
            {"Already have an account?"}{" "}
            <Link to="/login" className="text-primary">
              {"Login"}
            </Link>
          </span>
        </form>
      </section>
    </main>
  );
}

export default SignUpPage;
