import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+compiled", {
    name: "Compiled",
    description:
      "Source code is translated to a form more suitable for execution, typically machine code or bytecode, before being run. This is in contrast to interpreted languages, which are run directly from source code.",
    extHomeURL: "https://en.wikipedia.org/wiki/Compiled_language",
    keywords: ["compilation", "compiled", "compiler"],
  });
}
