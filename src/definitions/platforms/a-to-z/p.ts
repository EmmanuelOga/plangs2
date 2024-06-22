import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  //-------------------------------------------------------------------------------

  lb.define("platf+pic", "PIC", {
    websites: [{ kind: "wikipedia", title: "PIC", href: "https://en.wikipedia.org/wiki/PIC_microcontrollers" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("platf+pip", "pip (package manager)", {
    websites: [
      {
        kind: "wikipedia",
        title: "pip (package manager)",
        href: "https://en.wikipedia.org/wiki/Pip_(package_manager)",
      },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("platf+posix", "POSIX", {
    websites: [{ kind: "wikipedia", title: "POSIX", href: "https://en.wikipedia.org/wiki/POSIX" }],
  });
}
