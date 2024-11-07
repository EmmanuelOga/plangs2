import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+elvish", {
      name: "Elvish",
      description:
        "Elvish is a modern and expressive shell for Unix-like operating systems. It provides a rich set of features including structured data, a rich library of utility functions, and a productive programming environment.",
      keywords: ["elvish"],
      websites: [
        { title: "Elvish", href: "https://elv.sh/", kind: "homepage" },
        { title: "Elvish Wiki", href: "https://github.com/elves/elvish/wiki", kind: "wikipedia" },
        { title: "Elvish Repository", href: "https://github.com/elves/elvish", kind: "repository" },
      ],
      extensions: [".elv"],
      year: 2016,
      releases: [{ version: "0.18.0", name: "Elvish 0.18.0", date: "2023-09-15" }],
    })
    .addInfluencedBy(["pl+fish", "pl+zsh"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+functional", "paradigm+scripting"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+linux", "plat+windows"])
    .addTags(["tag+cli", "tag+scripting", "tag+shell"])
    .addTypeSystems(["tsys+dynamic"])
    .addWrittenIn(["pl+go"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
