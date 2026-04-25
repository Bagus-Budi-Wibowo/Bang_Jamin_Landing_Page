"use client";

import React, { useState, useRef, useEffect } from "react";
import CircleMin from "@/src/core/components/svg/circle-min";
import CirclePlus from "@/src/core/components/svg/circle-plus";
import { cn } from "@/src/core/lib/utils";

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  isLast?: boolean;
  onToggle?: () => void;
}

interface AccordionProps {
  children: React.ReactNode;
  multiple?: boolean;
}

export const AccordionItem = ({
  title,
  children,
  isOpen = false,
  isLast = false,
  className,
  onToggle,
  ...props
}: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden rounded-3xl",
        "hover:scale-[1.02] hover:translate-y-[-2px] hover:shadow-[0_8px_16px_rgba(0,0,0,0.25)]",
        "transition-all duration-300 ease-in-out",
        className
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left text-base p-6 cursor-pointer"
      >
        <span className="pr-5">{title}</span>
        {isOpen ? <CircleMin className="shrink-0" /> : <CirclePlus className="shrink-0" />}
      </button>

      <div
        style={{ height: `${height}px`, transition: "height 0.3s ease" }}
        className="overflow-hidden"
      >
        <div ref={contentRef} className="p-6 text-base text-gray-600">
          {children}
        </div>
      </div>

      {!isLast && (
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(to right, transparent 0%, #e5e7eb 10%, #e5e7eb 90%, transparent 100%)",
          }}
        />
      )}
    </div>
  );
};

const Accordion = ({ children, multiple = false }: AccordionProps) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const childArray = React.Children.toArray(children);

  const toggle = (index: number) => {
    if (multiple) {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="flex flex-col gap-2 p-2">
      {childArray.map((child, index) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child as React.ReactElement<AccordionItemProps>, {
          isOpen: openIndexes.includes(index),
          onToggle: () => toggle(index),
          isLast: index === childArray.length - 1,
        });
      })}
    </div>
  );
};

export default Accordion;