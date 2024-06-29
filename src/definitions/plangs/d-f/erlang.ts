import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+erlang",
    "Erlang",
    {
      name: "Erlang",
      websites: [
        { kind: "wikipedia", title: "Erlang", href: "https://en.wikipedia.org/wiki/Erlang_(programming_language)" },
        { kind: "homepage", title: "www.erlang.org", href: "https://www.erlang.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/04/Erlang_logo.svg" }],
      releases: [
        { version: "unknown", date: "1986-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "26.2.5", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".erl", ".hrl"],
    },
    {
      dialects: ["pl+lfe"],
      influences: ["pl+lisp", "pl+plex", "pl+prolog", "pl+smalltalk", "pl+ml"],
      licenses: ["lic+apache"],
      paradigms: ["para+multi", "para+concurrent", "para+functional", "para+objects"],
      people: ["person+joe-armstrong"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );
}
