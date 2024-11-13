import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+flyde", {
      name: "Flyde",
      description:
        "Flyde is an open-source visual programming language that integrates seamlessly with TypeScript code and is designed for developers. It allows users to visualize data flows and understand complex logic intuitively, providing a functional-reactive foundation for workflows and programming tasks.",
      keywords: ["flyde", "open-source", "typescript", "visual", "workflow"],
      websites: [{ title: "Flyde | Visual Programming. For Developers.", href: "https://www.flyde.dev/", kind: "homepage" }],
      images: [{ kind: "logo", title: "Flyde Logo", url: "https://www.flyde.dev/img/flyde_icon.png", width: 512, height: 512 }],
      extensions: [".flyde"],
      filenames: ["beep.flyde", "debounce.flyde", "hello.flyde", "http.flyde"],
      year: 2023,
      isMainstream: false,
    })
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+declarative", "paradigm+frp", "paradigm+visual", "paradigm+workflow"])
    .addPlatforms(["plat+nodejs", "plat+web"])
    .addTags(["tag+automation", "tag+low-code", "tag+workflow"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
