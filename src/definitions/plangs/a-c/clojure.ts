import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+clojure",
    "Clojure",
    {
      name: "Clojure",
      websites: [
        { kind: "wikipedia", title: "Clojure", href: "https://en.wikipedia.org/wiki/Clojure" },
        { kind: "wikipedia", title: "Clojure", href: "https://en.wikipedia.org/wiki/Clojure_(programming_language)" },
        { kind: "homepage", title: "clojure.org", href: "https://clojure.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Clojure_logo.svg" }],
      releases: [
        { version: "unknown", date: "2007-01-01", kind: "first" },
        { version: "1.11.2", date: "2024-03-08", kind: "stable" },
      ],
      extensions: [],
    },
    {
      influences: [
        "pl+wolfram",
        "pl+java",
        "pl+scheme",
        "pl+c-sharp",
        "pl+cpp",
        "pl+common-lisp",
        "pl+erlang",
        "pl+haskell",
        "pl+ml",
        "pl+prolog",
        "pl+racket",
        "pl+ruby",
      ],
      licenses: ["lic+eclipse-public"],
      paradigms: [
        "para+multi",
        "para+agent",
        "para+concurrent",
        "para+functional",
        "para+logic",
        "para+macros",
        "para+pipeline",
      ],
      people: ["person+rich-hickey"],
      platforms: ["platf+jvm", "platf+javascript", "platf+.net"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );
}
