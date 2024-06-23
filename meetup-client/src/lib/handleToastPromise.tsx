import { toast } from "sonner";
import { getErrorElement } from "./handleError";
import { Check } from "lucide-react";

type PromiseT<Data = unknown> = Promise<Data> | (() => Promise<Data>);

type handleToastPromiseProps = {
  promiseFunc: PromiseT;
  optionalFunc?: { (): void }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataOptionalFunc?: { (data: any): void }[];
  loadingMessage?: string;
  errorMessage?: string;
  successMessage?: string;
};

function handleToastPromise({
  promiseFunc,
  optionalFunc = [],
  dataOptionalFunc = [],
  successMessage = "Success",
  loadingMessage = "Loading",
}: handleToastPromiseProps) {
  return toast.promise(promiseFunc, {
    loading: loadingMessage,
    success: (data) => {
      dataOptionalFunc.forEach((func) => func(data));
      optionalFunc.forEach((func) => func());
      return (
        <div className="flex items-center gap-2">
          <Check className="rounded-full bg-green-600 p-1 font-medium text-white" />
          <span className="text-sm font-medium">{successMessage}</span>
        </div>
      );
    },
    error: (err: unknown) => {
      return getErrorElement(err);
    },
  });
}

export default handleToastPromise;
