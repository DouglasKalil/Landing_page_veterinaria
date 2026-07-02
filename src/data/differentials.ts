import { HeartHandshake, Tractor, Building2, MapPinned, GraduationCap, Clock } from "lucide-react";
import type { Differential } from "../types";

export const differentials: Differential[] = [
  {
    icon: HeartHandshake,
    title: "Atendimento Humanizado",
    description:
      "Cada animal é tratado com carinho e cada tutor é ouvido com atenção, em um atendimento próximo e acolhedor.",
  },
  {
    icon: Tractor,
    title: "Experiência com Grande Porte",
    description:
      "Vivência sólida com bovinos, equinos e outros animais de produção, entendendo as necessidades do produtor rural.",
  },
  {
    icon: Building2,
    title: "Estrutura Completa",
    description:
      "Clínica equipada para consultas, exames e procedimentos cirúrgicos com segurança e conforto.",
  },
  {
    icon: MapPinned,
    title: "Atendimento Rural",
    description:
      "Visitas a propriedades da região de Capitão Poço, levando cuidado veterinário direto ao campo.",
  },
  {
    icon: GraduationCap,
    title: "Formação Sólida",
    description:
      "Atualização constante e formação técnica para oferecer o que há de mais moderno em medicina veterinária.",
  },
  {
    icon: Clock,
    title: "Agilidade no Atendimento",
    description:
      "Prioridade em responder rápido, especialmente em casos de urgência e emergência.",
  },
];
