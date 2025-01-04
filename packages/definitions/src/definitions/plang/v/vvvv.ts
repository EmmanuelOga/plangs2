import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+vvvv", {
      name: "vvvv",
      description:
        "Visual programming environment designed for creating and implementing complex media installations, allowing developers to create applications using video, audio, and interaction design in real-time. It features a node-based dataflow approach for rapid prototyping, suitable for designers and developers working with physical computing and multimedia applications.",
      shortDesc:
        "Visual programming platform for multimedia applications with a focus on real-time interaction.",
      created: "1998",
      extGithubPath: "vvvv/vvvv-sdk",
      extHomeURL: "https://vvvv.org/",
      extWikipediaPath: "Vvvv",
      githubStars: 234,
      isTranspiler: false,
      keywords: [
        "dataflow",
        "media applications",
        "real-time interaction",
        "visual programming",
        "vvvv",
      ],
      releases: [{ version: "beta40", name: "beta40", date: "2020-12-01" }],
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
    .relTypeSystems.add("tsys+dynamic", "tsys+strong")
    .relWrittenWith.add("pl+c-sharp");
}
