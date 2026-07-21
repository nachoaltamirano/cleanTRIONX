const Loader = ({ size = "md", text = "Cargando...", className = "" }) => {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-2",
    lg: "h-8 w-8 border-3",
  };

  const selectedSize = sizeClasses[size] || sizeClasses.md;

  return (
    <div className={`flex items-center justify-center gap-3 py-20 ${className}`.trim()}>
      <div
        className={`animate-spin rounded-full border-t-red-500 border-r-transparent border-b-transparent border-l-transparent ${selectedSize}`.trim()}
        aria-label="loading"
      />
      {text && <span className="text-sm text-gray-600">{text}</span>}
    </div>
  );
};

export default Loader;