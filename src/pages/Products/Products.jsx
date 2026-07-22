import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductGrid from "../../features/products/components/ProductGrid";
import ProductsToolbar from "../../features/products/components/ProductsToolbar";
import { useCategories } from "../../features/categories/hooks/useCategories";
import { useProducts } from "../../features/products/hooks/useProducts";

const resolveCategoryName = (categoryValue, categories = []) => {
  if (!categoryValue) {
    return "";
  }

  const normalizedValue = String(categoryValue).trim();

  if (!normalizedValue) {
    return "";
  }

  const matchingCategory = categories.find(
    (category) =>
      String(category.id) === normalizedValue ||
      category.name?.toLowerCase() === normalizedValue.toLowerCase()
  );

  return matchingCategory?.name ?? "";
};

const getPriceValue = (value) => {
  const numericValue = Number(String(value).replace(/[^0-9.-]/g, ""));

  return Number.isFinite(numericValue) ? numericValue : Number.POSITIVE_INFINITY;
};

const Products = () => {
  const { data: products = [], isLoading, error } = useProducts();
  const { data: categories = [] } = useCategories();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(() => {
    const categoryParam = searchParams.get("category");
    return resolveCategoryName(categoryParam, categories);
  });
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const nextCategory = resolveCategoryName(categoryParam, categories);

    setSelectedCategory((currentCategory) => {
      if (currentCategory === nextCategory) {
        return currentCategory;
      }

      return nextCategory;
    });
  }, [categories, searchParams]);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();
    const filtered = products.filter((product) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        product.name?.toLowerCase().includes(normalizedSearch) ||
        product.description?.toLowerCase().includes(normalizedSearch);

      const matchesCategory =
        selectedCategory.length === 0 || product.category?.name === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    if (sortBy === "default") {
      return filtered;
    }

    const sorted = [...filtered];

    sorted.sort((firstProduct, secondProduct) => {
      switch (sortBy) {
        case "price-asc": {
          return getPriceValue(firstProduct.price) - getPriceValue(secondProduct.price);
        }
        case "price-desc": {
          return getPriceValue(secondProduct.price) - getPriceValue(firstProduct.price);
        }
        case "name-asc": {
          return String(firstProduct.name ?? "").localeCompare(String(secondProduct.name ?? ""));
        }
        case "name-desc": {
          return String(secondProduct.name ?? "").localeCompare(String(firstProduct.name ?? ""));
        }
        default:
          return 0;
      }
    });

    return sorted;
  }, [products, search, selectedCategory, sortBy]);

  const handleCategoryChange = (nextCategory) => {
    const selectedCategoryData = categories.find((category) => category.name === nextCategory);

    setSelectedCategory(nextCategory);

    const nextSearchParams = new URLSearchParams(searchParams.toString());

    if (selectedCategoryData?.id) {
      nextSearchParams.set("category", String(selectedCategoryData.id));
    } else {
      nextSearchParams.delete("category");
    }

    setSearchParams(nextSearchParams);
  };

  if (isLoading) {
    return <p className="p-6 text-gray-600">Cargando productos...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-600">No se pudieron cargar los productos.</p>;
  }

  if (!products.length) {
    return <p className="p-6 text-gray-600">No hay productos disponibles.</p>;
  }

  return (
    <section className="p-6">
      <h1 className="mb-4 text-2xl font-semibold text-gray-900">Productos</h1>
      <ProductsToolbar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        search={search}
        onSearchChange={setSearch}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      <ProductGrid products={filteredProducts} />
    </section>
  );
};

export default Products;