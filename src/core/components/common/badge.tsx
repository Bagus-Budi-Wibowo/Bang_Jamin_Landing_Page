import { cn } from "@/src/core/lib/utils";

const Badge: React.FC<{ children: React.ReactNode, className?: string }> = ({
  children,
  className
}) => {
  return (
    <span className={cn(
      "border rounded-full px-2 py-0.5 mx-auto",
      className
    )}>
      {children}
    </span>
  )
};

export { Badge };