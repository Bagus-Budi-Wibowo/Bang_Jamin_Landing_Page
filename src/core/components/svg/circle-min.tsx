
interface CircleMinProps {
  color?: string;
  strokeColor?: string;
  className?: string;
}

const CircleMin: React.FC<CircleMinProps> = ({ 
  color = "#0F0F0F", 
  strokeColor = "#fff", 
  className = "" 
}) => {
  return (
    <svg 
      width="30" 
      height="30" 
      viewBox="0 0 30 30" 
      fill="none" 
      className={className}
    >
      <rect 
        width="30" 
        height="30" 
        rx="15" 
        fill={color}
      />
      <path 
        d="M8 15h14" 
        stroke={strokeColor} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CircleMin;