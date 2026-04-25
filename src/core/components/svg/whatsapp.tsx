interface WhatsappSvgProps {
  className?: string;
}

const WhatsappSvg: React.FC<WhatsappSvgProps> = ({ 
  className 
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12.513 3.694A8.338 8.338 0 0 0 5.15 8.12a8.352 8.352 0 0 0 .443 8.583L4.17 20.39l3.794-1.357a8.338 8.338 0 0 0 12.557-4.616 8.354 8.354 0 0 0-4.266-9.84 8.337 8.337 0 0 0-3.743-.883Z"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.7 13.857c.943.944 3.025 2.178 3.99 2.178a1.835 1.835 0 0 0 1.813-1.452v-.726s-.893-.436-1.451-.726c-.559-.29-1.45.726-1.45.726a4.728 4.728 0 0 1-1.814-1.089 4.734 4.734 0 0 1-1.088-1.815s1.015-.893.725-1.451c-.29-.56-.725-1.452-.725-1.452h-.726a1.835 1.835 0 0 0-1.45 1.815c0 .965 1.233 3.048 2.176 3.992Z"
      ></path>
    </svg>
  );
};

export default WhatsappSvg;