import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+gnu-e")
    .merge({
      name: "GNU E",
      websites: [
        { kind: "wikipedia", title: "GNU E", href: "https://en.wikipedia.org/wiki/GNU_E" },
        { kind: "homepage", title: "ftp://ftp.cs.wisc.edu/exodus/E/", href: "ftp://ftp.cs.wisc.edu/exodus/E/" },
      ],
      releases: [{ name: "GNU E", version: "2.3.3", date: "1993-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+cpp"])
    .addLicenses(["lic+gpl"])
    .addParadigms(["para+objects"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+strong"]);

  /**/
}
