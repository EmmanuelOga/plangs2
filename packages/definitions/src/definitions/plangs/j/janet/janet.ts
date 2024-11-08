import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+janet", {
      name: "Janet",
      description:
        "Janet is a functional and imperative programming language, useful for embedding in other programs, scripting, and other tasks. It allows meta-programming with its Lisp-like syntax and provides features to easily work with C libraries.",
      keywords: ["janet", "lisp", "functional"],
      websites: [
        { title: "Janet", href: "https://janet-lang.org/", kind: "homepage" },
        { title: "Janet on GitHub", href: "https://github.com/janet-lang/janet", kind: "repository" },
      ],
      extensions: [".janet"],
      year: 2020,
      releases: [{ version: "1.17.0", name: "Janet 1.17.0", date: "2023-06-15" }],
      github: { name: "Janet", langId: "1028705371", color: "#0886a5", popular: false, type: "programming" },
    })
    .addInfluencedBy(["pl+lisps", "pl+scheme"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+extensible", "paradigm+functional", "paradigm+imperative", "paradigm+scripting"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+embedded", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
