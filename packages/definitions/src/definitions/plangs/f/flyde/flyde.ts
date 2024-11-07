import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+flyde", {
      name: "Flyde",
      description:
        "Flyde is a visual programming language designed to build and manage complex workflows easily. It is aimed at enhancing the development process by utilizing a visual interface for coding, assisting users in strategy development, logic sequencing, and overall workflow optimization.",
      keywords: ["flyde", "visual", "workflow"],
      websites: [{ title: "Flyde", href: "https://www.flyde.dev/", kind: "homepage" }],
      images: [{ kind: "logo", title: "Flyde Logo", url: "https://www.flyde.dev/img/flyde_icon.png", width: 512, height: 512 }],
    })
    .addParadigms(["paradigm+declarative", "paradigm+visual", "paradigm+workflow"])
    .addPlatforms(["plat+web"])
    .addTags(["tag+automation", "tag+low-code", "tag+workflow"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
