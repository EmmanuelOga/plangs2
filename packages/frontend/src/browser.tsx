import "preact/debug";

import { PlangsGraph } from "@plangs/graph";

import "./input-compl/input-compl";
import { type InputComplProps, OUT_EVENT_SELECT } from "./input-compl/input-compl";
import type { Item } from "./input-compl/reducer";
import "./input-sel/input-sel";
import { createAddEvent, OUT_EVENT_REMOVE } from "./input-sel/input-sel";

async function loadPlangs(): Promise<PlangsGraph> {
  const data = await (await fetch("/plangs.json")).json();
  const pg = new PlangsGraph();
  pg.loadJSON(data);
  return pg;
}

async function startBrowser() {
  const pg = await loadPlangs();

  const langCompletions: Item[] = [...pg.v_plang].map(([vid, data]) => [vid, data.name ?? vid.split("+")[1]]);
  const peopleCompletions: Item[] = [...pg.v_person].map(([vid, data]) => [vid, data.name ?? vid.split("+")[1]]);

  for (const elem of [...document.querySelectorAll("input-compl")]) {
    const compl = elem as unknown as InputComplProps & HTMLElement;

    if (elem.getAttribute("name") === "person") {
      compl.completions = peopleCompletions;
    } else {
      compl.completions = langCompletions;
    }

    const name = compl.getAttribute("name");

    const sel = document.querySelector(`input-sel[name=${name}]`);
    if (sel) {
      compl.addEventListener(OUT_EVENT_SELECT, (ev: Event) => {
        const { item } = (ev as CustomEvent).detail;
        sel.dispatchEvent(createAddEvent(item));
      });

      sel.addEventListener(OUT_EVENT_REMOVE, (ev: Event) => {
        const { by, itemsLeft } = (ev as CustomEvent).detail;
        if (by === "enterKey" && itemsLeft === 0) {
          compl.querySelector("input")?.focus();
        }
      });
    } else {
      console.log("Warning: no input-sel found for", name);
    }
  }
}

startBrowser();
