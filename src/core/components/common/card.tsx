import React from "react";
import { cn } from "@/src/core/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        "bg-white border-[1.5px] border-black p-8 rounded-4xl drop-shadow-[8px_8px_0px_rgba(65,64,72,1)]",
        className
      )}
    >
      {children}
    </div>
  );
};

export { Card };