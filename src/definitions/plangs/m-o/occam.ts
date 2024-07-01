import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+occam")
    .merge({
      name: "occam",
      websites: [
        { kind: "wikipedia", title: "occam", href: "https://en.wikipedia.org/wiki/Occam_(programming_language)" },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/1983_1988_Trademark_occam_and_occam_2_INMOS_Limited.jpg/121px-1983_1988_Trademark_occam_and_occam_2_INMOS_Limited.jpg",
        },
      ],
      releases: [{ name: "occam", version: "2.1", date: "1994-01-01", kind: "stable" }],
    })
    .addDialects(["pl+occam--"])
    .addInfluences(["pl+csp"])
    .addPerson("person+david-may", { role: "designer" })
    .addParadigms(["para+imperative", "para+concurrent"]);

  /**/
}
