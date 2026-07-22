import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../services/products.service";

export const useProduct = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    enabled: Boolean(id),
  });
};
