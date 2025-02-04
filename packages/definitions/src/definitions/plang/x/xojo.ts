import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+xojo", {
      name: "Xojo",
      description:
        "Cross-platform development tool that allows users to develop applications for macOS, Windows, Linux, web, iOS, Android, and Raspberry Pi using a proprietary object-oriented language. Developed by Xojo, Inc., it provides an easy-to-use drag-and-drop interface for building native applications across multiple platforms.",
      shortDesc:
        "Cross-platform development tool and proprietary object-oriented programming language for building native applications.",
      created: "1996",
      extensions: [".xojo_binary_project", ".xojo_code", ".xojo_xml_project"],
      extHomeURL: "https://www.xojo.com",
      extRedditPath: "xojo",
      extWikipediaPath: "Xojo",
      githubColor: "#81bd41",
      githubLangId: "405",
      githubName: "Xojo",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: false,
      keywords: [
        "app development",
        "cross-platform",
        "freemium",
        "object-oriented",
        "xojo",
      ],
      releases: [
        {
          version: "2023R3.1",
          name: "Xojo 2023 Release 3.1",
          date: "2023-10-25",
        },
        { version: "3.1", name: "Xojo 3.1", date: "2023-01-01" },
      ],
      stackovTags: ["realbasic", "xojo"],
    })
    .relImplements.add("pl+basic")
    .relInfluencedBy.add("pl+basic", "pl+visual-basic")
    .relLicenses.add("lic+proprietary")
    .relParadigms.add(
      "para+general-purpose",
      "para+multi",
      "para+oop",
      "para+visual",
    )
    .relPlatforms.add(
      "plat+android",
      "plat+apple",
      "plat+cross",
      "plat+linux",
      "plat+raspberry",
      "plat+web",
      "plat+windows",
    )
    .relTags.add(
      "tag+app",
      "tag+dbms",
      "tag+editor",
      "tag+framework",
      "tag+gui",
      "tag+industrial",
      "tag+interpreters",
      "tag+rad",
    )
    .relTypeSystems.add("tsys+object", "tsys+static", "tsys+strong");
}
