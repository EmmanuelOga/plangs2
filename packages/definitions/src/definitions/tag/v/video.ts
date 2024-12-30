import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+video", {
    name: "Video",
    description: "Software used to edit video footage and produce multimedia projects.",
    extHomeURL: "https://en.wikipedia.org/wiki/Video_editing_software",
    keywords: ["multimedia", "video editor", "video production"],
  });
}
