import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+carbon")
    .merge({
      name: "Carbon",
      websites: [
        { kind: "wikipedia", title: "Carbon", href: "https://en.wikipedia.org/wiki/Carbon_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Carbon_logo.png/121px-Carbon_logo.png",
        },
      ],
      extensions: [".carbon"],
    })
    .addImplementations(["pl+cpp"])
    .addInfluences(["pl+cpp"])
    .addLicenses(["lic+apache"])
    .addTypeSystems(["tsys+static", "tsys+nominative", "tsys+inferred"]);

  /**/
}
