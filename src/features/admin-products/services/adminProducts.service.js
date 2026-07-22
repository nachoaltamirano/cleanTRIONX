import { supabase } from "../../../supabase/client";

const PRODUCTS_TABLE = "products";

const normalizeProduct = (product = {}) => ({
  id: product.id,
  name: product.name ?? "",
  description: product.description ?? "",
  price: product.price ?? 0,
  stock: product.stock ?? 0,
  image: product.image ?? product.image_url ?? "",
  category: product.category?.name ?? product.category_name ?? product.category ?? null,
});

export const getAdminProducts = async () => {
  const { data, error } = await supabase.from(PRODUCTS_TABLE).select("*").order("id", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map(normalizeProduct);
};
