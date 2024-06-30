import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+jq")
    .merge({
      name: "jq",
      websites: [{ kind: "wikipedia", title: "jq", href: "https://en.wikipedia.org/wiki/Jq_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Jq_logo.svg" }],
      releases: [{ name: "jq", version: "1.7.1", date: "2023-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+c", "pl+go", "pl+rust"])
    .addInfluences(["pl+icon"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+functional", "para+json", "para+tacit"])
    .addPlatforms(["platf+cross-platform"]);

  /**/
}
