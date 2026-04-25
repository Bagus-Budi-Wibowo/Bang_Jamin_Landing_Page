"use client";

import Image from "next/image";
import { cn } from "@/src/core/lib/utils";
import { Button } from "@/src/core/components/common/button";
import React, { forwardRef, useState, useEffect } from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  leftAdornment?: React.ReactNode;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      className = "",
      required = false,
      value,
      onChange,
      leftAdornment,
      ...props
    },
    ref
  ) => {
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState(
      value ?? props.defaultValue ?? ""
    );

    useEffect(() => {
      if (isControlled) {
        setInternalValue(value as string);
      }
    }, [value, isControlled]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
    };

    const handleClear = () => {
      setInternalValue("");

      if (isControlled && onChange) {
        const event = {
          target: { value: "" },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(event);
      } else if (typeof ref !== "function" && ref?.current) {
        ref.current.value = "";
      }
    };

    const inputValue = isControlled ? value : internalValue;

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label className="text-base font-bj-content">
            {label}
            {required && <span className="text-red-500 ml-2">*</span>}
          </label>
        )}

        <div className={cn(
          "relative flex items-center border rounded-xl overflow-hidden",
          "hover:scale-[1.01] hover:border-[#18a0fb] focus-within:border-[#18a0fb]",
          "transition-all duration-300 ease-in-out"
        )}>
          {leftAdornment && (
            <div className="flex items-center justify-center shrink-0 self-stretch px-3 bg-gray-100 border-r text-base font-medium text-gray-700">
              {leftAdornment}
            </div>
          )}

          <input
            ref={ref}
            value={inputValue}
            onChange={handleChange}
            className={cn(
              "w-full px-3 py-4 text-base placeholder:text-base focus:outline-none",
              className
            )}
            {...props}
          />

          {!!internalValue && (
            <Button
              variant="ghost"
              type="button"
              onClick={handleClear}
              className="h-fit absolute right-3 top-1/2 -translate-y-1/2 p-0! cursor-pointer"
            >
              <Image
                src="/assets/images/circleX.webp"
                alt="clear"
                width={25}
                height={25}
              />
            </Button>
          )}
        </div>
      </div>
    );
  }
);


export default TextField;