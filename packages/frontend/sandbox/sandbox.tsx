import "preact/debug";

import "../src/input_compl/input_compl";
import type { InputComplWebComponent } from "../src/input_compl/input_compl";

import "../src/input_sel/input_sel";
import type { InputSelWebComponent } from "../src/input_sel/input_sel";

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

const sel = document.querySelector("input-sel") as InputSelWebComponent;
if (!sel) throw new Error("Component not found");

console.log(sel.dispatch)

inp.onSelect = (item) => {
  console.log(sel.dispatch);
};