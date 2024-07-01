import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+elixir")
    .merge({
      name: "Elixir",
      websites: [
        { kind: "wikipedia", title: "Elixir", href: "https://en.wikipedia.org/wiki/Elixir_(programming_language)" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/a/a4/Elixir_programming_language_logo.png" },
      ],
      releases: [{ name: "Elixir", version: "1.16.3", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+clojure", "pl+erlang", "pl+ruby"])
    .addLicense("lic+apache", {
      refs: [
        {
          href: "https://github.com/elixir-lang/elixir/blob/master/LICENSE",
          title: "elixir/LICENSE at master · elixir-lang/elixir · GitHub",
        },
      ],
    })
    .addParadigms(["para+multi", "para+functional", "para+concurrent", "para+distributed", "para+process"])
    .addPlatforms(["platf+erlang"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/
}
