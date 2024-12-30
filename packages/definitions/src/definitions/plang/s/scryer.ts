import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+scryer", {
      name: "Scryer Prolog",
      description:
        "An implementation of ISO Prolog written in Rust, tailored for capabilities like constraint solving, coroutining, and logical reasoning.",
      shortDesc: "An ISO Prolog implemented in Rust.",
      created: "2018",
      extensions: [".pl", "prolog"],
      extGithubPath: "mthom/scryer-prolog",
      extHomeURL: "https://www.scryer.pl/",
      isTranspiler: false,
      keywords: ["iso", "prolog", "rust"],
    })
    .relDialectOf.add("pl+prolog")
    .relInfluencedBy.add("pl+prolog")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+declarative", "para+logic")
    .relPlatforms.add("plat+linux", "plat+windows")
    .relTags.add("tag+proofs")
    .relWrittenWith.add("pl+rust");
}
