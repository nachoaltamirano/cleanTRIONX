import { Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import Home from "../pages/Home/Home";
import Categories from "../pages/Categories/Categories";
import ProductDetail from "../pages/Product/ProductDetail";
import Products from "../pages/Products/Products";
import { Cart } from "../features/cart";

const PublicRoutes = () => {
  return (
    <Route element={<PublicLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  );
};

export default PublicRoutes;