import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+erlang").merge({
    name: "Erlang",
    websites: [
      { kind: "wikipedia", title: "Erlang", href: "https://en.wikipedia.org/wiki/Erlang_(programming_language)" },
    ],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/04/Erlang_logo.svg" }],
    releases: [{ version: "26.2.5", date: "2024-01-01", kind: "stable" }],
  });
}
