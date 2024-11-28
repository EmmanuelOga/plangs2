import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+erlang", {
      name: "Erlang",
      description:
        "Erlang is a general-purpose, concurrent, functional high-level programming language, and a garbage-collected runtime system. It is used to build massively scalable soft real-time systems, particularly in telecoms, banking, e-commerce, computer telephony and instant messaging. Erlang/OTP includes the runtime system, several ready-to-use components, and design principles for Erlang programs, emphasizing concurrency, distribution, fault-tolerance, and high availability.",
      keywords: ["concurrent", "erlang", "functional", "otp", "real-time", "telecom"],
      extensions: [".erl", ".hrl"],
      releases: [
        { version: "27.1.2", name: "Erlang/OTP 27.1.2", date: "2024-10-17" },
        { version: "27.0", name: "Erlang/OTP 27.0", date: "2024-05-15" },
        { version: "27.1", name: "Erlang/OTP 27.1", date: "2024-09-18" },
        { version: "27.0.1", name: "Erlang/OTP 27.0.1", date: "2024-01-01" },
      ],
      stackovTags: ["erlang"],
      githubName: "Erlang",
      languishRanking: 107,
      githubLangId: "104",
      githubColor: "#B83998",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Erlang_(programming_language)",
      extRedditPath: "erlang",
      extHomeURL: "https://www.erlang.org/",
      created: "1986",
    })
    .relInfluencedBy.add(["pl+lisp", "pl+prolog"])
    .relLicenses.add(["lic+apache"])
    .relParadigms.add(["para+concurrent", "para+functional", "para+multi", "para+oop"])
    .relPlatforms.add(["plat+apple", "plat+beam", "plat+cross", "plat+linux", "plat+windows"])
    .relTags.add(["tag+app", "tag+compiler", "tag+framework", "tag+interpreters", "tag+server"])
    .relTypeSystems.add(["tsys+dynamic", "tsys+strong"])
    .relWrittenWith.add(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
