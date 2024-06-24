import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+lasso",
    "Lasso",
    {
      name: "Lasso",
      websites: [
        { kind: "wikipedia", title: "Lasso", href: "https://en.wikipedia.org/wiki/Lasso_(programming_language)" },
        { kind: "homepage", title: "www.lassosoft.com", href: "http://www.lassosoft.com" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/LassoSoft_and_Lasso_Logo.png/220px-LassoSoft_and_Lasso_Logo.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1995-01-01", kind: "first" },
        { version: "9.3.1", date: "2015-10-23", kind: "stable" },
      ],
      extensions: [".lasso"],
    },
    {
      implementations: ["pl+c"],
      influenced: ["pl+dylan", "pl+scala", "pl+smalltalk"],
      influences: ["pl+dylan", "pl+scala", "pl+smalltalk"],
      licenses: ["lic+proprietary"],
      paradigms: [
        "para+concurrent",
        "para+expression",
        "para+imperative",
        "para+meta",
        "para+multi",
        "para+objects",
        "para+reflection",
        "para+structured",
      ],
      people: [["person+kyle-jessup", "designer"]],
      platforms: ["platf+cross-platform", "platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+nominative"],
    },
  );

  /**/
}
