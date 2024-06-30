import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+r",
    {
      name: "R",
      websites: [{ kind: "wikipedia", title: "R", href: "https://en.wikipedia.org/wiki/R_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg" }],
      releases: [{ version: "4.4.0", date: "2024-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+armed-bear-common-lisp", "pl+common-lisp", "pl+s", "pl+scheme"],
      people: ["person+robert-gentleman", "person+ross-ihaka"],
      licenses: ["lic+gpl"],
      paradigms: ["para+array", "para+functional", "para+imperative", "para+multi", "para+objects", "para+reflective"],
      platforms: ["platf+arm", "platf+x86-64"],
      typeSystems: ["tsys+dynamic"],
    },
  );
}
