import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+vvvv", {
      name: "vvvv",
      description:
        'vvvv (German pronunciation: [faʊfiːɐ̯] = "Vau Vier" or "v4") is a digital general-purpose toolkit with a special focus on real-time video synthesis and programming large media environments with physical interfaces, real-time motion graphics, audio, and video. vvvv uses a dataflow approach and a visual programming interface for rapid prototyping and development. Applications written in vvvv are commonly called patches. Patches consist of a network of nodes and can be created, edited, and tested while they are running. Patches are stored on disk in standard XML format. vvvv is written in Borland Delphi, and plugins can be developed in the .NET Framework in C#.',
      keywords: ["dataflow", "media environments", "real-time video synthesis", "visual programming", "vvvv"],
      year: 1998,
      isMainstream: false,
      extWikipediaPath: "Vvvv",
      extHomeURL: "http://www.vvvv.org/",
    })
    .addInfluencedBy(["pl+apl", "pl+max-msp"])
    .addParadigms(["paradigm+dataflow", "paradigm+multi", "paradigm+visual"])
    .addPlatforms(["plat+windows"])
    .addTags([
      "tag+3dg",
      "tag+app",
      "tag+audio-dev",
      "tag+dataflow",
      "tag+flow",
      "tag+framework",
      "tag+multimedia",
      "tag+ray-tracer",
      "tag+ui",
      "tag+video",
    ])
    .addTypeSystems(["tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}