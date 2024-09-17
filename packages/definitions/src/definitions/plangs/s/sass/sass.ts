import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+sass", {
      name: "Sass",
      description:
        "Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself.",
      firstAppeared: "2006-01-01",
      extensions: [".sass", ".scss"],
      websites: [
        { href: "https://sass-lang.com/", title: "sass-lang.com", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Sass_(style_sheet_language)", title: "Sass", kind: "wikipedia" },
      ],
      releases: [{ version: "1.75.0", date: "2024-01-01" }],
      images: [{ kind: "logo", title: "Sass", url: "/images/plangs/s/sass/logo.png" }],
    })
    .addLicenses(["license+mit"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+interpreter", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic"]);
}
