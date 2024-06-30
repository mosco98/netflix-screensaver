import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const pagesHasNavTabs = [
  "/case-studies",
  "/playground",
  "/skills-and-tools"
];
