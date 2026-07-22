import AdminProductRow from "./AdminProductRow";

const AdminProductsTable = ({ products = [] }) => {
  if (!products.length) {
    return (
      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Imagen</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Nombre</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Categoría</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Precio</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Stock</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            <tr>
              <td className="px-4 py-6 text-gray-500" colSpan="6">
                Sin datos todavía.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left font-semibold text-gray-700">Imagen</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-700">Nombre</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-700">Categoría</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-700">Precio</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-700">Stock</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-700">Acciones</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {products.map((product) => (
            <AdminProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductsTable;
