import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+dart", {
      name: "Dart",
      description:
        "Dart is a programming language designed by Lars Bak and Kasper Lund and developed by Google. It can be used to develop web and mobile apps as well as server and desktop applications.",
      firstAppeared: "2011-01-01",
      extensions: [".dart"],
      websites: [
        { href: "https://dart.dev/", title: "dart.dev", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Dart_(programming_language)", title: "Dart", kind: "wikipedia" },
      ],
      releases: [{ version: "3.5.2", date: "2024-01-01" }],
    })
    .addImplements(["pl+sass"])
    .addInfluencedBy(["pl+c", "pl+c++", "pl+c-sharp", "pl+erlang", "pl+javascript", "pl+ruby", "pl+typescript"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop", "paradigm+reflective"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+analysis", "tag+app", "tag+audio-dev", "tag+cli", "tag+editor", "tag+framework", "tag+interpreter", "tag+shell", "tag+ui"])
    .addTypeSystems(["tsys+inferred", "tsys+optional", "tsys+static", "tsys+strong"]);
}
