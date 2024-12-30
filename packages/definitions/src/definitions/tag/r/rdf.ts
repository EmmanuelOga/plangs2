import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+rdf", {
    name: "RDF",
    description:
      "Resource Description Framework: A standard model for data interchange on the web, where everything is a tuple [subject, predicate, object].",
    extHomeURL: "https://en.wikipedia.org/wiki/Rapid_Application_Development",
    keywords: ["rdf"],
  });
}
