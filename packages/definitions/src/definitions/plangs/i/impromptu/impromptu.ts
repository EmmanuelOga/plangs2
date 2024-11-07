import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+impromptu", {
      name: "Impromptu",
      description:
        "Impromptu is a Mac OS X programming environment for live coding. It is built around the Scheme language, a member of the Lisp family. The language focuses on real-time audio-visual performance and has influenced the Extempore project.",
      keywords: ["impromptu", "live-coding", "scheme", "lisp"],
      websites: [
        { title: "impromptu.moso.com.au", href: "http://impromptu.moso.com.au/", kind: "homepage" },
        { title: "Impromptu", href: "https://en.wikipedia.org/wiki/Impromptu_(programming_environment)", kind: "wikipedia" },
      ],
      year: 2005,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "2.5" }],
    })
    .addInfluencedBy(["pl+lisp", "pl+scheme"])
    .addParadigms(["paradigm+event-driven", "paradigm+functional", "paradigm+multi"])
    .addPlatforms(["plat+apple"])
    .addTags(["tag+audio-dev", "tag+interpreter", "tag+multimedia", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
