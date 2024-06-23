import type { PlangsGraph } from "../../entities/plangs_graph";

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
        { version: "1.16.3", date: "2024-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          { href: "https://github.com/elixir-lang/elixir/releases/tag/v1.16.3", title: "Release 1.16.3" },
        ],
        license: [
          {
            href: "https://github.com/elixir-lang/elixir/blob/master/LICENSE",
            title: "elixir/LICENSE at master · elixir-lang/elixir · GitHub",
          },
        ],
      },
      extensions: [".ex", ".exs"],
    },
    {
      influenced: ["pl+clojure", "pl+erlang", "pl+gleam", "pl+lfe", "pl+lisp-programming-language", "pl+ruby"],
      influences: ["pl+clojure", "pl+erlang", "pl+gleam", "pl+lfe", "pl+ruby"],
      licenses: ["lic+apache"],
      paradigms: ["para+concurrent", "para+distributed", "para+functional", "para+multi", "para+process"],
      people: [["person+jose-valim", "designer"]],
      platforms: ["platf+erlang"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/
}
