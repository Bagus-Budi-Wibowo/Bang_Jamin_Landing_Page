interface CurveSVGProps {
  className?: string;
  strokeColor?: string;
}

const CurveSVG: React.FC<CurveSVGProps> = ({
  className,
  strokeColor = "#fff"
}) => {
  return (
    <svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 360 130" 
      fill="none"
      className={className}
    >
      <path 
        opacity="0.3" 
        d="M-1 75.42C49.55 62.196 169.54-25.43 162.664 28.225c-8.596 67.07 14.043 48.03 58.067 26.052 44.023-21.977 42.773 41.782 54.372 61.946 11.383 19.788 32.445-72.652 85.897-72.652" 
        stroke={strokeColor} 
        strokeWidth="12"
      >
      </path>
    </svg>
  );
};

export default CurveSVG;