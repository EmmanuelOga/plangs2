import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+epigram")
    .merge({
      name: "Epigram",
      websites: [
        { kind: "wikipedia", title: "Epigram", href: "https://en.wikipedia.org/wiki/Epigram_(programming_language)" },
      ],
      releases: [{ name: "Epigram", version: "unknown", date: "2006-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+alf"])
    .addPerson("person+conor-mcbride", { role: "designer" })
    .addLicense("lic+mit", {
      refs: [{ href: "https://code.google.com/p/epigram/", title: "Epigram – Official website" }],
    })
    .addParadigms(["para+functional"])
    .addPlatforms(["platf+cross-platform", "platf+linux", "platf+win", "platf+mac"])
    .addTypeSystems(["tsys+strong", "tsys+static", "tsys+dependent"]);

  /**/
}
