import { Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import Home from "../pages/Home/Home";

const PublicRoutes = () => {
  return (
    <Route element={<PublicLayout />}>
      <Route path="/" element={<Home />} />
    </Route>
  );
};

export default PublicRoutes;