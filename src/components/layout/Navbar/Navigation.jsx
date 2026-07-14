import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="hidden lg:flex gap-8">
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/products">Productos</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Contacto</NavLink>
    </nav>
  );
};

export default Navigation;