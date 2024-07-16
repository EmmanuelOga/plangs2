import "preact/debug";

import "./input-compl/input-compl";

import "./input-sel/input-sel";
import { addItemEvent } from "./input-sel/input-sel";
import { type InputComplProps, ON_SELECT_EVENT } from "./input-compl/input-compl";

import type { PlangsGraph } from "@plangs/graph";

async function loadPlangs(): Promise<PlangsGraph> {
  const data = fetch("/plangs.json").then((r) => r.json());
}

const words = [
  "car",
  "house",
  "dog",
  "cat",
  "mouse",
  "elephant",
  "lion",
  "tiger",
  "bear",
  "wolf",
  "fox",
  "rabbit",
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "kiwi",
  "lemon",
  "mango",
  "nectarine",
];

for (const elem of [...document.querySelectorAll("input-compl")]) {
  const compl = elem as unknown as InputComplProps & HTMLElement;
  compl.completions = words.map((w, i) => [i, w]);

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
