import { ErrorResponseImpl } from "@/services/instance";
import { X } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

export function getErrorMessage(err: unknown) {
  const unknownError = "Something went wrong, please try again later.";

  if (err instanceof z.ZodError) {
    const errors = err.issues.map((issue) => {
      return issue.message;
    });
    return errors.join("\n");
  } else if (err instanceof Error) {
    return err.message;
  } else if (err instanceof ErrorResponseImpl) {
    return err.detail;
  } else {
    return unknownError;
  }
}

export function getErrorElement(err: unknown) {
  let errorMessage;
  if (typeof err === "string") errorMessage = err;
  else errorMessage = getErrorMessage(err);

  return (
    <div className="flex items-center gap-2">
      <X className="rounded-full bg-red-500 p-1 font-medium text-white" />
      <span className="text-wrap text-sm font-medium">{errorMessage}</span>
    </div>
  );
}

export function showErrorToast(err: unknown) {
  return toast.error(getErrorElement(err));
}
