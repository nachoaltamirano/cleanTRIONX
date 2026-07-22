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

export const getProducts = async () => {
  const { data, error } = await supabase.from(PRODUCTS_TABLE).select("*").order("id", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map(normalizeProduct);
};

export const getProductById = async (id) => {
  const { data, error } = await supabase.from(PRODUCTS_TABLE).select("*").eq("id", id).single();

  if (error) {
    throw new Error(error.message);
  }

  return normalizeProduct(data);
};

export const createProduct = async (product) => {
  const { data, error } = await supabase.from(PRODUCTS_TABLE).insert(product).select().single();

  if (error) {
    throw new Error(error.message);
  }

  return normalizeProduct(data);
};

export const updateProduct = async (id, product) => {
  const { data, error } = await supabase.from(PRODUCTS_TABLE).update(product).eq("id", id).select().single();

  if (error) {
    throw new Error(error.message);
  }

  return normalizeProduct(data);
};

export const deleteProduct = async (id) => {
  const { data, error } = await supabase.from(PRODUCTS_TABLE).delete().eq("id", id).select().single();

  if (error) {
    throw new Error(error.message);
  }

  return normalizeProduct(data);
};