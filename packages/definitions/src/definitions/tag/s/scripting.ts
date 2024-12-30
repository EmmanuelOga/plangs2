import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+scripting", {
    name: "Scripting",
    description: "Language used to write commands for controlling a system or application.",
    extHomeURL: "https://en.wikipedia.org/wiki/Scripting_language",
    keywords: ["command language", "command-based language", "scripting", "scripting language"],
  });
}
