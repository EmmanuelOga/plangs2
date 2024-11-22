import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+xojo", {
      name: "Xojo",
      description:
        "Xojo is a cross-platform development tool that allows users to develop applications for macOS, Windows, Linux, web, iOS, Android, and Raspberry Pi using a proprietary object-oriented language. Developed by Xojo, Inc., it provides an easy-to-use drag-and-drop interface for building native applications across multiple platforms.",
      keywords: ["app development", "cross-platform", "freemium", "object-oriented", "xojo"],
      extensions: [".xojo_binary_project", ".xojo_code", ".xojo_xml_project"],
      releases: [
        { version: "2023R3.1", name: "Xojo 2023 Release 3.1", date: "2023-10-25" },
        { version: "3.1", name: "Xojo 3.1", date: "2023-01-01" },
      ],
      stackovTags: ["realbasic", "xojo"],
      githubName: "Xojo",
      languishRanking: 386,
      githubLangId: "405",
      githubColor: "#81bd41",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Xojo",
      extRedditPath: "xojo",
      extHomeURL: "http://xojo.com/",
      created: "1996",
    })
    .relImplements.add(["pl+basic"])
    .relInfluencedBy.add(["pl+basic", "pl+visual-basic"])
    .relParadigms.add(["paradigm+multi", "paradigm+oop", "paradigm+visual"])
    .relPlatforms.add(["plat+android", "plat+apple", "plat+cross", "plat+linux", "plat+raspberry", "plat+web", "plat+windows"])
    .relTags.add(["tag+app", "tag+dbms", "tag+editor", "tag+framework", "tag+industrial", "tag+interpreters", "tag+rad", "tag+ui"])
    .relTsys.add(["tsys+object", "tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
