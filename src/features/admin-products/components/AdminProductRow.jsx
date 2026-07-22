import Button from "../../../components/ui/Button";

const AdminProductRow = ({ product }) => {
  const imageUrl = product?.image || "";
  const categoryName = product?.category || "Sin categoría";

  return (
    <tr className="align-middle">
      <td className="px-4 py-3">
        {imageUrl ? (
          <img src={imageUrl} alt={product?.name ?? "Producto"} className="h-12 w-12 rounded-lg object-cover" />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-xs text-gray-500">
            Sin img
          </div>
        )}
      </td>
      <td className="px-4 py-3 font-medium text-gray-900">{product?.name ?? "Sin nombre"}</td>
      <td className="px-4 py-3 text-gray-600">{categoryName}</td>
      <td className="px-4 py-3 text-gray-600">{product?.price ?? 0}</td>
      <td className="px-4 py-3 text-gray-600">{product?.stock ?? 0}</td>
      <td className="px-4 py-3">
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Editar
          </Button>
          <Button variant="outline" size="sm">
            Eliminar
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default AdminProductRow;
