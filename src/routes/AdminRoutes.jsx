import { Route } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

const AdminRoutes = () => {
  return (
    <Route element={<AdminLayout />}>
    </Route>
  );
};

export default AdminRoutes;