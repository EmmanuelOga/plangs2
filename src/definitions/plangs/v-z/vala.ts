import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+vala")
    .merge({
      name: "Vala",
      websites: [
        { kind: "wikipedia", title: "Vala", href: "https://en.wikipedia.org/wiki/Vala_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Vala_Logo.svg" }],
      releases: [{ name: "Vala", version: "0.57.0", date: "2023-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+boo", "pl+c", "pl+c-sharp", "pl+d", "pl+java", "pl+cpp"])
    .addLicenses(["lic+lgpl"])
    .addParadigms(["para+multi", "para+imperative", "para+structured", "para+objects"])
    .addPlatforms(["platf+cross-platform", "platf+glib"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+inferred", "tsys+structural"]);

  /**/
}
