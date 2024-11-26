import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+hackety-hack", {
      name: "Hackety Hack",
      description:
        "Hackety Hack is an open-source application designed to teach individuals how to create software using Ruby. It combines an integrated development environment with an extensive lesson system, allowing users to learn programming in an engaging and interactive way. Although it does not have university affiliation like Scratch and Alice, it offers a nimble, fully open-source alternative that emphasizes simplicity and ease of use.",
      keywords: ["beginner programming", "hackety hack", "programming education", "ruby", "shoes toolkit", "software development learning"],
      releases: [{ version: "1.0", name: "Hackety Hack 1.0", date: "2010-12-25" }],
      extGithubPath: "hacketyhack/hacketyhack",
      extWikipediaPath: "Hackety_Hack",
      created: "2009",
    })
    .relInfluence.add(["pl+ruby"])
    .relLicense.add(["lic+mit"])
    .relParadigm.add(["para+educational", "para+oop", "para+scripting"])
    .relPlatform.add(["plat+apple", "plat+linux", "plat+windows"])
    .relTag.add(["tag+edu", "tag+interpreters", "tag+scripting", "tag+ui"])
    .relTypeSystem.add(["tsys+dynamic"])
    .relWrittenInPlang.add(["pl+ruby"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
