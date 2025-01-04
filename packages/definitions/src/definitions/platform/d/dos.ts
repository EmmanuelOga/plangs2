import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.platform.set("plat+dos", {
    name: "DOS",
    description:
      "Disk Operating System (DOS) refers to a family of operating systems primarily for IBM PCs, known for its command-line interface.",
    extHomeURL: "https://en.wikipedia.org/wiki/MS-DOS",
    keywords: ["dos", "ms-dos", "pc-dos"],
  });
}
