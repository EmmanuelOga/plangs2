import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.typeSystem.set("tsys+manifest", {
    name: "Manifest",
    description:
      "All variables are explicitly typed in the code, usually associated with static typing.",
    extHomeURL: "https://en.wikipedia.org/wiki/Manifest_typing",
    keywords: ["manifest"],
  });
}
