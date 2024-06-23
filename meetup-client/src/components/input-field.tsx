import { cn } from "@/lib/utils";
import { Input, InputProps } from "./ui/input";
import React, { useId } from "react";

interface InputFieldProps extends InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  name?: string;
  inputRef?: React.ForwardedRef<HTMLInputElement>;
  disable?: boolean;
}

function InputField({
  label,
  name,
  placeholder,
  type,
  inputRef,
  className,
  disable = false,
  ...props
}: InputFieldProps) {
  const id = useId();
  return (
    <div className={"flex flex-col"}>
      {label ? (
        <label
          htmlFor={id}
          className="mb-1 text-sm font-medium text-secondary-foreground/80"
        >
          {label}
        </label>
      ) : null}
      <Input
        id={id}
        placeholder={placeholder}
        type={type}
        name={name}
        ref={inputRef}
        disabled={disable}
        className={cn(
          "duration-500 focus-within:border-primary focus-within:ring-0 hover:border-primary focus:ring-0 focus-visible:ring-0 active:border-primary",
          className,
        )}
        {...props}
      />
    </div>
  );
}

export default InputField;
