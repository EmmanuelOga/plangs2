import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+ddlog", {
      name: "Differential Datalog",
      description:
        "A declarative programming language optimized for incremental computation and efficient dataflow processing, particularly useful in applications requiring continuous updates in response to changing data inputs.",
      shortDesc: "A language for efficient incremental computation and dataflow processing.",
      created: "2019",
      extensions: [".dl"],
      extGithubPath: "vmware/differential-datalog",
      extHomeURL: "https://github.com/vmware/differential-datalog",
      filenames: ["Makefile"],
      isTranspiler: false,
      keywords: ["dataflow processing", "declarative", "incremental computation"],
      links: [{ url: "https://github.com/vmware/differential-datalog", title: "GitHub Repository" }],
    })
    .relImplements.add("pl+datalog")
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+dataflow", "para+declarative", "para+logic", "para+rules")
    .relTags.add("tag+analysis", "tag+dataflow")
    .relTypeSystems.add("tsys+static", "tsys+strong");
}
