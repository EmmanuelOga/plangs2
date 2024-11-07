import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+nickel", {
      name: "Nickel",
      description:
        "Nickel is a configuration language for programmers that brings strong types and flexible validation. It is aimed at reducing configuration errors by allowing users to declare the expected structure of their configurations and enforce validation rules.",
      keywords: ["nickel"],
      websites: [
        { title: "Nickel", href: "https://nickel-lang.org/", kind: "homepage" },
        { title: "Nickel GitHub", href: "https://github.com/tweag/nickel", kind: "repository" },
        { title: "Nickel Wikipedia", href: "https://en.wikipedia.org/wiki/Nickel_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".ncl"],
      year: 2021,
      releases: [{ version: "1.0.0", name: "Nickel 1.0.0", date: "2023-09-01" }],
    })
    .addInfluencedBy(["pl+rust"])
    .addLicenses(["license+mpl"])
    .addParadigms(["paradigm+data-exchange", "paradigm+declarative", "paradigm+validation"])
    .addPlatforms(["plat+linux", "plat+mac", "plat+windows"])
    .addTags(["tag+configuration", "tag+validation"])
    .addTypeSystems(["tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+rust"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
