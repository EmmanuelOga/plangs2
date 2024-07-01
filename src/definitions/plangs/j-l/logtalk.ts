import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+logtalk")
    .merge({
      name: "Logtalk",
      websites: [{ kind: "wikipedia", title: "Logtalk", href: "https://en.wikipedia.org/wiki/Logtalk" }],
      releases: [{ name: "Logtalk", version: "3.66.0", date: "2023-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+prolog", "pl+smalltalk", "pl+objective-c"])
    .addLicenses(["lic+artistic-2", "lic+apache"])
    .addParadigms(["para+logic", "para+objects", "para+prototypes"])
    .addPlatforms(["platf+cross-platform"]);

  /**/
}
