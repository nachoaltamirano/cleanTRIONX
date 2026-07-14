import Logo from "./Logo";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import CartButton from "./CartButton";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <header className="w-full shadow-sm bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Logo />

        <Navigation />

        <div className="flex items-center gap-4">
          <SearchBar />
          <CartButton />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Navbar;