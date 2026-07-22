import Badge from "../../../components/ui/Badge";
import Button from "../../../components/ui/Button";

const ProductInfo = ({ product }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-semibold text-gray-900">{product?.name ?? "Producto"}</h1>
        <Badge variant="secondary">{product?.category ?? "Sin categoría"}</Badge>
      </div>

      <div className="space-y-2 text-sm text-gray-600">
        <p>
          <span className="font-semibold text-gray-900">Precio:</span>{" "}
          ${Number(product?.price ?? 0).toLocaleString("es-CL")}
        </p>
        <p>
          <span className="font-semibold text-gray-900">Stock:</span>{" "}
          {product?.stock ?? 0} unidades
        </p>
      </div>

      <p className="text-gray-700">{product?.description ?? "Sin descripción disponible."}</p>

      <Button variant="primary">Agregar al carrito</Button>
    </div>
  );
};

export default ProductInfo;
