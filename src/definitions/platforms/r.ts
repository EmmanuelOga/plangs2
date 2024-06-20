import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+red_hat", "Red Hat", [
    { kind: "wikipedia", title: "Red Hat", href: "https://en.wikipedia.org/wiki/Red_Hat" },
  ]);

  lb.define("platf+risc_os", "RISC OS", [
    { kind: "wikipedia", title: "RISC OS", href: "https://en.wikipedia.org/wiki/RISC_OS" },
  ]);

  lb.define("platf+risc-v", "RISC-V", [
    { kind: "wikipedia", title: "RISC-V", href: "https://en.wikipedia.org/wiki/RISC-V" },
  ]);

  lb.define("platf+rocm", "ROCm", [
    { kind: "wikipedia", title: "ROCm", href: "https://en.wikipedia.org/wiki/ROCm" },
  ]);

  lb.define("platf+rp2040", "RP2040", [
    { kind: "wikipedia", title: "RP2040", href: "https://en.wikipedia.org/wiki/RP2040" },
  ]);

  lb.define("platf+rpi", "Raspberry Pi OS", [
    {
      kind: "wikipedia",
      title: "Raspberry Pi",
      href: "https://en.wikipedia.org/wiki/Raspberry_Pi",
    },
    {
      kind: "wikipedia",
      title: "Raspberry Pi OS",
      href: "https://en.wikipedia.org/wiki/Raspberry_Pi_OS",
    },
  ]);
}
