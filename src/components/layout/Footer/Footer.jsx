const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">

        <p className="text-sm text-gray-500">
          © 2026 TRIONX. Todos los derechos reservados.
        </p>

        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-black">
            Términos
          </a>

          <a href="#" className="hover:text-black">
            Privacidad
          </a>

          <a href="#" className="hover:text-black">
            Contacto
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;