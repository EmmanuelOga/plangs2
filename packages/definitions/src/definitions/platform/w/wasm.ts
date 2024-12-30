import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.platform.set("plat+wasm", {
    name: "WASM",
    description:
      "WebAssembly is a binary instruction format for a stack-based virtual machine, enabling high-performance applications in web environments.",
    extHomeURL: "https://en.wikipedia.org/wiki/WebAssembly",
    keywords: ["wasm", "webassembly"],
  });
}
