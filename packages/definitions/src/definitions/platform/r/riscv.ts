import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.platform.set("plat+riscv", {
    name: "RISC-V",
    description:
      "Open standard instruction set architecture (ISA) based on the reduced instruction set computer (RISC) principles.",
    extHomeURL: "https://en.wikipedia.org/wiki/RISC-V",
    keywords: ["open isa", "risc-v", "riscv"],
  });
}
