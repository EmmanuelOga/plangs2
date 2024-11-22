import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+flyde", {
      name: "Flyde",
      description:
        "Flyde is an open-source visual programming language that integrates seamlessly with TypeScript code and is designed for developers. It allows users to visualize data flows and understand complex logic intuitively, providing a functional-reactive foundation for workflows and programming tasks.",
      keywords: ["flyde", "open-source", "typescript", "visual", "workflow"],
      extensions: [".flyde"],
      filenames: ["beep.flyde", "debounce.flyde", "hello.flyde", "http.flyde"],
      extHomeURL: "https://www.flyde.dev/",
      created: "2023",
    })
    .relLicenses.add(["license+mit"])
    .relParadigms.add(["paradigm+declarative", "paradigm+frp", "paradigm+visual"])
    .relPlatforms.add(["plat+nodejs", "plat+web"])
    .relTags.add(["tag+automation", "tag+low-code", "tag+workflow"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
