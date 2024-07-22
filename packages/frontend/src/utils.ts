import { PlangsGraph } from "@plangs/graph";

export function $<T = HTMLElement>(sel: string): T {
  return document.querySelector(sel) as T;
}

export function $$<T = HTMLElement>(sel: string): T[] {
  return [...document.querySelectorAll(sel)] as T[];
}

export async function loadPlangs(): Promise<PlangsGraph> {
  const data = await (await fetch("/plangs.json")).json();
  return new PlangsGraph().loadJSON(data);
}
