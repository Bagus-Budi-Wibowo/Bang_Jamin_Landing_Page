interface StarGroupSvgProps {
  color?: string;
  className?: string;
}

const StarGroupSvg: React.FC<StarGroupSvgProps> = ({
  color = "#60C375",
  className,
}) => {
  return (
    <svg 
      width="18" 
      height="18" 
      viewBox="0 0 18 18" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M10.555 4.677s.364 3.4 1.782 4.818c1.42 1.419 4.819 1.783 4.819 1.783s-3.4.364-4.819 1.783c-1.418 1.419-1.782 4.818-1.782 4.818s-.365-3.4-1.784-4.818c-1.418-1.419-4.818-1.783-4.818-1.783s3.4-.364 4.819-1.783c1.418-1.419 1.783-4.818 1.783-4.818zM4.256.12s.235 2.192 1.15 3.106c.914.915 3.105 1.15 3.105 1.15s-2.191.235-3.106 1.15c-.914.914-1.15 3.106-1.15 3.106S4.022 6.44 3.107 5.525C2.192 4.611 0 4.375 0 4.375s2.192-.234 3.106-1.149C4.021 2.312 4.256.12 4.256.12z" 
        fill={color}
      />
    </svg>
  );
};

export default StarGroupSvg;