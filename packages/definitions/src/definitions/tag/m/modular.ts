import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+modular", {
    name: "Modular Music Software",
    description: "Software for creating and organizing music using modular components.",
    extHomeURL: "https://en.wikipedia.org/wiki/Modular_software_music_studio",
    keywords: ["modular music", "music studio", "synthesizers"],
  });
}
