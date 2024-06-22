import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+red_hat", "Red Hat", {
    websites: [{ kind: "wikipedia", title: "Red Hat", href: "https://en.wikipedia.org/wiki/Red_Hat" }],
  });

  /**/

  lb.define("platf+risc-v", "RISC-V", {
    websites: [{ kind: "wikipedia", title: "RISC-V", href: "https://en.wikipedia.org/wiki/RISC-V" }],
  });

  /**/

  lb.define("platf+risc_os", "RISC OS", {
    websites: [{ kind: "wikipedia", title: "RISC OS", href: "https://en.wikipedia.org/wiki/RISC_OS" }],
  });

  /**/

  lb.define("platf+rocm", "ROCm", {
    websites: [{ kind: "wikipedia", title: "ROCm", href: "https://en.wikipedia.org/wiki/ROCm" }],
  });

  /**/

  lb.define("platf+rp2040", "RP2040", {
    websites: [{ kind: "wikipedia", title: "RP2040", href: "https://en.wikipedia.org/wiki/RP2040" }],
  });

  /**/

  lb.define("platf+rpi", "Raspberry Pi OS", {
    websites: [
      { kind: "wikipedia", title: "Raspberry Pi", href: "https://en.wikipedia.org/wiki/Raspberry_Pi" },
      { kind: "wikipedia", title: "Raspberry Pi OS", href: "https://en.wikipedia.org/wiki/Raspberry_Pi_OS" },
    ],
  });

  /**/
}
