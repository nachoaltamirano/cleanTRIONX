const Input = ({
  label,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        {...props}
        className={`
          w-full
          rounded-lg
          border
          border-gray-300
          px-4
          py-3
          outline-none
          transition
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-200
          ${error ? "border-red-500" : ""}
          ${className}
        `}
      />

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;