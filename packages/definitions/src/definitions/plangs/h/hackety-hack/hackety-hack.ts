import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+hackety-hack", {
      name: "Hackety Hack",
      description:
        'Hackety Hack is an open source application that teaches individuals how to create software. It combines an IDE with an extensive Lessons system. The cross-platform desktop application also has integration with the website, where "Hackers" can share what they\'ve learned, ask questions, and submit feedback.',
      websites: [
        { href: "https://github.com/hacketyhack/hacketyhack", title: "github.com/hacketyhack/hacketyhack", kind: "repository" },
        { href: "https://en.wikipedia.org/wiki/Hackety_Hack", title: "Hackety Hack", kind: "wikipedia" },
      ],
      releases: [{ version: "1.0", date: "2010-01-01" }],
      images: [{ kind: "other", title: "Hackety Hack", url: "/images/plangs/h/hackety-hack/other.png" }],
    })
    .addLicenses(["license+mit"])
    .addPlatforms(["plat+apple", "plat+linux", "plat+windows"])
    .addTags(["tag+edu", "tag+interpreter", "tag+ui"])
    .addWrittenIn(["pl+ruby"]);
}
