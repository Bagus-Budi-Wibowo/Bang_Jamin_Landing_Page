interface FacebookSvgProps {
  className?: string;
  fillColor?: string;
  fillColor2?: string;
}

const FacebookSvg: React.FC<FacebookSvgProps> = ({
  className,
  fillColor = "#3F3F3F",
  fillColor2 = "#fff"
}) => {
  return (
    <svg 
      width="43" 
      height="42" 
      viewBox="0 0 43 42" 
      fill="none"
      className={className}
    >
      <path 
        d="M42.526 20.892C42.526 9.36 33.177.011 21.645.011 10.112.01.763 9.36.763 20.892c0 10.423 7.636 19.062 17.619 20.628V26.928H13.08v-6.036h5.302v-4.6c0-5.234 3.118-8.124 7.887-8.124 2.285 0 4.675.407 4.675.407v5.14H28.31c-2.595 0-3.404 1.609-3.404 3.26v3.917H30.7l-.926 6.036h-4.866V41.52c9.983-1.566 17.62-10.205 17.62-20.628z" 
        fill={fillColor}>
      </path>
      <path 
        d="M29.773 26.929l.926-6.036h-5.792v-3.917c0-1.652.81-3.261 3.404-3.261h2.633v-5.14s-2.39-.407-4.675-.407c-4.77 0-7.887 2.89-7.887 8.124v4.6H13.08v6.037h5.302V41.52a21.056 21.056 0 006.525 0V26.929h4.866z" 
        fill={fillColor2}>
      </path>
    </svg>
  );
};

export default FacebookSvg;