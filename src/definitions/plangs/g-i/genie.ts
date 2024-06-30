import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+genie")
    .merge({
      name: "Genie",
      websites: [
        { kind: "wikipedia", title: "Genie", href: "https://en.wikipedia.org/wiki/Genie_(programming_language)" },
      ],
      releases: [{ name: "Genie", version: "0.52.3", date: "2021-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+boo", "pl+d", "pl+pascal"])
    .addInfluence("pl+python", {
      refs: [
        {
          href: "https://web.archive.org/web/20200601133216/https://wiki.gnome.org/action/show/Projects/Genie",
          title: "The Genie Programming Language Tutorial",
        },
      ],
    })
    .addLicenses(["lic+lgpl"])
    .addParadigms(["para+multi", "para+imperative", "para+structured", "para+objects"])
    .addPlatforms(["platf+cross-platform", "platf+glib"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/
}
