import { Quote, Star } from "lucide-react";
import Reveal from "../ui/Reveal";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-earth-500">
            Depoimentos
          </span>
          <h2 className="mt-2 font-sans text-3xl font-bold text-primary-900 sm:text-4xl">
            O que dizem os clientes
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 100}>
              <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-primary-100">
                <Quote className="text-primary-300" size={28} />
                <p className="mt-4 flex-1 text-sm text-primary-800/90">"{testimonial.quote}"</p>
                <div className="mt-4 flex items-center gap-1 text-earth-500">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <div className="mt-3 border-t border-primary-100 pt-3">
                  <p className="text-sm font-semibold text-primary-900">{testimonial.name}</p>
                  <p className="text-xs text-primary-700/70">{testimonial.animal}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
