import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, Search, ShoppingCart, X } from "lucide-react";

const Navbar = () => {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Inicio", to: "/" },
    { label: "Productos", to: "/products" },
    { label: "Blog", to: "/blog" },
    { label: "Contacto", to: "/contact" },
  ];

  return (
    <header className="w-full border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-sm font-semibold uppercase tracking-[0.2em] text-white">
            T
          </div>
          <span className="text-lg font-semibold uppercase tracking-[0.3em] text-gray-900">
            TRIONX
          </span>
        </NavLink>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const isActive =
              item.to === "/"
                ? pathname === "/"
                : pathname.startsWith(item.to);

            return (
              <NavLink
                key={item.to}
                to={item.to}
                aria-current={isActive ? "page" : undefined}
                className={({ isActive: linkIsActive }) =>
                  `text-sm font-medium transition-colors ${
                    linkIsActive ? "text-red-600" : "text-gray-700 hover:text-red-600"
                  }`
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-colors hover:border-red-200 hover:text-red-600"
            aria-label="Buscar"
          >
            <Search size={18} />
          </button>

          <button
            type="button"
            className="hidden items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700 sm:flex"
          >
            Dashboard
          </button>

          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-colors hover:border-red-200 hover:text-red-600"
            aria-label="Carrito"
          >
            <ShoppingCart size={18} />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-semibold text-white">
              0
            </span>
          </button>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-colors hover:border-red-200 hover:text-red-600 lg:hidden"
            aria-label="Abrir menú"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-gray-100 px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive =
                item.to === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.to);

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  aria-current={isActive ? "page" : undefined}
                  className={({ isActive: linkIsActive }) =>
                    `rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                      linkIsActive ? "bg-red-50 text-red-600" : "text-gray-700"
                    }`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              );
            })}

            <button
              type="button"
              className="mt-2 flex items-center justify-center rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white"
            >
              Dashboard
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;