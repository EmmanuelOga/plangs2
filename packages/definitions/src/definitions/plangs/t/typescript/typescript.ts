import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+typescript", {
      name: "TypeScript",
      description:
        "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. Developed by Microsoft, TypeScript extends JavaScript by adding types.",
      keywords: ["typescript", "ts"],
      websites: [
        { title: "TypeScript Official Website", href: "https://www.typescriptlang.org/", kind: "homepage" },
        { title: "TypeScript GitHub", href: "https://github.com/microsoft/TypeScript", kind: "repository" },
        { title: "TypeScript Wikipedia", href: "https://en.wikipedia.org/wiki/TypeScript", kind: "wikipedia" },
      ],
      extensions: [".cts", ".mts", ".ts", ".tsx"],
      firstAppeared: "2012-10-01",
      isTranspiler: true,
      isMainstream: true,
      releases: [{ version: "5.2", name: "TypeScript 5.2", date: "2023-08-01" }],
    })
    .addInfluencedBy(["pl+actionscript", "pl+c-sharp", "pl+f-sharp", "pl+java", "pl+javascript"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+cross", "plat+nodejs"])
    .addTags(["tag+compiler", "tag+framework", "tag+scripting", "tag+web"])
    .addTypeSystems(["tsys+duck", "tsys+gradual", "tsys+optional", "tsys+strong", "tsys+structural"])
    .addWrittenIn(["pl+javascript"]);
}
