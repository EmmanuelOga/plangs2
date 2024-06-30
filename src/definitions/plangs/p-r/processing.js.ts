import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+processing.js")
    .merge({
      name: "ProcessingProcessing IDE",
      websites: [
        { kind: "wikipedia", title: "ProcessingProcessing IDE", href: "https://en.wikipedia.org/wiki/Processing.js" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Processing_2021_logo.svg" }],
      releases: [{ name: "ProcessingProcessing IDE", version: "4.3", date: "2023-01-01", kind: "stable" }],
    })
    .addPerson("person+casey-reas", { role: "designer" })
    .addPerson("person+ben-fry", { role: "designer" })
    .addLicenses(["lic+gpl", "lic+lgpl"])
    .addParadigms(["para+objects"]);

  /**/
}
