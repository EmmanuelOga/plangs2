import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+ironpython", {
      name: "IronPython",
      description:
        "IronPython is an open-source implementation of Python, designed to work seamlessly with the .NET and Mono frameworks, allowing for the integration of .NET libraries within Python code. It provides a bridge between Python scripting and the .NET runtime, enabling developers to leverage .NET's extensive libraries.",
      keywords: ["ironpython", "python"],
      extensions: [".py", ".pyi"],
      releases: [{ version: "3.4.1", name: "3.4.1", date: "2023-07-12" }],
      extWikipediaPath: "IronPython",
      extHomeURL: "https://ironpython.net/",
      created: "2006",
      isTranspiler: false,
      shortDesc: "IronPython is an open-source implementation of Python for the .NET framework.",
      githubStars: 2500,
      extGithubPath: "IronLanguages/ironpython3",
    })
    .relImplements.add("pl+python")
    .relInfluencedBy.add("pl+.net", "pl+c-sharp")
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+imperative", "para+multi", "para+oop", "para+scripting")
    .relPlatforms.add("plat+.net", "plat+apple", "plat+linux", "plat+windows")
    .relTags.add("tag+app", "tag+cli", "tag+compiler", "tag+framework", "tag+interpreters", "tag+scripting", "tag+shell")
    .relTypeSystems.add("tsys+duck", "tsys+dynamic", "tsys+strong")
    .relWrittenWith.add("pl+c-sharp");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
