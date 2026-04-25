import { cn } from "@/src/core/lib/utils";

interface DividerProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
  text?: string;
}

const Divider: React.FC<DividerProps> = ({ 
  orientation = "horizontal",
  className = "",
  text = "",
  ...props
}) => {
  const variantClasses: Record<"horizontal" | "vertical", string> = {
    horizontal: "w-full h-[2px] bg-gray-200",
    vertical: "w-[2px] h-full bg-gray-200",
  };

  const textClasses: Record<"horizontal" | "vertical", string> = {
    horizontal: "text-sm text-gray-500",
    vertical: "text-sm text-gray-500",
  };

  return (
    <div
      className={cn(variantClasses[orientation], className)}
      {...props}
    >
      {text && (
        <span className={textClasses[orientation]}>{text}</span>
      )}
    </div>
  );
};

export default Divider;