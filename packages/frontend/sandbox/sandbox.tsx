import "preact/debug";
import { render, h } from "preact";
import { InputCompl } from "../src/input-compl/input_compl";

const el = document.getElementById("input-compl");
if (!el) throw new Error("element not found: #input-compl");

render(<InputCompl/>, el);