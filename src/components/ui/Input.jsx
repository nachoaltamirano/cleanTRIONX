const Input = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="mb-2 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-200 disabled:cursor-not-allowed disabled:bg-gray-50 ${error ? "border-red-500" : ""} ${className}`.trim()}
        {...props}
      />

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;