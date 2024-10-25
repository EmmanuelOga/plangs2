import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+sass", {
      name: "Sass",
      description:
        "Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself.",
      keywords: ["sass"],
      websites: [
        { title: "Sass", href: "https://sass-lang.com/", kind: "homepage" },
        { title: "Sass", href: "https://en.wikipedia.org/wiki/Sass_(style_sheet_language)", kind: "wikipedia" },
      ],
      extensions: [".sass", ".scss"],
      year: 2006,
      isTranspiler: true,
      isMainstream: true,
      releases: [{ version: "1.75.0", name: "Sass 1.75.0", date: "2024-01-01" }],
    })
    .addInfluencedBy(["pl+css"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+dsl"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+automation", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic"])
    .addWrittenIn(["pl+ruby"]);
}
