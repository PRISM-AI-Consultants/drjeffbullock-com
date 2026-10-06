import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function categoryLabel(category: string): string {
  return category === "childrens" ? "children's" : category;
}
