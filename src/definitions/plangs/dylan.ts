import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+dylan",
    "Dylan",
    {
      name: "Dylan",
      websites: [
        { kind: "wikipedia", title: "Dylan", href: "https://en.wikipedia.org/wiki/Dylan_(programming_language)" },
        { kind: "homepage", title: "opendylan.org", href: "https://opendylan.org/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Dylan_logo.png/121px-Dylan_logo.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1992-01-01", kind: "first" },
        { version: "2022.1", date: "2022-11-28", kind: "stable" },
      ],
      extensions: ["dylan", "lid"],
      references: {
        influenced: [
          {
            href: "https://increment.com/programming-languages/goldilocks-language-history-of-julia/",
            title: "Julia: The Goldilocks language",
          },
        ],
      },
    },
    {
      influenced: [
        "pl+common-lisp",
        "pl+eulisp",
        "pl+julia",
        "pl+lasso",
        "pl+lisp-programming-language",
        "pl+newtonscript",
        "pl+python",
        "pl+ruby",
        "pl+scheme",
        "pl+smalltalk",
      ],
      influences: [
        "pl+algol",
        "pl+common-lisp-object-system",
        "pl+eulisp",
        "pl+julia",
        "pl+lasso",
        "pl+python",
        "pl+ruby",
        "pl+scheme",
      ],
      paradigms: ["para+functional", "para+multi", "para+objects"],
      platforms: ["platf+cross-platform", "platf+ia-32", "platf+x86-64"],
      typeSystems: ["tsys+gradual", "tsys+strong"],
    },
  );

  /**/
}
