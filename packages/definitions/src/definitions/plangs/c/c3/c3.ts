import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+c3", {
      name: "c3",
      description:
        "C3 is a modern systems programming language that retains the characteristics that makes C an unmatched systems programming language, while removing the parts that make it a difficult and error-prone language. It aims to improve development while maintaining familiar syntax to C.",
      keywords: ["c3"],
      websites: [
        { title: "C3", href: "https://c3-lang.org", kind: "homepage" },
        { title: "C3", href: "https://github.com/c3lang/c3c", kind: "repository" },
        { title: "C3", href: "https://en.wikipedia.org/wiki/C3_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".c3"],
      year: 2020,
      images: [{ kind: "logo", title: "C3 logo", url: "https://c3-lang.org/logo.svg", width: 800, height: 600 }],
      releases: [{ version: "0.1.0", name: "C3 Initial Release", date: "2020-05-01" }],
    })
    .addInfluencedBy(["pl+c"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+compiled", "paradigm+multi", "paradigm+procedural"])
    .addPlatforms(["plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+compiler"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
