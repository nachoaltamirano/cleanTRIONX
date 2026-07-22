import { useQuery } from "@tanstack/react-query";
import { getAdminProducts } from "../services/adminProducts.service";

export const useAdminProducts = () => {
  return useQuery({
    queryKey: ["admin-products"],
    queryFn: getAdminProducts,
  });
};
