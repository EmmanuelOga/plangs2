import type { PlangsGraph } from "../../../entities/plangs_graph";

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
      influences: ["pl+lisp", "pl+scheme", "pl+siod"],
      licenses: ["lic+lgpl"],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi"],
      people: [
        ["person+aubrey-jaffer", { role: "designer" }],
        ["person+radey-shouman", { role: "developer" }],
        ["person+tanel-tammet", { role: "developer" }],
      ],
      platforms: ["platf+cross-platform", "platf+ia-32", "platf+x86-64"],
      typeSystems: ["tsys+dynamic", "tsys+latent", "tsys+strong"],
    },
  );
}
