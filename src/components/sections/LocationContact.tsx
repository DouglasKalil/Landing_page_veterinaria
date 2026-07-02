import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import Reveal from "../ui/Reveal";
import InstagramIcon from "../ui/InstagramIcon";
import { siteConfig, buildWhatsappLink, defaultWhatsappMessage } from "../../data/site";

export default function LocationContact() {
  return (
    <section id="localizacao" className="bg-primary-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-earth-500">
            Localização e Contato
          </span>
          <h2 className="mt-2 font-sans text-3xl font-bold text-primary-900 sm:text-4xl">
            Venha nos visitar em {siteConfig.city} - {siteConfig.state}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-primary-100">
              <iframe
                title="Mapa de localização da clínica"
                src={siteConfig.mapsEmbedSrc}
                className="h-80 w-full border-0 lg:h-full lg:min-h-88"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex h-full flex-col justify-center rounded-2xl bg-white p-8 shadow-sm ring-1 ring-primary-100">
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="font-semibold text-primary-900">Endereço</p>
                    <p className="text-sm text-primary-800/80">{siteConfig.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="font-semibold text-primary-900">Telefone / WhatsApp</p>
                    <p className="text-sm text-primary-800/80">{siteConfig.phoneDisplay}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <InstagramIcon size={18} />
                  </span>
                  <div>
                    <p className="font-semibold text-primary-900">Instagram</p>
                    <p className="text-sm text-primary-800/80">{siteConfig.instagram}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <Clock size={18} />
                  </span>
                  <div>
                    <p className="font-semibold text-primary-900">Horário de Funcionamento</p>
                    <ul className="mt-1 space-y-0.5 text-sm text-primary-800/80">
                      {siteConfig.businessHours.map((item) => (
                        <li key={item.day}>
                          {item.day}: {item.hours}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>

              <a
                href={buildWhatsappLink(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-earth-500 px-6 py-3 text-sm font-semibold text-white shadow transition-colors hover:bg-earth-600"
              >
                <MessageCircle size={18} /> Chamar no WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
