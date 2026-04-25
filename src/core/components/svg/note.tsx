interface NoteSvgProps {
  color?: string;
  className?: string;
}

const NoteSvg: React.FC<NoteSvgProps> = ({ 
  color = "#FFFFFF", 
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
        d="M18.57 8.75l-.921 3.5m3.874-7.415c.725 1.278.295 2.91-.96 3.648a2.6 2.6 0 01-3.586-.977c-.725-1.278-.295-2.91.96-3.648a2.6 2.6 0 013.586.977z" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round"
      >
      </path>
      <path 
        d="M22.75 38.496c-1.696-2.065-4.375-6.996-7.875-6.996-2.258.185-3.438 2.382-4.64 4.075m0 0c-.694-.643-.956-1.603-1.478-3.522L5.705 20.838c-1.228-4.514-1.842-6.77-.8-8.548 1.043-1.778 3.335-2.383 7.918-3.592l3.802-1.003m-6.39 27.88c.693.644 1.682.843 3.659 1.241l7.248 1.46c1.545.312 1.56.312 3.083-.09l4.952-1.307c4.583-1.209 6.875-1.814 7.917-3.592 1.043-1.777.429-4.034-.8-8.548l-3.039-11.17c-1.228-4.513-1.842-6.77-3.648-7.797-1.573-.894-3.515-.55-7.02.353" 
        stroke={color} 
        strokeWidth="2"
      >
      </path>
    </svg>
  );
};

export default NoteSvg;