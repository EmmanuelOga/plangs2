import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+livecode")
    .merge({
      name: "LiveCode",
      websites: [{ kind: "wikipedia", title: "LiveCode", href: "https://en.wikipedia.org/wiki/LiveCode" }],
      releases: [
        { version: "9.6.4", date: "2021-01-01", kind: "stable" },
        { version: "9.6.5", date: "2021-01-01", kind: "preview" },
      ],
    })
    .addInfluences(["pl+hypertalk", "pl+xtalk"])
    .addLicenses(["lic+proprietary", "lic+gpl"])
    .addParadigms(["para+objects"])
    .addPlatforms(["platf+win", "platf+mac", "platf+linux", "platf+unix", "platf+rpi"]);

  /**/
}
