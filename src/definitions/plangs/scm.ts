import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+scm",
    "SCM",
    {
      name: "SCM",
      websites: [
        { kind: "wikipedia", title: "SCM", href: "https://en.wikipedia.org/wiki/SCM_(Scheme_implementation)" },
        { kind: "homepage", title: "people.csail.mit.edu/jaffer/SCM", href: "http://people.csail.mit.edu/jaffer/SCM" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d8/SCM_64.png" }],
      releases: [
        { version: "unknown", date: "1990-01-01", kind: "first" },
        { version: "unknown", date: "2020-02-16", kind: "stable" },
      ],
    },
    {
      implementations: ["pl+c"],
      influenced: ["pl+gnu-guile", "pl+siod"],
      influences: ["pl+gnu-guile", "pl+lisp", "pl+scheme", "pl+siod"],
      licenses: ["lic+lgpl"],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi"],
      people: [
        ["person+aubrey-jaffer", "designer"],
        ["person+radey-shouman", "designer"],
      ],
      platforms: ["platf+cross-platform", "platf+ia-32", "platf+x86-64"],
      typeSystems: ["tsys+dynamic", "tsys+latent", "tsys+strong"],
    },
  );

  /**/
}
