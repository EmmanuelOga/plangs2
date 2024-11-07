import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+vvvv", {
      name: "vvvv",
      description:
        'vvvv (German pronunciation: [faʊfiːɐ̯] = "Vau Vier" or "v4") is a digital general-purpose toolkit with a special focus on real-time video synthesis and programming large media environments with physical interfaces, real-time motion graphics, audio, and video. vvvv uses a dataflow approach and a visual programming interface for rapid prototyping and developing. Applications written in vvvv are commonly called patches. Patches consist of a network of nodes and can be created, edited, and tested while they are running. Patches are stored on disk in standard XML format. vvvv is written in Borland Delphi, and plugins can be developed in the .NET Framework in C#.',
      keywords: ["vvvv", "visual programming", "real-time video synthesis", "media environments", "dataflow"],
      websites: [
        { title: "vvvv", href: "http://www.vvvv.org/", kind: "homepage" },
        { title: "vvvv", href: "https://en.wikipedia.org/wiki/Vvvv", kind: "wikipedia" },
      ],
      year: 2002,
      isTranspiler: false,
      isMainstream: false,
    })
    .addInfluencedBy(["pl+apl", "pl+max-msp"])
    .addParadigms(["paradigm+dataflow", "paradigm+multi", "paradigm+visual"])
    .addPlatforms(["plat+windows"])
    .addTags(["tag+3dg", "tag+app", "tag+audio-dev", "tag+dataflow", "tag+flow", "tag+framework", "tag+multimedia", "tag+ray-tracer", "tag+ui"])
    .addTypeSystems(["tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
