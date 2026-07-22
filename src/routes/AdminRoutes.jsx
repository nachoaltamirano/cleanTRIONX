import { Route } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";
import AdminProducts from "../pages/Admin/AdminProducts";

const AdminRoutes = () => {
  return (
    <Route element={<AdminLayout />}>
      <Route path="/admin/products" element={<AdminProducts />} />
    </Route>
  );
};

export default AdminRoutes;