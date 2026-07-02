import { PawPrint, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import InstagramIcon from "../ui/InstagramIcon";
import { siteConfig, buildWhatsappLink, defaultWhatsappMessage } from "../../data/site";

const quickLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-primary-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600">
              <PawPrint size={20} />
            </span>
            <span className="font-sans text-lg font-semibold">{siteConfig.professionalName}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-primary-200">
            Médica veterinária em {siteConfig.city} - {siteConfig.state}, cuidando com dedicação de
            animais de pequeno e grande porte.
          </p>
        </div>

        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-wide text-primary-200">
            Links Rápidos
          </h3>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-primary-100 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-wide text-primary-200">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-100">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="shrink-0" /> {siteConfig.address}
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0" /> {siteConfig.phoneDisplay}
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0" /> {siteConfig.email}
            </li>
            <li className="flex items-center gap-2">
              <InstagramIcon size={16} className="shrink-0" /> {siteConfig.instagram}
            </li>
          </ul>
          <a
            href={buildWhatsappLink(defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-earth-500 px-4 py-2 text-sm font-semibold text-white hover:bg-earth-600"
          >
            <MessageCircle size={16} /> Falar no WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-primary-700 px-4 py-5 text-center text-xs text-primary-300 sm:px-6 lg:px-8">
        © {year} {siteConfig.professionalName} — {siteConfig.crmv}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
