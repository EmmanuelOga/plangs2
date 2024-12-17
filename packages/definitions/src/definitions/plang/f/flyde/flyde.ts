import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+flyde", {
      name: "Flyde",
      description:
        "Visual programming language that integrates seamlessly with TypeScript code and is designed for developers. It allows users to visualize data flows and understand complex logic intuitively, providing a functional-reactive foundation for workflows and programming tasks.",
      shortDesc: "Visual language for intuitive data flow and TypeScript integration.",
      created: "2023",
      extensions: [".flyde"],
      extGithubPath: "flydelabs/flyde",
      extHomeURL: "https://www.flyde.dev/",
      filenames: ["beep.flyde", "debounce.flyde", "hello.flyde", "http.flyde"],
      githubStars: 2000,
      isTranspiler: false,
      keywords: ["flyde", "open-source", "typescript", "visual", "workflow"],
    })
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+declarative", "para+frp", "para+visual")
    .relPlatforms.add("plat+nodejs", "plat+web")
    .relTags.add("tag+automation", "tag+low-code", "tag+workflow");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
