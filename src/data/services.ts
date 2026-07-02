import {
  Stethoscope,
  Scissors,
  Syringe,
  FlaskConical,
  Home,
  Siren,
  HeartPulse,
  Dog,
} from "lucide-react";
import type { Service } from "../types";

export const services: Service[] = [
  {
    icon: Stethoscope,
    title: "Clínica Geral",
    description:
      "Consultas de rotina, check-ups e acompanhamento de saúde para cães, gatos e animais de grande porte.",
  },
  {
    icon: Scissors,
    title: "Cirurgias",
    description:
      "Procedimentos cirúrgicos eletivos e de urgência, com toda a segurança e cuidado no pré e pós-operatório.",
  },
  {
    icon: Syringe,
    title: "Vacinação",
    description:
      "Calendário completo de vacinas e vermifugação para pequenos e grandes animais, prevenindo doenças.",
  },
  {
    icon: FlaskConical,
    title: "Exames e Diagnósticos",
    description:
      "Exames laboratoriais e de imagem para diagnósticos precisos e tratamentos mais assertivos.",
  },
  {
    icon: Dog,
    title: "Grandes Animais",
    description:
      "Atendimento especializado para bovinos, equinos e outros animais de produção, na propriedade rural.",
  },
  {
    icon: Home,
    title: "Atendimento Domiciliar e Rural",
    description:
      "Visitas à residência ou à propriedade rural, trazendo o cuidado veterinário até você e seu animal.",
  },
  {
    icon: Siren,
    title: "Emergências",
    description:
      "Atendimento rápido e humanizado em situações de urgência, com plantão para emergências.",
  },
  {
    icon: HeartPulse,
    title: "Medicina Preventiva",
    description:
      "Orientação nutricional, controle de parasitas e planos de saúde preventivos para uma vida longa e saudável.",
  },
];
