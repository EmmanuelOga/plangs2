import "preact/debug";

import { PlangsGraph } from "@plangs/graph";

import "./input-compl/input-compl";
import { type InputComplProps, ON_SELECT_EVENT } from "./input-compl/input-compl";
import type { Item } from "./input-compl/reducer";
import "./input-sel/input-sel";
import { addItemEvent } from "./input-sel/input-sel";

async function loadPlangs(): Promise<PlangsGraph> {
  const data = await (await fetch("/plangs.json")).json();
  const pg = new PlangsGraph();
  pg.loadJSON(data);
  return pg;
}

async function startBrowser() {
  const pg = await loadPlangs();

  const langs: Item[] = [...pg.v_plang].map(([vid, data]) => [vid, data.name ?? vid.split("+")[1]]);

  for (const elem of [...document.querySelectorAll("input-compl")]) {
    const compl = elem as unknown as InputComplProps & HTMLElement;
    compl.completions = langs;

    const name = compl.getAttribute("name");

    const sel = document.querySelector(`input-sel[name=${name}]`);
    if (sel) {
      compl.addEventListener(ON_SELECT_EVENT, (ev: Event) => {
        const { item } = (ev as CustomEvent).detail;
        sel.dispatchEvent(addItemEvent(item));
      });
    } else {
      console.log("Warning: no input-sel found for", name);
    }
  }
}

startBrowser();
