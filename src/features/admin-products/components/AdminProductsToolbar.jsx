import Button from "../../../components/ui/Button";

const AdminProductsToolbar = () => {
  return (
    <div className="mb-6 flex items-center justify-between gap-4">
      <h2 className="text-2xl font-semibold text-gray-900">Productos</h2>
      <Button variant="primary">Nuevo producto</Button>
    </div>
  );
};

export default AdminProductsToolbar;
