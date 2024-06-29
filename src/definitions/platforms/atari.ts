import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+atari", "Atari 8-bit", {
    websites: [
      { kind: "wikipedia", title: "Atari TOS", href: "https://en.wikipedia.org/wiki/Atari_TOS" },
      {
        kind: "wikipedia",
        title: "Atari 8-bit computers",
        href: "https://en.wikipedia.org/wiki/Atari_8-bit_computers",
      },
      { kind: "wikipedia", title: "GEMDOS", href: "https://en.wikipedia.org/wiki/Atari_ST#Operating_system" },
      { kind: "wikipedia", title: "Atari 8-bit", href: "https://en.wikipedia.org/wiki/Atari_8-bit" },
    ],
  });
}
