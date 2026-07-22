import Card from "../../../components/ui/Card";
import Badge from "../../../components/ui/Badge";
import Button from "../../../components/ui/Button";

const ProductCard = ({ product }) => {
  if (!product) return null;

  const imageUrl = product.image_url || product.image || product.img || "";
  const categoryName = product.category?.name || product.category || product.category_name || "";

  return (
    <Card className="flex h-full flex-col gap-4">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={product.name}
          className="h-48 w-full rounded-lg object-cover"
        />
      ) : (
        <div className="flex h-48 items-center justify-center rounded-lg bg-gray-100 text-sm text-gray-500">
          Sin imagen
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
            {categoryName ? <p className="mt-1 text-sm text-gray-500">{categoryName}</p> : null}
          </div>
          {categoryName ? <Badge variant="default">{categoryName}</Badge> : null}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3">
          <p className="text-lg font-semibold text-red-600">{product.price}</p>
          <Button variant="outline" size="sm">
            Ver detalle
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
