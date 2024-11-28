import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+elixir", {
      name: "Elixir",
      description:
        "Elixir is a dynamic, functional language designed for building scalable and maintainable applications. It builds on the Erlang VM, known for creating low-latency, distributed, and fault-tolerant systems. Elixir provides metaprogramming capabilities, allowing developers to extend the language comprehensively, leveraging macros and protocols for polymorphism, enhancing its ability to handle large and complex systems.",
      keywords: ["concurrent", "distributed", "elixir", "erlang", "functional"],
      extensions: [".ex", ".exs"],
      releases: [
        { version: "1.17.3", name: "Elixir 1.17.3", date: "2024-09-18" },
        { version: "1.17.2", name: "Elixir 1.17.2", date: "2024-01-01" },
      ],
      stackovTags: ["elixir"],
      githubName: "Elixir",
      languishRanking: 43,
      githubLangId: "100",
      githubColor: "#6e4a7e",
      githubPopular: true,
      githubType: "programming",
      extWikipediaPath: "Elixir_(programming_language)",
      extRedditPath: "elixir",
      extHomeURL: "https://elixir-lang.org/",
      created: "2012",
    })
    .relInfluencedBy.add("pl+clojure", "pl+erlang", "pl+lisp", "pl+ruby")
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+concurrent", "para+distributed", "para+functional", "para+multi", "para+process-oriented")
    .relPlatforms.add("plat+beam")
    .relTags.add("tag+analysis", "tag+app", "tag+embedded", "tag+interpreters", "tag+multimedia", "tag+shell")
    .relTypeSystems.add("tsys+dynamic", "tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
