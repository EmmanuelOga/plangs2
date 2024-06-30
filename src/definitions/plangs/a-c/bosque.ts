import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+bosque")
    .merge({
      name: "Bosque",
      websites: [
        { kind: "wikipedia", title: "Bosque", href: "https://en.wikipedia.org/wiki/Bosque_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Bosque_logo.png/256px-Bosque_logo.png",
        },
      ],
    })
    .addInfluences(["pl+javascript", "pl+typescript", "pl+ml"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+multi", "para+functional", "para+typed"]);

  /**/
}
