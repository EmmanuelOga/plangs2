import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+hackety-hack", {
      name: "Hackety Hack",
      description:
        "Hackety Hack is an open-source application designed to teach individuals how to create software using Ruby. It combines an integrated development environment with an extensive lesson system, allowing users to learn programming in an engaging and interactive way. Although it does not have university affiliation like Scratch and Alice, it offers a nimble, fully open-source alternative that emphasizes simplicity and ease of use.",
      keywords: ["beginner programming", "hackety hack", "programming education", "ruby", "shoes toolkit", "software development learning"],
      websites: [
        {
          title: "hacketyhack/hacketyhack: the coder’s starter kit: sound, animation, video, messaging in a low-key ruby environment.",
          href: "https://github.com/hacketyhack/hacketyhack",
          kind: "repository",
        },
        { title: "Hackety Hack - Wikipedia", href: "https://en.wikipedia.org/wiki/Hackety_Hack", kind: "wikipedia" },
      ],
      year: 2009,
      isMainstream: false,
      releases: [{ version: "1.0", name: "Hackety Hack 1.0", date: "2010-12-25" }],
    })
    .addInfluencedBy(["pl+ruby"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+educational", "paradigm+oo", "paradigm+oop", "paradigm+scripting"])
    .addPlatforms(["plat+apple", "plat+linux", "plat+windows"])
    .addTags(["tag+edu", "tag+interpreter", "tag+scripting", "tag+ui"])
    .addTypeSystems(["tsys+dynamic"])
    .addWrittenIn(["pl+ruby"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
