import { Routes } from "react-router-dom";

import PublicRoutes from "./PublicRoutes";
import AdminRoutes from "./AdminRoutes";

const AppRouter = () => {
  return (
    <Routes>
      {PublicRoutes()}
      {AdminRoutes()}
    </Routes>
  );
};

export default AppRouter;