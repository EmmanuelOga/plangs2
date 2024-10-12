import { cl } from "@plangs/server/elements";
import type { TAB } from "@plangs/server/pages/layout";

import { $, elem } from "../utils";

export function setPlTab({ href, name }: { href: string; name: string }) {
  const plTab = elem("plTab") as HTMLAnchorElement;
  const plTabSpan = plTab.querySelector("span");
  if (!plTab || !plTabSpan) return;
  plTab.classList.remove("hidden");
  plTab.setAttribute("href", href);
  plTabSpan.innerText = name;
}

export function currentTab(): TAB | undefined {
  return $<HTMLAnchorElement>(`.${cl("navLink")}[data-current]`)?.dataset?.tab as TAB | undefined;
}
