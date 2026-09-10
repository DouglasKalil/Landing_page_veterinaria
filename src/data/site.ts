/**
 * Dados centrais do site. Edite aqui para atualizar textos, contatos e links
 * em todas as seções sem precisar mexer nos componentes.
 */

export const siteConfig = {
  professionalName: "Dra. Yamillê de Lourdes",
  crmv: "CRMV-PA 5879", // TODO: substituir pelo número real do CRMV
  city: "Capitão Poço",
  state: "PA",
  phoneDisplay: "(91) 8570-0829",
  whatsappNumber: "559185700829",
  instagram: "@yamille.lourdes", // TODO: substituir pelo Instagram real
  email: "yamilledelourdes.clinicavet@gmail.com", // TODO: substituir pelo e-mail real
  address: "Tv Pedro Venâncio, número 151, Capitão Poço - PA, 68650-000", // TODO: endereço real
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Capit%C3%A3o%20Po%C3%A7o%20-%20PA&output=embed",
  businessHours: [
    { day: "Segunda a Sexta", hours: "08h às 18h" },
    { day: "Sábado", hours: "08h às 12h" },
    { day: "Domingo", hours: "Plantão para emergências" },
  ],
};

export function buildWhatsappLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

export const defaultWhatsappMessage =
  "Olá, Dra. Yamillê! Gostaria de agendar uma consulta para meu animal.";
