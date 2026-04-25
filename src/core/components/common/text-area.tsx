"use client";

import Image from "next/image";
import { cn } from "@/src/core/lib/utils";
import { Button } from "@/src/core/components/common/button";
import React, { forwardRef, useState, useEffect } from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  required?: boolean;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, className = "", required = false, value, onChange, defaultValue, ...props }, ref) => {
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue ?? "");

    useEffect(() => {
      if (isControlled) {
        setInternalValue(value as string);
      }
    }, [value, isControlled]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
        } as React.ChangeEvent<HTMLTextAreaElement>;
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

        <div className="relative">
          <textarea
            ref={ref}
            value={inputValue}
            onChange={handleChange}
            className={cn(
              "w-full border rounded-xl px-3 py-4 text-base placeholder:text-base",
              "hover:scale-[1.01] hover:border-[#18a0fb]",
              "focus:border-[#18a0fb] focus:outline-none focus:ring-0",
              "transition-all duration-300 ease-in-out",
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
                width={20}
                height={20}
              />
            </Button>
          )}
        </div>
      </div>
    );
  }
);

export default TextArea;