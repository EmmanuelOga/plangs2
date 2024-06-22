import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+mingw", "MinGW", {
    websites: [{ kind: "wikipedia", title: "MinGW", href: "https://en.wikipedia.org/wiki/MinGW" }],
  });

  /**/

  lb.define("platf+mips", "MIPS", {
    websites: [
      { kind: "wikipedia", title: "MIPS, MIPS64el, MIPSel", href: "https://en.wikipedia.org/wiki/MIPS_architecture" },
    ],
  });

  /**/

  lb.define("platf+mono", "Mono", {
    websites: [{ kind: "wikipedia", title: "Mono", href: "https://en.wikipedia.org/wiki/Mono_(software)" }],
  });

  /**/

  lb.define("platf+mos_6502", "MOS Technology 6502", {
    websites: [
      { kind: "wikipedia", title: "MOS Technology 6502", href: "https://en.wikipedia.org/wiki/MOS_Technology_6502" },
    ],
  });

  /**/
}
