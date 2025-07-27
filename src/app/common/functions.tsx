import { JSX } from "react";
import { Item } from "../types/Pokemons";

export function capitalize(word: string): string {
  if (!word) return '';
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}


export function renderIconSpan(items: Item[], targetName: string, render?: (item: Item) => JSX.Element): JSX.Element | null {
  
    const foundItem = items.find((el) => el.name === targetName);
  
  if (!foundItem) return null;

  return render ? render(foundItem) : <span>{foundItem.svg}</span>;
}
