import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import Reveal from "../ui/Reveal";
import { buildWhatsappLink } from "../../data/site";
import type { AnimalSize } from "../../types";

interface FormState {
  name: string;
  phone: string;
  animalSize: AnimalSize;
  service: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  phone: "",
  animalSize: "pequeno",
  service: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);

  function handleChange(
    field: keyof FormState,
    value: string
  ) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const porte = form.animalSize === "pequeno" ? "pequeno porte" : "grande porte";
    const lines = [
      `Olá, Dra. Yamillê! Gostaria de agendar um atendimento.`,
      `Nome: ${form.name}`,
      `Telefone: ${form.phone}`,
      `Animal de: ${porte}`,
      form.service && `Serviço desejado: ${form.service}`,
      form.message && `Mensagem: ${form.message}`,
    ].filter(Boolean);

    window.open(buildWhatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contato" className="bg-cream py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-earth-500">
            Agendamento
          </span>
          <h2 className="mt-2 font-sans text-3xl font-bold text-primary-900 sm:text-4xl">
            Preencha e agende pelo WhatsApp
          </h2>
          <p className="mt-3 text-primary-800/80">
            Envie os dados abaixo e sua mensagem será enviada diretamente para o WhatsApp da
            clínica, já pré-preenchida.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-5 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-primary-100"
          >
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-primary-900">
                Nome
              </label>
              <input
                id="name"
                required
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Seu nome completo"
                className="w-full rounded-lg border border-primary-200 px-4 py-2.5 text-primary-900 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-primary-900">
                Telefone
              </label>
              <input
                id="phone"
                required
                type="tel"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="(00) 00000-0000"
                className="w-full rounded-lg border border-primary-200 px-4 py-2.5 text-primary-900 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
              />
            </div>

            <div>
              <span className="mb-1 block text-sm font-medium text-primary-900">
                Tipo de animal
              </span>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 text-sm text-primary-800">
                  <input
                    type="radio"
                    name="animalSize"
                    value="pequeno"
                    checked={form.animalSize === "pequeno"}
                    onChange={() => handleChange("animalSize", "pequeno")}
                    className="h-4 w-4 accent-primary-600"
                  />
                  Pequeno porte (cães, gatos)
                </label>
                <label className="flex items-center gap-2 text-sm text-primary-800">
                  <input
                    type="radio"
                    name="animalSize"
                    value="grande"
                    checked={form.animalSize === "grande"}
                    onChange={() => handleChange("animalSize", "grande")}
                    className="h-4 w-4 accent-primary-600"
                  />
                  Grande porte (bovinos, equinos)
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="service" className="mb-1 block text-sm font-medium text-primary-900">
                Serviço desejado
              </label>
              <select
                id="service"
                value={form.service}
                onChange={(e) => handleChange("service", e.target.value)}
                className="w-full rounded-lg border border-primary-200 px-4 py-2.5 text-primary-900 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
              >
                <option value="">Selecione um serviço</option>
                <option value="Clínica geral">Clínica geral</option>
                <option value="Cirurgia">Cirurgia</option>
                <option value="Vacinação">Vacinação</option>
                <option value="Exames">Exames e diagnósticos</option>
                <option value="Atendimento a grandes animais">
                  Atendimento a grandes animais
                </option>
                <option value="Atendimento domiciliar/rural">
                  Atendimento domiciliar/rural
                </option>
                <option value="Emergência">Emergência</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-primary-900">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Conte um pouco sobre o que o animal precisa..."
                className="w-full resize-none rounded-lg border border-primary-200 px-4 py-2.5 text-primary-900 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary-600 px-6 py-3.5 text-base font-semibold text-white shadow transition-colors hover:bg-primary-700"
            >
              <Send size={18} />
              Enviar e agendar pelo WhatsApp
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
