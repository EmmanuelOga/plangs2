import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+pony", {
      name: "Pony",
      description:
        "Pony is an actor-model, capabilities-secure, high-performance programming language designed with reference capabilities and focusing on safe and concurrent programming.",
      keywords: ["pony", "concurrent", "actor model", "capability-security"],
      websites: [
        { title: "Pony", href: "https://www.ponylang.io/", kind: "homepage" },
        { title: "Pony (programming language) - Wikipedia", href: "https://en.wikipedia.org/wiki/Pony_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".pony"],
      firstAppeared: "2015-09-18",
      releases: [{ version: "0.41.0", name: "Pony 0.41.0", date: "2023-09-01" }],
    })
    .addInfluencedBy(["pl+erlang", "pl+ml", "pl+scala"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+concurrent", "paradigm+functional", "paradigm+message-passing", "paradigm+oop"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+linux", "plat+windows"])
    .addTags(["tag+concurrency", "tag+safety"])
    .addTypeSystems(["tsys+safe", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c"]);
}
