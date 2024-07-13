import "preact/debug";
import "../src/input-compl/input_compl";
import type { InputComplWebComponent } from "../src/input-compl/input_compl";

const c = document.querySelector("input-compl") as InputComplWebComponent;
if (!c) throw new Error("Component not found");

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

c.complData = words.map((w, i) => [i, w]);
