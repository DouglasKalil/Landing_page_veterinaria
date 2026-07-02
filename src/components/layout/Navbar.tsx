import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoMark from "../../assets/logo-mark.png";
import { buildWhatsappLink, defaultWhatsappMessage } from "../../data/site";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Muda o fundo do header depois de rolar a página, melhorando a legibilidade sobre o hero
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Enquanto o header está transparente sobre o hero escuro, usa texto claro;
  // ao rolar (ou com o menu mobile aberto) muda para texto escuro sobre fundo claro.
  const isLight = !isScrolled && !isOpen;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        isScrolled || isOpen ? "bg-cream/95 shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className={`flex items-center gap-2 font-semibold transition-colors ${
            isLight ? "text-cream" : "text-primary-800"
          }`}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 p-2">
            <img src={logoMark} alt="" className="h-full w-full object-contain" />
          </span>
          <span className="font-sans text-lg leading-tight">
            Dra. Yamillê
            <br />
            <span className={`text-xs font-normal ${isLight ? "text-primary-100" : "text-primary-600"}`}>
              de Lourdes
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-earth-400 ${
                  isLight ? "text-cream" : "text-primary-800"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={buildWhatsappLink(defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-earth-500 px-5 py-2.5 text-sm font-semibold text-white shadow transition-colors hover:bg-earth-600"
          >
            Agendar no WhatsApp
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          className={`transition-colors lg:hidden ${isLight ? "text-cream" : "text-primary-800"}`}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menu mobile (hambúrguer) */}
      {isOpen && (
        <div className="border-t border-primary-100 bg-cream px-4 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-primary-800"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={buildWhatsappLink(defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-4 block rounded-full bg-earth-500 px-5 py-3 text-center text-sm font-semibold text-white shadow"
          >
            Agendar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
