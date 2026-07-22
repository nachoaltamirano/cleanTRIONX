import CategoryGrid from "../../features/categories/components/CategoryGrid";
import { useCategories } from "../../features/categories/hooks/useCategories";

const Categories = () => {
  const { data: categories = [], isLoading, error } = useCategories();

  if (isLoading) {
    return <p className="p-6 text-gray-600">Cargando categorías...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-600">No se pudieron cargar las categorías.</p>;
  }

  return <CategoryGrid categories={categories} />;
};

export default Categories;
