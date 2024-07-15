import "preact/debug";

import "../src/input_compl/input_compl";

import "../src/input_sel/input_sel";
import { addItemEvent } from "../src/input_sel/input_sel";
import { type InputComplProps, ON_SELECT_EVENT } from "../src/input_compl/input_compl";

import type {PlangsGraph} from "plangs";

async function loadPlangs() : Promise<PlangsGraph> {
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
