const Card = ({
  children,
  className = "",
  variant = "default",
  padding = "md",
}) => {
  const variants = {
    default: "border border-gray-200 bg-white shadow-sm",
    muted: "border border-gray-100 bg-gray-50 shadow-none",
    elevated: "border border-gray-200 bg-white shadow-md",
  };

  const paddings = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div className={`rounded-xl ${variants[variant] || variants.default} ${paddings[padding] || paddings.md} ${className}`.trim()}>
      {children}
    </div>
  );
};

export default Card;