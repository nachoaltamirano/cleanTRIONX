import Container from '../../../components/ui/Container';
import Input from '../../../components/ui/Input';

const ProductsToolbar = ({
  categories,
  selectedCategory,
  onCategoryChange,
  search,
  onSearchChange,
  sortBy,
  onSortChange,
}) => {
  return (
    <Container className="mb-6 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="w-full md:max-w-sm">
          <Input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Buscar productos"
          />
        </div>

        <div className="flex w-full flex-col gap-4 md:max-w-xl md:flex-row">
          <div className="w-full md:max-w-xs">
            <select
              value={selectedCategory}
              onChange={(event) => onCategoryChange(event.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none"
            >
              <option value="">Todas las categorías</option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full md:max-w-xs">
            <select
              value={sortBy}
              onChange={(event) => onSortChange(event.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none"
            >
              <option value="default">Orden por defecto</option>
              <option value="price-asc">Precio: menor a mayor</option>
              <option value="price-desc">Precio: mayor a menor</option>
              <option value="name-asc">Nombre: A-Z</option>
              <option value="name-desc">Nombre: Z-A</option>
            </select>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductsToolbar;
