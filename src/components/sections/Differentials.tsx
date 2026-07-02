import Reveal from "../ui/Reveal";
import { differentials } from "../../data/differentials";

export default function Differentials() {
  return (
    <section id="diferenciais" className="bg-primary-900 py-20 text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-earth-300">
            Diferenciais
          </span>
          <h2 className="mt-2 font-sans text-3xl font-bold sm:text-4xl">
            Por que confiar no atendimento da Dra. Yamillê
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <div className="h-full rounded-2xl border border-primary-700 bg-primary-800/60 p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-earth-500 text-white">
                  <item.icon size={24} />
                </span>
                <h3 className="mt-4 font-sans text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-primary-100">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
