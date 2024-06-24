import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+lfe",
    "LFE",
    {
      name: "LFE",
      websites: [
        { kind: "wikipedia", title: "LFE", href: "https://en.wikipedia.org/wiki/LFE_(programming_language)" },
        { kind: "homepage", title: "lfe.io", href: "http://lfe.io" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/LFE_%28Lisp_Flavored_Erlang%29_Logo.png/121px-LFE_%28Lisp_Flavored_Erlang%29_Logo.png",
        },
      ],
      releases: [
        { version: "unknown", date: "2008-01-01", kind: "first" },
        { version: "2.1.1", date: "2023-01-06", kind: "stable" },
      ],
      extensions: [],
    },
    {
      implementations: ["pl+erlang"],
      influences: ["pl+clojure", "pl+common-lisp", "pl+elixir", "pl+erlang", "pl+hy", "pl+maclisp", "pl+scheme"],
      licenses: ["lic+apache"],
      paradigms: ["para+concurrent", "para+functional", "para+multi"],
      people: [["person+robert-virding", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/
}
