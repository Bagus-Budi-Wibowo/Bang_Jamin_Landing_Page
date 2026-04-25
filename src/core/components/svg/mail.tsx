interface MailSvgProps {
  className?: string;
}

const MailSvg: React.FC<MailSvgProps> = ({ 
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
      <path 
        d="M2.667 2.678h10.666c.734 0 1.334.6 1.334 1.333v8c0 .733-.6 1.333-1.333 1.333H2.667c-.733 0-1.333-.6-1.333-1.333v-8c0-.733.6-1.333 1.333-1.333z" 
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path 
        d="M14.667 4.01L8 8.678 1.333 4.011"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MailSvg;