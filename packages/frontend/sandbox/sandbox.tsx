import "preact/debug";

import "../src/input_compl/input_compl";
import { ON_SELECT_EVENT, type InputComplWebComponent } from "../src/input_compl/input_compl";

import "../src/input_sel/input_sel";
import { ADD_EVENT_NAME } from "../src/input_sel/input_sel";

const inp = document.querySelector("input-compl") as InputComplWebComponent;
if (!inp) throw new Error("Component not found");

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

inp.completions = words.map((w, i) => [i, w]);

const sel = document.querySelector("input-sel");
if (!sel) throw new Error("Component not found");

inp.addEventListener(ON_SELECT_EVENT, (ev: Event) => {
  const { name, item } = (ev as CustomEvent).detail;
  console.log("Received", item, "from", name);
  sel.dispatchEvent(new CustomEvent(ADD_EVENT_NAME, { detail: item, bubbles: true, composed: true }));
});
