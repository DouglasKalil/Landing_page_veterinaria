import { GraduationCap, HeartHandshake, Sparkles } from "lucide-react";
import Reveal from "../ui/Reveal";
import { siteConfig } from "../../data/site";
import fotoProfissional from "../../assets/foto-profissional.jpeg";

const values = [
  {
    icon: GraduationCap,
    text: "Formação e atualização constante em medicina veterinária",
  },
  {
    icon: HeartHandshake,
    text: "Atendimento humanizado, com escuta atenta ao tutor e ao produtor rural",
  },
  {
    icon: Sparkles,
    text: "Comprometimento com o bem-estar animal em cada atendimento",
  },
];

export default function About() {
  return (
    <section id="sobre" className="bg-cream py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <img
            src={fotoProfissional}
            alt="Dra. Yamillê de Lourdes"
            className="aspect-square w-full rounded-3xl object-cover shadow-xl"
          />
        </Reveal>

        <Reveal className="order-1 lg:order-2">
          <span className="text-sm font-semibold uppercase tracking-wide text-earth-500">
            Sobre a profissional
          </span>
          <h2 className="mt-2 font-sans text-3xl font-bold text-primary-900 sm:text-4xl">
            {siteConfig.professionalName}
          </h2>
          <p className="mt-4 text-primary-800/90">
            Médica veterinária atuante em {siteConfig.city} - {siteConfig.state}, a Dra. Yamillê
            de Lourdes construiu sua trajetória unindo o cuidado clínico de cães e gatos à
            experiência prática com animais de grande porte, como bovinos e equinos. Essa vivência
            dupla permite oferecer um atendimento completo, tanto na clínica quanto na
            propriedade rural.
          </p>
          <p className="mt-4 text-primary-800/90">
            Com uma abordagem próxima e humanizada, a Dra. Yamillê acredita que cuidar bem de um
            animal também é cuidar de quem ama esse animal — seja a família de um pet ou o
            produtor que depende da saúde do seu rebanho.
          </p>

          <ul className="mt-8 space-y-4">
            {values.map((value) => (
              <li key={value.text} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                  <value.icon size={18} />
                </span>
                <span className="text-sm text-primary-900">{value.text}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
