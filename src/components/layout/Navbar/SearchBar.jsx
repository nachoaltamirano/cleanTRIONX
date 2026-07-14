import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="hidden md:flex items-center border rounded-lg px-3 py-2">
      <Search size={18} />
      <input
        type="text"
        placeholder="Buscar productos..."
        className="ml-2 outline-none"
      />
    </div>
  );
};

export default SearchBar;