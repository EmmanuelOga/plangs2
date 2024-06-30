import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+ocaml").merge({
    name: "OCaml",
    websites: [{ kind: "wikipedia", title: "OCaml", href: "https://en.wikipedia.org/wiki/OCaml" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/ff/OCaml_Logo.svg" }],
    releases: [{ version: "5.2.0", date: "2024-01-01", kind: "stable" }],
  });
}
