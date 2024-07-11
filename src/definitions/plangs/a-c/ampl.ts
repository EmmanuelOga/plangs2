import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+ampl")
    .merge({
      name: "AMPL",
      websites: [{ kind: "wikipedia", title: "AMPL", href: "https://en.wikipedia.org/wiki/AMPL" }],
      images: [
        { kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/en/b/b6/AMPL_%28textbook_cover%29.jpg" },
      ],
      releases: [{ name: "AMPL", version: "unknown", date: "2023-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+awk", "pl+c"])
    .addPerson("person+robert-fourer", { role: "designer" })
    .addPerson("person+brian-kernighan", { role: "designer" })
    .addLicenses(["lic+proprietary", "lic+free-and-open-source"])
    .addParadigms(["para+multi", "para+dec", "para+imperative"])
    .addPlatforms(["platf+cross-platform", "platf+linux", "platf+mac", "platf+win"]);

  /**/
}
