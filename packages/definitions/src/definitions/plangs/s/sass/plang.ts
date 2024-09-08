import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+sass", {
      images: [{ kind: "logo", title: "Sass" }],
      name: "Sass",
      description:
        "Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself.",
      websites: [
        { href: "https://sass-lang.com/", title: "sass-lang.com", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Sass_(style_sheet_language)", title: "Sass", kind: "wikipedia" },
      ],
      extensions: [".sass", ".scss"],
      releases: [{ version: "1.75.0", date: "2024-01-01" }],
    })
    .addLicenses(["lic+mit"])
    .addPlatforms(["platf+cross"])
    .addTypeSystems(["tsys+dynamic"]);
}
