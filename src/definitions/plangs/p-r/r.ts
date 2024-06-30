import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+r")
    .merge({
      name: "R",
      websites: [{ kind: "wikipedia", title: "R", href: "https://en.wikipedia.org/wiki/R_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg" }],
      releases: [{ name: "R", version: "4.4.0", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+common-lisp", "pl+s", "pl+scheme"])
    .addPerson("person+ross-ihaka", { role: "designer" })
    .addPerson("person+robert-gentleman", { role: "designer" })
    .addLicense("lic+gpl", {
      refs: [{ href: "https://directory.fsf.org/wiki/R#tab=Details", title: "R - Free Software Directory" }],
    })
    .addParadigms(["para+multi", "para+imperative", "para+objects", "para+functional", "para+reflective"])
    .addParadigm("para+array", {
      refs: [
        {
          href: "https://doi.org/10.1007/978-3-642-31057-7_6",
          title: "Evaluating the design of the R language: objects and functions for data analysis",
        },
      ],
    })
    .addPlatforms(["platf+arm", "platf+x86-64"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
