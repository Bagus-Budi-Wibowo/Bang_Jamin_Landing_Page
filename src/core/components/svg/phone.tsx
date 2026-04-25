interface PhoneSvgProps {
  className?: string;
}

const PhoneSvg: React.FC<PhoneSvgProps> = ({ 
  className 
}) => {
  return (
    <svg 
      width="16" 
      height="17" 
      viewBox="0 0 16 17" 
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_30620_41203)">
        <path 
          d="M14.666 11.29v2a1.334 1.334 0 01-1.453 1.334 13.193 13.193 0 01-5.753-2.047 13 13 0 01-4-4 13.193 13.193 0 01-2.047-5.78A1.333 1.333 0 012.74 1.344h2A1.333 1.333 0 016.073 2.49a8.56 8.56 0 00.467 1.874 1.333 1.333 0 01-.3 1.406l-.847.847a10.666 10.666 0 004 4l.847-.847a1.334 1.334 0 011.406-.3 8.559 8.559 0 001.874.467 1.334 1.334 0 011.146 1.354z" 
          stroke="currentColor" 
          strokeWidth="1.33333" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_30620_41203">
          <path fill="#fff" transform="translate(0 .01)" d="M0 0H16V16H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default PhoneSvg;
