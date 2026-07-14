import { Routes, Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import AdminLayout from "../layouts/AdminLayout";

import Home from "../pages/Home/Home";

const AppRouter = () => {
  return (
    <Routes>

      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route element={<AdminLayout />}>
      </Route>

    </Routes>
  );
};

export default AppRouter;