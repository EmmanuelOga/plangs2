import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+erlang",
    {
      name: "Erlang",
      websites: [
        { kind: "wikipedia", title: "Erlang", href: "https://en.wikipedia.org/wiki/Erlang_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/04/Erlang_logo.svg" }],
      releases: [{ version: "26.2.5", date: "2024-01-01", kind: "stable" }],
    },
    {
      dialects: ["pl+lfe"],
      influences: ["pl+lisp", "pl+ml", "pl+plex", "pl+prolog", "pl+smalltalk"],
      licenses: ["lic+apache"],
      paradigms: ["para+concurrent", "para+functional", "para+multi", "para+objects"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );
}
