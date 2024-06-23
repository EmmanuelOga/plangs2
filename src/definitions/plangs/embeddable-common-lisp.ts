import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+embeddable-common-lisp",
    "ECL",
    {
      name: "ECL",
      websites: [
        {
          kind: "wikipedia",
          title: "Embeddable Common Lisp",
          href: "https://en.wikipedia.org/wiki/Embeddable_Common_Lisp",
        },
        { kind: "homepage", title: "ecl.common-lisp.dev", href: "https://ecl.common-lisp.dev" },
      ],
      releases: [
        { version: "unknown", date: "1995-01-01", kind: "first" },
        { version: "23.9.9", date: "2023-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          { href: "https://ecl.common-lisp.dev/posts/ECL-2399-release.html", title: "ECL 23.9.9 release" },
        ],
      },
    },
    {
      implementations: ["pl+c", "pl+common-lisp"],
      influences: ["pl+c", "pl+common-lisp", "pl+lisp"],
      licenses: ["lic+lgpl"],
      paradigms: [
        "para+functional",
        "para+generic",
        "para+imperative",
        "para+meta",
        "para+multi",
        "para+objects",
        "para+reflective",
      ],
      people: [
        ["person+daniel-kochmanski", "designer"],
        ["person+giuseppe-attardi", "designer"],
        ["person+marius-gerbershagen", "designer"],
      ],
      platforms: ["platf+android", "platf+arm", "platf+unix", "platf+win", "platf+x86"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/
}
