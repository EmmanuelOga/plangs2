import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+fleng", {
      name: "Fleng",
      description: "A compiler designed for implementing concurrent logic programming languages FGHC, Strand, KL1, and PCN.",
      shortDesc: "A compiler for concurrent logic programming languages FGHC, Strand, KL1, and PCN.",
      created: "1988-04-01",
      extHomeURL: "https://gitlab.com/b2495/fleng",
      isTranspiler: false,
      keywords: ["FGHC", "KL1", "PCN", "Strand", "concurrent", "logic"],
    })
    .relImplements.add("pl+strand")
    .relParadigms.add("para+compiled", "para+concurrent", "para+logic")
    .relTags.add("tag+compiler", "tag+languages");
}
