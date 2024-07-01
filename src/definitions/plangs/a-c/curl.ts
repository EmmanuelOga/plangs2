import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+curl")
    .merge({
      name: "Curl",
      websites: [
        { kind: "wikipedia", title: "Curl", href: "https://en.wikipedia.org/wiki/Curl_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/5/5a/Curl_logo.gif" }],
      releases: [{ name: "Curl", version: "8.0.13", date: "2022-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+html", "pl+javascript", "pl+lisp"])
    .addPerson("person+steve-ward", { role: "designer" })
    .addLicenses(["lic+proprietary"])
    .addParadigms(["para+multi", "para+objects", "para+markup"])
    .addPlatforms(["platf+win"])
    .addTypeSystems(["tsys+strong"]);

  /**/
}
