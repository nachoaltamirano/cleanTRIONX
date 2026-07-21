const SectionTitle = ({
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  const alignClasses = {
    center: "text-center",
    left: "text-left",
    right: "text-right",
  };

  const alignmentClass = alignClasses[align] || alignClasses.center;

  return (
    <div className={`mb-12 ${alignmentClass} ${className}`.trim()}>
      <h2 className="text-4xl font-bold">{title}</h2>

      {subtitle && <p className="mt-4 text-gray-600">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;