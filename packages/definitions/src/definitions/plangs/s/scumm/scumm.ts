import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+scumm", {
      name: "Script Creation Utility for Maniac Mansion",
      description:
        "Script Creation Utility for Maniac Mansion (SCUMM) is a video game engine developed at Lucasfilm Games, later renamed LucasArts, to ease development on their graphic adventure game Maniac Mansion (1987). It was subsequently used as the engine for later LucasArts adventure games and Humongous Entertainment games.",
      keywords: ["scumm", "lucasarts", "video game engine", "maniac mansion"],
      websites: [{ title: "Script Creation Utility for Maniac Mansion", href: "https://en.wikipedia.org/wiki/SCUMM", kind: "wikipedia" }],
      year: 1987,
      isTranspiler: false,
      isMainstream: false,
    })
    .addParadigms(["paradigm+dsl", "paradigm+scripting"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+games", "tag+interpreter", "tag+scripting"])
    .addTypeSystems(["tsys+untyped"]);
}
