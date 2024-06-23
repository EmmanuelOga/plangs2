import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+xtend",
    "Xtend",
    {
      name: "Xtend",
      websites: [
        { kind: "wikipedia", title: "Xtend", href: "https://en.wikipedia.org/wiki/Xtend" },
        { kind: "homepage", title: "eclipse.dev/Xtext/xtend/", href: "https://eclipse.dev/Xtext/xtend/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Xtend-logo-c.png" }],
      releases: [
        { version: "unknown", date: "2011-01-01", kind: "first" },
        { version: "2.25.0", date: "2021-03-02", kind: "stable" },
      ],
      references: {
        stable_release: [{ href: "https://www.eclipse.org/xtend/releasenotes.html", title: "Xtend - Release Notes" }],
      },
    },
    {
      influences: ["pl+groovy", "pl+java", "pl+scala", "pl+smalltalk"],
      licenses: ["lic+eclipse-public"],
      paradigms: ["para+functional", "para+imperative", "para+objects"],
      people: [
        ["person+sebastian-zarnekow", "designer"],
        ["person+sven-efftinge", "designer"],
      ],
      platforms: ["platf+cross-platform", "platf+jvm"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  /**/
}
