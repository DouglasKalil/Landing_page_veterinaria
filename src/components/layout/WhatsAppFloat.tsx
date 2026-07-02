import { MessageCircle } from "lucide-react";
import { buildWhatsappLink, defaultWhatsappMessage } from "../../data/site";

/** Botão fixo de WhatsApp, sempre visível para agilizar o contato do tutor. */
export default function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsappLink(defaultWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 sm:h-16 sm:w-16"
    >
      <MessageCircle size={28} fill="white" />
    </a>
  );
}
