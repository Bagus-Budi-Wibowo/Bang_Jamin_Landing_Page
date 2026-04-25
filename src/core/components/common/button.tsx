import React, { forwardRef } from "react";

type ButtonVariant = "outline" | "secondary" | "ghost" | "default";
type ButtonSize = "sm" | "md" | "lg";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      variant = "default",
      size = "md",
      className = "",
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const base = "inline-flex items-center justify-center rounded-2xl font-medium cursor-pointer hover:-translate-y-[2px] hover:shadow transition-all duration-300";

    const variants: Record<ButtonVariant, string> = {
      default: "bg-bj-primary text-white hover:bg-bj-primary/80",
      outline: "border border-bj-primary text-bj-primary hover:bg-bj-primary/10",
      secondary: "bg-gray-200 text-black hover:bg-gray-300",
      ghost: "hover:bg-gray-100",
    };

    const sizes: Record<ButtonSize, string> = {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 text-sm",
      lg: "h-12 px-6 text-base",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export { Button };