import "preact/debug";

import "../src/input_compl/input_compl";

import "../src/input_sel/input_sel";
import { addItemEvent } from "../src/input_sel/input_sel";
import { type InputComplProps, ON_SELECT_EVENT } from "../src/input_compl/input_compl";

const inp = document.querySelector("input-compl");
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

(inp as unknown as InputComplProps).completions = words.map((w, i) => [i, w]);

const sel = document.querySelector("input-sel");
if (!sel) throw new Error("Component not found");

inp.addEventListener(ON_SELECT_EVENT, (ev: Event) => {
  const { name, item } = (ev as CustomEvent).detail;
  sel.dispatchEvent(addItemEvent(item));
});
