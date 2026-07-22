import { supabase } from "../../../supabase/client";

const CATEGORIES_TABLE = "categories";

export const getCategories = async () => {
  const { data, error } = await supabase.from(CATEGORIES_TABLE).select("*").order("id", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
};

export const getCategoryById = async (id) => {
  const { data, error } = await supabase.from(CATEGORIES_TABLE).select("*").eq("id", id).single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const createCategory = async (category) => {
  const { data, error } = await supabase.from(CATEGORIES_TABLE).insert(category).select().single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const updateCategory = async (id, category) => {
  const { data, error } = await supabase.from(CATEGORIES_TABLE).update(category).eq("id", id).select().single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const deleteCategory = async (id) => {
  const { data, error } = await supabase.from(CATEGORIES_TABLE).delete().eq("id", id).select().single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};