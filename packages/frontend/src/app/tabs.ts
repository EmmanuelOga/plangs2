import { elem } from "../utils";

export function setPlTab({ href, name }: { href: string; name: string }) {
  const plTab = elem("plTab") as HTMLAnchorElement;
  const plTabSpan = plTab.querySelector("span");
  if (!plTab || !plTabSpan) return;
  plTab.classList.remove("hidden");
  plTab.setAttribute("href", href);
  plTabSpan.innerText = name;
}

const DEFAULT_PL = { href: "/pl/c", name: "C", key: "pl+c" } as const;

/** Set the PL tab to whatever was stored in localStorage last. */
export function restorePlTab() {
  try {
    const last = JSON.parse(localStorage.getItem("lastPlang") || "{}");
    if (last.href && last.name && last.key) {
      setPlTab(last);
    }
  } catch {}
  setPlTab(DEFAULT_PL);
}
