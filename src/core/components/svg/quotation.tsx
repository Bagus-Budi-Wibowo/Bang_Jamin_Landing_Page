interface QuotationSVGProps {
  className?: string;
}

const QuotationSVG: React.FC<QuotationSVGProps> = ({ className }) => {
  return (
    <svg
      width="68"
      height="49"
      viewBox="0 0 68 49"
      fill="none"
      className={className}
    >
      <g
        style={{ mixBlendMode: "overlay" }}
        opacity={0.4}
        fill="#000000"
      >
        <path d="M0 0H29.0134V29.0134H0z" />
        <path d="M38.9863 0H67.9997V29.0134H38.9863z" />
        <path d="M29.013 29.014l-6.8 19.946h-13.6l2.267-19.946h18.133zM68 29.014L61.2 48.96H47.6l2.266-19.946H68z" />
      </g>
    </svg>
  );
};

export default QuotationSVG;