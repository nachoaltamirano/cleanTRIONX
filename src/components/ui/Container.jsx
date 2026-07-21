const Container = ({
  children,
  className = "",
  maxWidth = "lg",
  px = "4",
}) => {
  const maxWidths = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    full: "max-w-none",
  };

  const paddings = {
    none: "px-0",
    sm: "px-4",
    md: "px-4 md:px-6",
    lg: "px-4 md:px-6 lg:px-8",
  };

  const resolvedMaxWidth = maxWidths[maxWidth] || maxWidths.lg;
  const resolvedPadding = paddings[px] || paddings.lg;

  return (
    <div className={`mx-auto ${resolvedMaxWidth} ${resolvedPadding} ${className}`.trim()}>
      {children}
    </div>
  );
};

export default Container;