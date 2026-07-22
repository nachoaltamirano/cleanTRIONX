import CategoryCard from "./CategoryCard";

const CategoryGrid = ({ categories }) => {
  if (!categories.length) {
    return <p className="p-6 text-gray-600">No hay categorías disponibles.</p>;
  }

  return (
    <section className="p-6">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
