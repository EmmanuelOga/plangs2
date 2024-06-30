import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+nial")
    .merge({
      name: "Nial",
      websites: [{ kind: "wikipedia", title: "Nial", href: "https://en.wikipedia.org/wiki/Nial" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/88/NialLogo.jpg" }],
      releases: [{ name: "Nial", version: "7.0", date: "2017-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+apl", "pl+lisp"])
    .addLicenses(["lic+gpl-3"])
    .addParadigms(["para+array"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
