import { useEffect, useState, type CSSProperties } from "react";
import { buildWhatsappLink, defaultWhatsappMessage } from "../../data/site";
import WhatsappIcon from "../ui/WhatsappIcon";

const MARGIN_PX = 20; // equivale a right/bottom-5

/** Botão fixo de WhatsApp, sempre visível para agilizar o contato do tutor. */
export default function WhatsAppFloat() {
  const [style, setStyle] = useState<CSSProperties>({
    position: "fixed",
    bottom: MARGIN_PX,
    right: MARGIN_PX,
  });

  useEffect(() => {
    function updatePosition() {
      const bar = document.getElementById("footer-bottom-bar");
      if (!bar) return;

      const barTop = bar.getBoundingClientRect().top;
      const buttonSize = window.innerWidth >= 640 ? 64 : 56;
      const fixedBottomEdge = window.innerHeight - MARGIN_PX;

      if (barTop < fixedBottomEdge) {
        const barTopAbsolute = barTop + window.scrollY;
        setStyle({
          position: "absolute",
          top: barTopAbsolute - buttonSize - MARGIN_PX,
          right: MARGIN_PX,
        });
      } else {
        setStyle({ position: "fixed", bottom: MARGIN_PX, right: MARGIN_PX });
      }
    }

    updatePosition();
    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    <a
      href={buildWhatsappLink(defaultWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      style={style}
      className="z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 sm:h-16 sm:w-16"
    >
      <WhatsappIcon size={28} />
    </a>
  );
}
