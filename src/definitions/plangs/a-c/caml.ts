import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+caml",
    "Caml",
    {
      name: "Caml",
      websites: [
        { kind: "wikipedia", title: "Caml", href: "https://en.wikipedia.org/wiki/Caml" },
        { kind: "homepage", title: "caml.inria.fr", href: "http://caml.inria.fr" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Caml.gif/121px-Caml.gif" }],
      releases: [
        { version: "unknown", date: "1985-01-01", kind: "first" },
        { version: "0.75", date: "2002-01-26", kind: "stable" },
      ],
      references: {
        stable_release: [
          { href: "http://caml.inria.fr/caml-light/release.en.html", title: "Latest Caml Light release" },
        ],
      },
    },
    {
      dialects: ["pl+ats", "pl+f-star", "pl+ocaml", "pl+reason"],
      influences: ["pl+ml"],
      licenses: ["lic+lgpl", "lic+q-public"],
      paradigms: ["para+functional", "para+imperative", "para+multi"],
      people: [
        ["person+gerard-huet", { role: "designer" }],
        ["person+xavier-leroy", { role: "designer" }],
      ],
      platforms: ["platf+cross-platform", "platf+linux", "platf+mac", "platf+unix", "platf+win"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );
}
