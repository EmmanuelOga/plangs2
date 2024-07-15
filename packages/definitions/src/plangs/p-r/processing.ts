import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+processing")
    .merge({
      name: "ProcessingProcessing IDE",
      websites: [
        {
          kind: "wikipedia",
          title: "Processing",
          href: "https://en.wikipedia.org/wiki/Processing_(programming_language)",
        },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Processing_2021_logo.svg" }],
      releases: [{ name: "ProcessingProcessing IDE", version: "4.3", date: "2023-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+c"])
    .addPerson("person+casey-reas", { role: "designer" })
    .addPerson("person+ben-fry", { role: "designer" })
    .addLicenses(["lic+gpl", "lic+lgpl"])
    .addParadigms(["para+objects"]);

  /**/
}
