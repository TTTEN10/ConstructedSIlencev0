import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility used by UI primitives (shadcn-style)
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

