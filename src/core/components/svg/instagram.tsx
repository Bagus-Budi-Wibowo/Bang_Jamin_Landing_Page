interface InstagramSvgProps {
  className?: string;
  fillColor?: string;
}

const InstagramSvg: React.FC<InstagramSvgProps> = ({
  className,
  fillColor = "#3F3F3F"
}) => {
  return (
    <svg 
      width="42" 
      height="42" 
      viewBox="0 0 42 42" 
      fill="none"
      className={className}
    >
      <path 
        d="M27.564 20.892a6.682 6.682 0 11-6.682-6.682 6.703 6.703 0 016.682 6.682zm14.2-9.188V30.08a11.694 11.694 0 01-11.695 11.694H11.695A11.694 11.694 0 010 30.08V11.704A11.694 11.694 0 0111.694.011H30.07a11.694 11.694 0 0111.693 11.693zm-10.86 9.188a10.022 10.022 0 10-20.044 0 10.022 10.022 0 0020.045 0zm3.342-10.858a2.506 2.506 0 10-5.012 0 2.506 2.506 0 005.012 0z" 
        fill={fillColor}
      />
    </svg>
  );
};

export default InstagramSvg;