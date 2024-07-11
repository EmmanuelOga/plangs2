import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+hartmann-pipeline")
    .merge({
      name: "Pipelines",
      websites: [
        { kind: "wikipedia", title: "Pipelines", href: "https://en.wikipedia.org/wiki/Hartmann_pipeline" },
        { kind: "homepage", title: "http://vm.marist.edu/~pipeline", href: "http://vm.marist.edu/~pipeline" },
      ],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/en/0/0c/Pipjarg1.jpeg" }],
      releases: [{ name: "Pipelines", version: "1.1.12", date: "2020-06-03", kind: "stable" }],
    })
    .addInfluences(["pl+pipeline"])
    .addParadigms(["para+dataflow"])
    .addPlatforms(["platf+z-slashvm"]);

  /**/
}
