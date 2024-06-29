import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+elixir",
    "Elixir",
    {
      name: "Elixir",
      websites: [
        { kind: "wikipedia", title: "Elixir", href: "https://en.wikipedia.org/wiki/Elixir_(programming_language)" },
        { kind: "homepage", title: "elixir-lang.org", href: "https://elixir-lang.org" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/a/a4/Elixir_programming_language_logo.png" },
      ],
      releases: [
        { version: "unknown", date: "2012-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "1.16.3", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".ex", ".exs"],
    },
    {
      influences: ["pl+clojure", "pl+erlang", "pl+ruby", "pl+lisp"],
      licenses: ["lic+apache"],
      paradigms: ["para+multi", "para+functional", "para+concurrent", "para+distributed", "para+process"],
      people: ["person+jose-valim"],
      platforms: ["platf+erlang"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );
}
