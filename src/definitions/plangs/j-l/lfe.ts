import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+lfe").merge({
    name: "LFE",
    websites: [{ kind: "wikipedia", title: "LFE", href: "https://en.wikipedia.org/wiki/LFE_(programming_language)" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/LFE_%28Lisp_Flavored_Erlang%29_Logo.png/121px-LFE_%28Lisp_Flavored_Erlang%29_Logo.png",
      },
    ],
    releases: [{ version: "2.1.1", date: "2023-01-01", kind: "stable" }],
  });
}
