import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
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
    .addInfluencedBy(["pl+c", "pl+c++", "pl+c-sharp", "pl+erlang", "pl+javascript", "pl+ruby"])
    .addLicenses(["lic+bsd"])
    .addParadigms(["para+functional", "para+imperative", "para+multi", "para+oop", "para+reflective"])
    .addPlatforms(["platf+cross"])
    .addTypeSystems(["tsys+inferred", "tsys+optional", "tsys+static", "tsys+strong"]);
}
