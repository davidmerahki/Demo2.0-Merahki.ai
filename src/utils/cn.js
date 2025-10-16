import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility para combinar clases de Tailwind CSS
 * Usa clsx para condicionales y twMerge para resolver conflictos
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
