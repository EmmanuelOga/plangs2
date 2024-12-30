import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+games", {
    name: "Games",
    description: "Software frameworks designed for the development and creation of video games.",
    extHomeURL: "https://en.wikipedia.org/wiki/Game_engine",
    keywords: ["game development", "game engine", "gamedev", "games"],
  });
}
