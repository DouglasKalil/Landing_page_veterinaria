import { CalendarCheck, PawPrint } from "lucide-react";
import { buildWhatsappLink, siteConfig } from "../../data/site";
import Reveal from "../ui/Reveal";
import fotoCurral from "../../assets/foto-curral.jpg";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 pt-24"
    >
      {/* Textura decorativa de fundo */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <PawPrint className="absolute left-10 top-24 h-24 w-24 rotate-12 text-cream" />
        <PawPrint className="absolute bottom-20 right-16 h-32 w-32 -rotate-12 text-cream" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <span className="inline-block rounded-full bg-earth-500/20 px-4 py-1 text-sm font-medium text-earth-200">
            Capitão Poço - PA
          </span>
          <h1 className="mt-4 font-sans text-4xl font-bold leading-tight text-cream sm:text-5xl">
            {siteConfig.professionalName}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-primary-100">
            Cuidado veterinário completo, do pequeno ao grande porte. Consultas, cirurgias e
            atendimento rural com dedicação e humanidade para quem tem patas, cascos ou focinho.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={buildWhatsappLink(
                "Olá, Dra. Yamillê! Gostaria de agendar uma consulta para meu animal."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-earth-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-colors hover:bg-earth-600"
            >
              <CalendarCheck size={20} />
              Agendar Consulta
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-200/40 px-6 py-3.5 text-base font-semibold text-cream transition-colors hover:bg-cream/10"
            >
              Conhecer Serviços
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative">
          <img
            src={fotoCurral}
            alt="Atendimento veterinário rural da Dra. Yamillê de Lourdes"
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl"
          />
        </Reveal>
      </div>
    </section>
  );
}
