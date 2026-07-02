import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Differential {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  animal: string;
  quote: string;
  rating: number;
}

export type AnimalSize = "pequeno" | "grande";
