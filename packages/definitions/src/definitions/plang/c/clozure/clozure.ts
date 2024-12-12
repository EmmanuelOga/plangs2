import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+clozure", {
      name: "Clozure CL",
      description:
        "Clozure CL (often abbreviated as CCL) is a free implementation of Common Lisp, providing a complete ANSI Common Lisp standard with various extensions such as CLOS MOP, threads, and streams. It includes a command-line development environment and an IDE for macOS using the Hemlock editor, delivering fast compilation, native threads, and a garbage collector. It is open-source, maintained by Clozure Associates.",
      keywords: ["ccl", "clozure", "common lisp"],
      extensions: [".cl", ".lisp"],
      releases: [{ version: "1.12.2", name: "Clozure CL 1.12.2", date: "2023-08-08" }],
      extWikipediaPath: "Clozure_CL",
      extHomeURL: "http://ccl.clozure.com/",
      created: "2000",
      isTranspiler: false,
      shortDesc: "Clozure CL is a free Common Lisp implementation offering full ANSI compliance and several extensions.",
      githubStars: 858,
      extGithubPath: "Clozure/ccl",
      ghRepoCreated: "2008-11-14",
    })
    .relImplements.add("pl+common-lisp")
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+functional", "para+multi", "para+oop")
    .relPlatforms.add("plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+compiler", "tag+editor")
    .relTypeSystems.add("tsys+dynamic")
    .relWrittenWith.add("pl+c");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
