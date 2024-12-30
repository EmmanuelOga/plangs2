import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+elixir", {
      name: "Elixir",
      description:
        "Dynamic, functional language designed for building scalable and maintainable applications. It builds on the Erlang VM, known for creating low-latency, distributed, and fault-tolerant systems. Elixir provides metaprogramming capabilities, allowing developers to extend the language comprehensively, leveraging macros and protocols for polymorphism, enhancing its ability to handle large and complex systems.",
      shortDesc: "Dynamic, functional language for scalable applications built on Erlang VM.",
      created: "2012",
      extensions: [".ex", ".exs"],
      extGithubPath: "elixir-lang/elixir",
      extHomeURL: "https://elixir-lang.org/",
      extRedditPath: "elixir",
      extWikipediaPath: "Elixir_(programming_language)",
      githubColor: "#6e4a7e",
      githubLangId: "100",
      githubName: "Elixir",
      githubPopular: true,
      githubStars: 24700,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["concurrent", "distributed", "elixir", "erlang", "functional"],
      languishRanking: 43,
      releases: [
        { version: "1.17.3", name: "Elixir 1.17.3", date: "2024-09-18" },
        { version: "1.17.2", name: "Elixir 1.17.2", date: "2024-01-01" },
      ],
      stackovTags: ["elixir"],
    })
    .relInfluencedBy.add("pl+clojure", "pl+erlang", "pl+lisp", "pl+ruby")
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+concurrent", "para+distributed", "para+functional", "para+metaprogramming", "para+multi", "para+process-oriented")
    .relPlatforms.add("plat+beam")
    .relTags.add("tag+analysis", "tag+app", "tag+embedded", "tag+interpreters", "tag+multimedia", "tag+shell")
    .relTypeSystems.add("tsys+dynamic", "tsys+strong");
}
