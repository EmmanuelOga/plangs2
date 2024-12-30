import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+metaprogramming", {
    name: "Metaprog",
    description: "Writing programs that generate or manipulate other programs.",
    extHomeURL: "https://en.wikipedia.org/wiki/Metaprogramming",
    keywords: ["meta", "metaprogramming"],
  });
}
