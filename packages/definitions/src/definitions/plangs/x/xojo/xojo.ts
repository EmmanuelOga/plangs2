import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+xojo", {
      name: "Xojo",
      description:
        "The Xojo programming environment and programming language is developed and commercially marketed by Xojo, Inc. of Austin, Texas for software development targeting macOS, Microsoft Windows, Linux, iOS, Android, the Web and Raspberry Pi. Xojo uses a proprietary object-oriented language.",
      keywords: ["xojo", "cross-platform", "object-oriented"],
      websites: [
        { title: "xojo.com", href: "http://xojo.com/", kind: "homepage" },
        { title: "Xojo", href: "https://en.wikipedia.org/wiki/Xojo", kind: "wikipedia" },
        { title: "Xojo on Reddit", kind: "reddit", href: "https://reddit.com/r/xojo" },
      ],
      extensions: [".xojo_code", ".xojo_binary_project", ".xojo_xml_project"],
      year: 1996,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "3.1", name: "Xojo 3.1", date: "2023-01-01" }],
      github: { name: "Xojo", langId: "405", color: "#81bd41", popular: false, type: "programming" },
      stackovTags: ["xojo", "realbasic"],
    })
    .addInfluencedBy(["pl+basic", "pl+visual-basic"])
    .addLicenses(["license+proprietary"])
    .addParadigms(["paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+android", "plat+apple", "plat+cross", "plat+linux", "plat+raspberry", "plat+windows"])
    .addTags(["tag+app", "tag+dbms", "tag+editor", "tag+framework", "tag+industrial", "tag+interpreter", "tag+rad"])
    .addTypeSystems(["tsys+object", "tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
