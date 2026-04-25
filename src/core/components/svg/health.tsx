interface HealthSvgProps {
  color?: string;
  className?: string;
}

const HealthSvg: React.FC<HealthSvgProps> = ({ 
  color = "#0F0F0F", 
  className 
}) => {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 42 42" 
      fill="none"
      className={className}
    >
      <path 
        d="M14.692 4.466c2.581-1.6 4.834-.955 6.187.072.555.42.833.631.996.631.163 0 .44-.21.996-.631 1.353-1.027 3.606-1.671 6.187-.072 3.387 2.099 4.154 9.023-3.66 14.864C23.91 20.443 23.166 21 21.875 21c-1.29 0-2.035-.557-3.523-1.67-7.814-5.841-7.047-12.765-3.66-14.864z" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path 
        d="M7 24.5h4.19c.516 0 1.023.116 1.484.339l3.573 1.729c.46.223.968.338 1.483.338h1.825c1.764 0 3.195 1.385 3.195 3.093 0 .069-.047.13-.116.148l-4.447 1.23a3.416 3.416 0 01-2.393-.216l-3.82-1.848" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M22.75 28.875l8.037-2.47c1.425-.443 2.965.083 3.858 1.319.645.894.383 2.173-.558 2.716l-13.152 7.588a3.49 3.49 0 01-2.743.328L7 35.035" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  )
};

export default HealthSvg;