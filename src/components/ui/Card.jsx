const Card = ({ children }) => {
  return (
    <div className="rounded-xl border bg-white shadow-sm p-6">
      {children}
    </div>
  );
};

export default Card;