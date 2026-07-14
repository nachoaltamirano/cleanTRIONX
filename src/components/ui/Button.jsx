const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        rounded-lg
        px-6
        py-3
        font-medium
        transition
        hover:opacity-90
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;