import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+genomics", {
    name: "Genomics",
    description: "Software for studying and analyzing genomes and genetic data.",
    extHomeURL: "https://en.wikipedia.org/wiki/Genomics",
    keywords: ["bioinformatics", "genetic analysis", "genomics"],
  });
}
