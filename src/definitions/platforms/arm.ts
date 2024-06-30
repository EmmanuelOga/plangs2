import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlatform("platf+aarch64").merge({
    name: "ARM64",
    websites: [{ kind: "wikipedia", title: "AArch64", href: "https://en.wikipedia.org/wiki/AArch64" }],
  });

  /**/
  g.buildPlatform("platf+arm").merge({
    name: "ARM",
    websites: [
      { kind: "wikipedia", title: "ARM", href: "https://en.wikipedia.org/wiki/ARM_architecture" },
      { kind: "wikipedia", title: "ARMv7", href: "https://en.wikipedia.org/wiki/ARMv7" },
      {
        kind: "wikipedia",
        title: "armhf",
        href: "https://en.wikipedia.org/wiki/ARM_architecture#Floating-point_(VFP)",
      },
      { kind: "wikipedia", title: "64-bit Arm", href: "https://en.wikipedia.org/wiki/Armv8" },
      { kind: "wikipedia", title: "Arm", href: "https://en.wikipedia.org/wiki/ARM_architecture_family" },
      { kind: "wikipedia", title: "ARM64", href: "https://en.wikipedia.org/wiki/ARM64" },
      { kind: "wikipedia", title: "ARM Cortex-M", href: "https://en.wikipedia.org/wiki/ARM_Cortex-M" },
      { kind: "wikipedia", title: "StrongARM", href: "https://en.wikipedia.org/wiki/StrongARM" },
      { kind: "wikipedia", title: "ARM32", href: "https://en.wikipedia.org/wiki/ARM32" },
    ],
  });

  /**/
}
