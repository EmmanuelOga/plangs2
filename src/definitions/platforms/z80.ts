import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+zilog-z80", "Zilog Z80", {
    websites: [{ kind: "wikipedia", title: "Zilog Z80", href: "https://en.wikipedia.org/wiki/Zilog_Z80" }],
  });

  /**/

  lb.define("platf+zx-spectrum", "ZX Spectrum, +, 128, +2, +3", {
    websites: [
      { kind: "wikipedia", title: "ZX Spectrum, +, 128, +2, +3", href: "https://en.wikipedia.org/wiki/ZX_Spectrum" },
    ],
  });

  /**/

  lb.define("platf+zx80", "ZX80", {
    websites: [{ kind: "wikipedia", title: "ZX80", href: "https://en.wikipedia.org/wiki/ZX80" }],
  });

  /**/

  lb.define("platf+zx81", "ZX81", {
    websites: [{ kind: "wikipedia", title: "ZX81", href: "https://en.wikipedia.org/wiki/ZX81" }],
  });

  /**/
}
