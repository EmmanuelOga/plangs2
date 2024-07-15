import type { PlangsGraph } from "../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlatform("platf+rp2040").merge({
    name: "RP2040",
    websites: [{ kind: "wikipedia", title: "RP2040", href: "https://en.wikipedia.org/wiki/RP2040" }],
  });

  /**/

  g.buildPlatform("platf+rpi").merge({
    name: "Raspberry Pi",
    websites: [
      { kind: "wikipedia", title: "Raspberry Pi", href: "https://en.wikipedia.org/wiki/Raspberry_Pi" },
      { kind: "wikipedia", title: "Raspberry Pi OS", href: "https://en.wikipedia.org/wiki/Raspberry_Pi_OS" },
    ],
  });

  /**/
}
