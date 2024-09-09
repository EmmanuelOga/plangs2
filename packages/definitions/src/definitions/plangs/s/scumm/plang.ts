import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+scumm", {
      name: "Script Creation Utility for Maniac Mansion",
      description:
        "Script Creation Utility for Maniac Mansion (SCUMM) is a video game engine developed at Lucasfilm Games, later renamed LucasArts, to ease development on their graphic adventure game Maniac Mansion (1987). It was subsequently used as the engine for later LucasArts adventure games and Humongous Entertainment games.",
      firstAppeared: "1987-01-01",
      websites: [{ href: "https://en.wikipedia.org/wiki/SCUMM", title: "Script Creation Utility for Maniac Mansion", kind: "wikipedia" }],
      images: [{ kind: "other", title: "Script Creation Utility for Maniac Mansion", url: "/images/plangs/s/scumm/other.png" }],
    })
    .addPlatforms(["platf+cross"]);
}
