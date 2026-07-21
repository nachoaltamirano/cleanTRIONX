const Badge = ({ children, variant = "default", className = "" }) => {
  const variantClasses = {
    default: "bg-gray-100 text-gray-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    danger: "bg-red-100 text-red-700",
  };

  const selectedVariant = variantClasses[variant] || variantClasses.default;

  return (
    <span className={`rounded-full px-3 py-1 text-sm ${selectedVariant} ${className}`.trim()}>
      {children}
    </span>
  );
};

export default Badge;