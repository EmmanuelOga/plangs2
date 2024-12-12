import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+xproc", {
      name: "XProc",
      description:
        "XProc is an XML transformation language for processing documents in pipelines: chaining conversions and other steps together to achieve the desired results. It can handle documents in XML, HTML, JSON, text and binary data seamlessly.",
      keywords: ["pipeline", "transformation", "xml", "xproc", "xproc 3.0"],
      extensions: [".xpl"],
      releases: [
        { version: "1.0", name: "XProc 1.0", date: "2010-05-11" },
        { version: "3.0", name: "XProc 3.0", date: "2020-08-18" },
      ],
      stackovTags: ["xproc"],
      githubName: "XProc",
      languishRanking: 371,
      githubLangId: "401",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "XProc",
      extHomeURL: "https://xproc.org/",
      created: "2010",
      isTranspiler: false,
      shortDesc: "XProc is an XML transformation language for processing documents in pipelines.",
    })
    .relInfluencedBy.add("pl+xml")
    .relParadigms.add("para+declarative", "para+dsl", "para+pipeline")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+dataflow", "tag+workflow")
    .relTypeSystems.add("tsys+dynamic");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
