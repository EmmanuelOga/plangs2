import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+elixir",
    {
      name: "Elixir",
      websites: [
        { kind: "wikipedia", title: "Elixir", href: "https://en.wikipedia.org/wiki/Elixir_(programming_language)" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/a/a4/Elixir_programming_language_logo.png" },
      ],
      releases: [{ version: "1.16.3", date: "2024-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+clojure", "pl+erlang", "pl+ruby"],
      licenses: ["lic+apache"],
      paradigms: ["para+multi", "para+functional", "para+concurrent", "para+distributed", "para+process"],
      platforms: ["platf+erlang"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );
}
