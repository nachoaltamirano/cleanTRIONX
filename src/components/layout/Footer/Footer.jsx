import Container from "../../ui/Container";

const BRAND_NAME = "TRIONX";
const CURRENT_YEAR = new Date().getFullYear();
const secondaryLinks = [
  { label: "Términos", href: "#" },
  { label: "Privacidad", href: "#" },
  { label: "Contacto", href: "#" },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-100 bg-white">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row" maxWidth="lg" px="lg">
        <p className="text-sm text-gray-500">
          © {CURRENT_YEAR} {BRAND_NAME}. Todos los derechos reservados.
        </p>

        <div className="flex gap-6 text-sm text-gray-500">
          {secondaryLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-black">
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;