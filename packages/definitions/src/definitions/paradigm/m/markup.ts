import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+markup", {
    name: "Markup",
    description: "Text-encoding system which specifies the structure and formatting of a document and potentially the relationships among its parts.",
    shortDesc: "Provides structure for documents.",
    extHomeURL: "https://en.wikipedia.org/wiki/Markup_language",
    keywords: ["markup"],
  });
}
