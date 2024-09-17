import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+csound", {
      name: "Csound",
      description:
        "Csound is a domain-specific computer programming language for audio programming. It is called Csound because it is written in C, as opposed to some of its predecessors.",
      websites: [
        { href: "http://csound.com/", title: "csound.com", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Csound", title: "Csound", kind: "wikipedia" },
      ],
      releases: [{ version: "6.18.1", date: "2022-01-01" }],
    })
    .addLicenses(["license+lgpl"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+audio-dev", "tag+industrial", "tag+interpreter", "tag+midi", "tag+testing"])
    .addWrittenIn(["pl+c"]);
}
