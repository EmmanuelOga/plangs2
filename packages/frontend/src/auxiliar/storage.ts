import type { TAB } from "@plangs/server/components/layout";

export const storageKey = (tab: TAB, key: "inputs" | "lastGroup") => `${tab}-${key}`;

// biome-ignore lint/suspicious/noExplicitAny: JSON can serialize any data.
export function updateLocalStorage(tab: TAB, key: "inputs" | "lastGroup", data: any): void {
  localStorage.setItem(storageKey(tab, key), JSON.stringify(data));
}

// biome-ignore lint/suspicious/noExplicitAny: JSON can deserialize any data.
export function loadLocalStorage(tab: TAB, key: "inputs" | "lastGroup"): any {
  const json = localStorage.getItem(storageKey(tab, key));
  if (!json) return undefined;
  try {
    return JSON.parse(json);
  } catch (e) {
    console.warn("Failed to parse localStorage filters.", json);
    localStorage.removeItem(storageKey(tab, key));
  }
}
