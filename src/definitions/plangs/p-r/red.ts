import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+red")
    .merge({
      name: "Red",
      websites: [{ kind: "wikipedia", title: "Red", href: "https://en.wikipedia.org/wiki/Red_(programming_language)" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Red_Language_Tower_Logo.png/150px-Red_Language_Tower_Logo.png",
        },
      ],
      releases: [{ name: "Red", version: "0.6.5", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+rebol", "pl+lisp", "pl+scala", "pl+lua"])
    .addLicenses(["lic+bsd-m", "lic+boost"])
    .addParadigms(["para+multi", "para+imperative", "para+functional", "para+symbolic"])
    .addPlatforms(["platf+linux", "platf+win", "platf+mac"]);

  /**/
}
