import AdminProductsTable from "../../features/admin-products/components/AdminProductsTable";
import AdminProductsToolbar from "../../features/admin-products/components/AdminProductsToolbar";
import { useAdminProducts } from "../../features/admin-products/hooks/useAdminProducts";

const AdminProducts = () => {
  const { data: products = [], isLoading, error } = useAdminProducts();

  if (isLoading) {
    return <p className="p-6 text-gray-600">Cargando productos...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-600">No se pudieron cargar los productos.</p>;
  }

  return (
    <section className="space-y-6 p-6">
      <AdminProductsToolbar />
      <AdminProductsTable products={products} />
    </section>
  );
};

export default AdminProducts;
