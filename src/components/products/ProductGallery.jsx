const ProductGallery = ({ product }) => {
  return (
    <div className="flex items-center justify-center">
      {product?.image ? (
        <img
          src={product.image}
          alt={product.name ?? "Producto"}
          className="max-h-[420px] w-full rounded-xl object-cover"
        />
      ) : (
        <div className="flex h-64 w-full items-center justify-center rounded-xl bg-gray-100 text-gray-500">
          Sin imagen
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
