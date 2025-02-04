import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+xproc", {
      name: "XProc",
      description:
        "XML transformation language for processing documents in pipelines: chaining conversions and other steps together to achieve the desired results. It can handle documents in XML, HTML, JSON, text and binary data seamlessly.",
      shortDesc:
        "XML transformation language for processing documents in pipelines.",
      created: "2010",
      extensions: [".xpl"],
      extHomeURL: "https://xproc.org/",
      extWikipediaPath: "XProc",
      githubLangId: "401",
      githubName: "XProc",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["pipeline", "transformation", "xml", "xproc", "xproc 3.0"],
      languishRanking: 314,
      releases: [
        { version: "1.0", name: "XProc 1.0", date: "2010-05-11" },
        { version: "3.0", name: "XProc 3.0", date: "2020-08-18" },
      ],
      stackovTags: ["xproc"],
    })
    .relInfluencedBy.add("pl+xml")
    .relParadigms.add(
      "para+declarative",
      "para+dsl",
      "para+pattern-matching",
      "para+pipeline",
    )
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+dataflow", "tag+workflow")
    .relTypeSystems.add("tsys+dynamic");
}
