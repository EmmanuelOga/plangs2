import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+xsb")
    .merge({
      name: "XSB",
      websites: [
        { kind: "wikipedia", title: "XSB", href: "https://en.wikipedia.org/wiki/XSB" },
        { kind: "homepage", title: "Sourceforge.net", href: "https://xsb.sourceforge.net/" },
      ],
      releases: [{ name: "XSB", version: "5.0", date: "2022-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+prolog"])
    .addParadigms(["para+logic"])
    .addPlatforms(["platf+cross-platform"]);

  /**/
}
