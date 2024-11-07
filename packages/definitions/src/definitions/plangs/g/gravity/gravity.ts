import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+gravity", {
      name: "Gravity",
      description:
        "Gravity is an open-source, multi-paradigm programming language designed for creating cross-platform apps. It is lightweight, fast, and suitable for various use cases, including mobile, desktop, and embedded platforms.",
      keywords: ["gravity", "programming language"],
      websites: [
        { title: "Gravity Language", href: "https://www.gravity-lang.org/", kind: "homepage" },
        { title: "Gravity on GitHub", href: "https://github.com/marcobambini/gravity", kind: "repository" },
      ],
      extensions: [".gravity"],
      year: 2015,
      releases: [{ version: "0.8", name: "Gravity 0.8", date: "2023-01-01" }],
    })
    .addInfluencedBy(["pl+lua", "pl+swift"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+multi", "paradigm+oop", "paradigm+scripting"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+embedded", "tag+games", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
