import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+xproc", {
      name: "XProc",
      description:
        "XProc is a W3C Recommendation to define an XML transformation language for specifying XML document pipelines. These pipelines automate the sequence of operations applied to XML documents, including validation, transformation, and aggregation.",
      keywords: ["xproc"],
      websites: [
        { title: "XProc", href: "https://en.wikipedia.org/wiki/XProc", kind: "wikipedia" },
        { title: "Official XProc Website", href: "https://xproc.org/", kind: "homepage" },
      ],
      extensions: [".xpl"],
      year: 2010,
      isTranspiler: false,
      isMainstream: false,
      releases: [
        { version: "1.0", name: "XProc 1.0", date: "2010-05-11" },
        { version: "3.0", name: "XProc 3.0", date: "2020-08-18" },
      ],
      github: { name: "XProc", langId: "401", popular: false, type: "programming" },
      stackovTags: ["xproc"],
      githubName: "XProc",
      languishRanking: 415,
    })
    .addInfluencedBy(["pl+xml"])
    .addParadigms(["paradigm+declarative", "paradigm+dsl", "paradigm+pipeline"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+dataflow", "tag+workflow"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
