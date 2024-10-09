import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+sed", {
      name: "sed",
      description:
        'sed ("stream editor") is a Unix utility that parses and transforms text, using a simple, compact programming language. It was developed in the early 1970s by Lee E. McMahon of Bell Labs, and is available today for most operating systems. sed was based on the scripting features of the interactive editor ed ("editor", 1971) and the earlier qed ("quick editor", 1965–66). It was one of the earliest tools to support regular expressions, and remains widely used for text processing, most notably with the substitution command. Popular alternative tools for plaintext string manipulation and "stream editing" include AWK and Perl.',
      keywords: ["sed", "stream editor"],
      websites: [{ title: "sed", href: "https://en.wikipedia.org/wiki/Sed", kind: "wikipedia" }],
      extensions: [".sed"],
      firstAppeared: "1974-01-01",
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "1.0", name: "Initial Version", date: "1974-01-01" }],
    })
    .addInfluencedBy(["pl+ed"])
    .addLicenses(["license+public-domain"])
    .addParadigms(["paradigm+procedural", "paradigm+scripting"])
    .addPlatforms(["plat+bsd", "plat+cross", "plat+linux"])
    .addTags(["tag+cli", "tag+editor", "tag+scripting", "tag+shell"])
    .addTypeSystems(["tsys+untyped"])
    .addWrittenIn(["pl+c"]);
}
