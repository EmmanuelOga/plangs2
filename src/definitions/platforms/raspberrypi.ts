import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+rp2040", {
    name: "RP2040",
    websites: [{ kind: "wikipedia", title: "RP2040", href: "https://en.wikipedia.org/wiki/RP2040" }],
  });

  lb.define("platf+rpi", {
    name: "Raspberry Pi",
    websites: [
      { kind: "wikipedia", title: "Raspberry Pi", href: "https://en.wikipedia.org/wiki/Raspberry_Pi" },
      { kind: "wikipedia", title: "Raspberry Pi OS", href: "https://en.wikipedia.org/wiki/Raspberry_Pi_OS" },
    ],
  });
}
