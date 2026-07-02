import Reveal from "../ui/Reveal";
import { services } from "../../data/services";

export default function Services() {
  return (
    <section id="servicos" className="bg-primary-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-earth-500">
            Serviços
          </span>
          <h2 className="mt-2 font-sans text-3xl font-bold text-primary-900 sm:text-4xl">
            Cuidado completo para cada tipo de animal
          </h2>
          <p className="mt-4 text-primary-800/80">
            Da clínica geral ao atendimento rural, oferecemos uma estrutura pensada para pequenos
            e grandes animais.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-primary-100 transition-shadow hover:shadow-md">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-cream">
                  <service.icon size={24} />
                </span>
                <h3 className="mt-4 font-sans text-lg font-semibold text-primary-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-primary-800/80">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
