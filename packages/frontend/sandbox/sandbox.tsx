import "preact/debug";
import "../src/input-compl/input_compl";
import type { InputComplWebComponent } from "../src/input-compl/input_compl";

const c = document.querySelector("input-compl") as InputComplWebComponent;
if (!c) throw new Error("Component not found");

c.complData = [
  ["1", "hello"],
  ["2", "world"],
  ["3", "bye, bye"],
  ["4", "world"],
];
