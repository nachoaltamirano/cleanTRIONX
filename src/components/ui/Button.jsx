const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  variant = "primary",
  size = "md",
  disabled = false,
}) => {
  const baseClasses = "rounded-lg font-medium transition disabled:cursor-not-allowed disabled:opacity-60";

  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700",
    secondary: "bg-gray-900 text-white hover:bg-gray-700",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;