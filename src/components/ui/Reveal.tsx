import type { ReactNode } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Envolve qualquer conteúdo para aplicar animação suave de entrada ao rolar a página. */
export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
