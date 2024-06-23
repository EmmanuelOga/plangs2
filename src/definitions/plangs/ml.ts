import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ml",
    "ML",
    {
      name: "ML",
      websites: [{ kind: "wikipedia", title: "ML", href: "https://en.wikipedia.org/wiki/ML_(programming_language)" }],
      releases: [{ version: "unknown", date: "1973-01-01", kind: "first" }],
    },
    {
      dialects: [
        "pl+alice",
        "pl+ats",
        "pl+caml",
        "pl+f-star",
        "pl+futhark",
        "pl+mlton",
        "pl+ocaml",
        "pl+reason",
        "pl+standard-ml",
        "pl+standard-ml-of-new-jersey",
      ],
      influenced: [
        "pl+alice",
        "pl+ats",
        "pl+bosque",
        "pl+c-plus-plus",
        "pl+caml",
        "pl+ceylon",
        "pl+claire",
        "pl+clojure",
        "pl+haskell",
        "pl+idris",
        "pl+iswim",
        "pl+kotlin",
        "pl+lean",
        "pl+lisp-programming-language",
        "pl+miranda",
        "pl+nemerle",
        "pl+orc",
        "pl+parasail",
        "pl+pict",
        "pl+standard-ml",
      ],
      influences: [
        "pl+c-plus-plus",
        "pl+clojure",
        "pl+coq",
        "pl+cyclone",
        "pl+elm",
        "pl+erlang",
        "pl+f-sharp",
        "pl+f-star",
        "pl+haskell",
        "pl+idris",
        "pl+iswim",
        "pl+kotlin",
        "pl+miranda",
        "pl+nemerle",
        "pl+ocaml",
        "pl+opa",
        "pl+rust",
        "pl+scala",
        "pl+standard-ml",
      ],
      paradigms: ["para+functional", "para+generic", "para+imperative", "para+multi"],
      people: [["person+robin-milner", "designer"]],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  /**/
}
