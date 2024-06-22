import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+aarch64", "AArch64", {
    websites: [
      { kind: "wikipedia", title: "Aarch64", href: "https://en.wikipedia.org/wiki/Aarch64" },
      { kind: "wikipedia", title: "AArch64", href: "https://en.wikipedia.org/wiki/AArch64" },
    ],
  });

  /**/

  lb.define("platf+amazon_firetv", "Amazon Fire TV", {
    websites: [{ kind: "wikipedia", title: "Amazon Fire TV", href: "https://en.wikipedia.org/wiki/Amazon_Fire_TV" }],
  });

  /**/

  lb.define("platf+amd", "AMD", {
    websites: [{ kind: "wikipedia", title: "AMD", href: "https://en.wikipedia.org/wiki/Advanced_Micro_Devices" }],
  });

  /**/

  lb.define("platf+amd64", "AMD64", {
    websites: [{ kind: "wikipedia", title: "AMD64", href: "https://en.wikipedia.org/wiki/AMD64" }],
  });

  /**/

  lb.define("platf+amd_am2900", "2901", {
    websites: [{ kind: "wikipedia", title: "2901", href: "https://en.wikipedia.org/wiki/AMD_Am2900" }],
  });

  /**/

  lb.define("platf+amiga", "Amiga", {
    websites: [
      { kind: "wikipedia", title: "AmigaOS", href: "https://en.wikipedia.org/wiki/AmigaOS" },
      { kind: "wikipedia", title: "Amiga", href: "https://en.wikipedia.org/wiki/Amiga" },
    ],
  });

  /**/

  lb.define("platf+apple_ios", "iOS", {
    websites: [{ kind: "wikipedia", title: "iOS", href: "https://en.wikipedia.org/wiki/Apple_iOS" }],
  });

  /**/

  lb.define("platf+arcaos", "ArcaOS", {
    websites: [{ kind: "wikipedia", title: "ArcaOS", href: "https://en.wikipedia.org/wiki/ArcaOS" }],
  });

  /**/

  lb.define("platf+arduino", "Arduino", {
    websites: [{ kind: "wikipedia", title: "Arduino", href: "https://en.wikipedia.org/wiki/Arduino" }],
  });

  /**/

  lb.define("platf+axiom", "Axiom computer algebra system", {
    websites: [
      {
        kind: "wikipedia",
        title: "Axiom computer algebra system",
        href: "https://en.wikipedia.org/wiki/Axiom_(computer_algebra_system)",
      },
    ],
  });

  /**/
}
