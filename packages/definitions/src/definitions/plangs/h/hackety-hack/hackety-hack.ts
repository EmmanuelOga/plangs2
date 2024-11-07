import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+hackety-hack", {
      name: "Hackety Hack",
      description:
        'Hackety Hack is an open source application that teaches individuals how to create software. It combines an IDE with an extensive Lessons system. The cross-platform desktop application also has integration with the website, where "Hackers" can share what they\'ve learned, ask questions, and submit feedback.',
      keywords: ["hackety hack", "programming education", "software development learning"],
      websites: [
        { title: "github.com/hacketyhack/hacketyhack", href: "https://github.com/hacketyhack/hacketyhack", kind: "repository" },
        { title: "Hackety Hack", href: "https://en.wikipedia.org/wiki/Hackety_Hack", kind: "wikipedia" },
      ],
      year: 2009,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "1.0", name: "Hackety Hack 1.0", date: "2010-01-01" }],
    })
    .addInfluencedBy(["pl+ruby"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+educational", "paradigm+oo", "paradigm+scripting"])
    .addPlatforms(["plat+apple", "plat+linux", "plat+windows"])
    .addTags(["tag+edu", "tag+interpreter", "tag+scripting", "tag+ui"])
    .addTypeSystems(["tsys+dynamic"])
    .addWrittenIn(["pl+ruby"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
