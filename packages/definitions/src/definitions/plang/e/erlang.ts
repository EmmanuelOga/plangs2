import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+erlang", {
      name: "Erlang",
      description:
        "General-purpose, concurrent, functional high-level programming language, and a garbage-collected runtime system. It is used to build massively scalable soft real-time systems, particularly in telecoms, banking, e-commerce, computer telephony and instant messaging. Erlang/OTP includes the runtime system, several ready-to-use components, and design principles for Erlang programs, emphasizing concurrency, distribution, fault-tolerance, and high availability.",
      shortDesc: "Concurrent functional language for scalable real-time systems.",
      created: "1986",
      extensions: [".erl", ".hrl"],
      extGithubPath: "erlang/otp",
      extRedditPath: "erlang",
      extWikipediaPath: "Erlang_(programming_language)",
      githubColor: "#B83998",
      githubLangId: "104",
      githubName: "Erlang",
      githubPopular: false,
      githubStars: 11400,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["concurrent", "erlang", "functional", "otp", "real-time", "telecom"],
      languishRanking: 107,
      releases: [{ version: "27.2", name: "Erlang/OTP 27.2", date: "2024-12-11" }],
      stackovTags: ["erlang"],
    })
    .relInfluencedBy.add("pl+lisp", "pl+prolog")
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+concurrent", "para+functional", "para+multi", "para+oop")
    .relPlatforms.add("plat+apple", "plat+beam", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+app", "tag+compiler", "tag+framework", "tag+interpreters", "tag+server")
    .relTypeSystems.add("tsys+dynamic", "tsys+strong")
    .relWrittenWith.add("pl+c");
}
