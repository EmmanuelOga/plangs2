import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  //-------------------------------------------------------------------------------

  lb.define("platf+z-slashos", "z/OS", {
    websites: [{ kind: "wikipedia", title: "z/OS", href: "https://en.wikipedia.org/wiki/Z/OS" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("platf+z-slashvm", "z/VM", {
    websites: [{ kind: "wikipedia", title: "z/VM", href: "https://en.wikipedia.org/wiki/Z/VM" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("platf+zephyr", "Zephyr", {
    websites: [{ kind: "wikipedia", title: "Zephyr", href: "https://en.wikipedia.org/wiki/Zephyr_(operating_system)" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("platf+zilog_z80", "Zilog Z80", {
    websites: [{ kind: "wikipedia", title: "Zilog Z80", href: "https://en.wikipedia.org/wiki/Zilog_Z80" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("platf+zx80", "ZX80", {
    websites: [{ kind: "wikipedia", title: "ZX80", href: "https://en.wikipedia.org/wiki/ZX80" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("platf+zx81", "ZX81", {
    websites: [{ kind: "wikipedia", title: "ZX81", href: "https://en.wikipedia.org/wiki/ZX81" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("platf+zx_spectrum", "ZX Spectrum, +, 128, +2, +3", {
    websites: [
      { kind: "wikipedia", title: "ZX Spectrum, +, 128, +2, +3", href: "https://en.wikipedia.org/wiki/ZX_Spectrum" },
    ],
  });
}
