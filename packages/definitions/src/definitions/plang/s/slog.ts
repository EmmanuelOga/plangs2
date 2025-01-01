import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+slog", {
      name: "Slog",
      description: "A programming language enabling parallel logic programming with a focus on handling first-class facts and data efficiently.",
      shortDesc: "A programming language for parallel logic programming with first-class facts handling.",
      created: "2022",
      extensions: [".slg"],
      extGithubPath: "harp-lab/slog-lang1",
      filenames: ["slogfile"],
      isTranspiler: false,
      keywords: ["facts", "logic", "parallel"],
      links: [{ title: "Higher-Order, Data-Parallel Structured Deduction", url: "https://arxiv.org/abs/2211.11573" }],
    })
    .relInfluencedBy.add("pl+prolog")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+declarative", "para+logic", "para+parallel")
    .relPlatforms.add("plat+linux", "plat+windows")
    .relTags.add("tag+automation", "tag+control", "tag+server")
    .relTypeSystems.add("tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+c", "pl+python");
}
