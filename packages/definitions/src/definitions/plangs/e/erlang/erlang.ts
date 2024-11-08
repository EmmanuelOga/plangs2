import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+erlang", {
      name: "Erlang",
      description:
        "Erlang (/ˈɜːrlæŋ/ UR-lang) is a general-purpose, concurrent, functional high-level programming language, and a garbage-collected runtime system. The term Erlang is used interchangeably with Erlang/OTP, or Open Telecom Platform (OTP), which consists of the Erlang runtime system, several ready-to-use components (OTP) mainly written in Erlang, and a set of design principles for Erlang programs.",
      keywords: ["erlang"],
      websites: [
        { title: "www.erlang.org", href: "https://www.erlang.org/", kind: "homepage" },
        { title: "Erlang", href: "https://en.wikipedia.org/wiki/Erlang_(programming_language)", kind: "wikipedia" },
        { title: "Erlang on Reddit", kind: "reddit", href: "https://reddit.com/r/erlang" },
      ],
      extensions: [".erl", ".hrl"],
      year: 1986,
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "27.0.1", name: "Erlang/OTP 27.0.1", date: "2024-01-01" }],
      github: { name: "Erlang", langId: "104", color: "#B83998", popular: false, type: "programming" },
      stackovTags: ["erlang"],
    })
    .addInfluencedBy(["pl+lisp", "pl+ml", "pl+prolog"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+concurrent", "paradigm+functional", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+compiler", "tag+framework", "tag+interpreter"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
