import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+tau", {
      name: "Tau Prolog",
      description:
        "An implementation of Prolog for browsers, focused on education, research, and web-based applications, allowing Prolog code to run directly within JavaScript environments.",
      shortDesc:
        "An implementation of Prolog for web-based applications in JavaScript environments.",
      created: "2015",
      extensions: [".pl"],
      extGithubPath: "tau-prolog/tau-prolog",
      extHomeURL: "http://tau-prolog.org/",
      isTranspiler: false,
      keywords: ["education", "javascript", "prolog", "research", "web"],
    })
    .relDialectOf.add("pl+prolog")
    .relInfluencedBy.add("pl+javascript", "pl+prolog")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+declarative", "para+interpreted", "para+logic")
    .relPlatforms.add("plat+nodejs", "plat+web")
    .relTags.add("tag+edu", "tag+interpreters", "tag+webdev")
    .relTypeSystems.add("tsys+untyped")
    .relWrittenWith.add("pl+javascript");
}
