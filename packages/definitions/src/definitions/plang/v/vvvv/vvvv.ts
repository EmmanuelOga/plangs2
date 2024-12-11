import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+vvvv", {
      name: "vvvv",
      description:
        'vvvv (German pronunciation: [faʊfiːɐ̯] = "Vau Vier" or "v4") is a digital general-purpose toolkit with a special focus on real-time video synthesis and programming large media environments with physical interfaces, real-time motion graphics, audio, and video. vvvv uses a dataflow approach and a visual programming interface for rapid prototyping and development. Applications written in vvvv are commonly called patches. Patches consist of a network of vertices and can be created, edited, and tested while they are running. Patches are stored on disk in standard XML format. vvvv is written in Borland Delphi, and plugins can be developed in the .NET Framework in C#.',
      keywords: ["dataflow", "media environments", "real-time video synthesis", "visual programming", "vvvv"],
      extWikipediaPath: "Vvvv",
      extHomeURL: "http://www.vvvv.org/",
      created: "1998",
    })
    .relInfluencedBy.add("pl+apl", "pl+max-msp")
    .relParadigms.add("para+dataflow", "para+multi", "para+visual")
    .relPlatforms.add("plat+windows")
    .relTags.add(
      "tag+3dg",
      "tag+app",
      "tag+audio-dev",
      "tag+dataflow",
      "tag+flow",
      "tag+framework",
      "tag+gui",
      "tag+multimedia",
      "tag+ray-tracer",
      "tag+video",
    )
    .relTypeSystems.add("tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
