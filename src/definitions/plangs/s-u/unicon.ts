import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+unicon")
    .merge({
      name: "Unicon",
      websites: [
        { kind: "wikipedia", title: "Unicon", href: "https://en.wikipedia.org/wiki/Unicon_(programming_language)" },
      ],
    })
    .addInfluences(["pl+icon"])
    .addLicenses(["lic+gpl"])
    .addParadigms(["para+objects", "para+imperative"])
    .addPlatforms(["platf+cross-platform", "platf+win", "platf+unix"]);

  /**/
}
