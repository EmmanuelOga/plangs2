import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  //-------------------------------------------------------------------------------

  lb.define("platf+centos", "CentOS", {
    websites: [{ kind: "wikipedia", title: "CentOS", href: "https://en.wikipedia.org/wiki/CentOS" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("platf+chromeos", "ChromeOS", {
    websites: [{ kind: "wikipedia", title: "ChromeOS", href: "https://en.wikipedia.org/wiki/ChromeOS" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("platf+commodore", "Commodore 128", {
    websites: [
      { kind: "wikipedia", title: "PET", href: "https://en.wikipedia.org/wiki/Commodore_PET" },
      { kind: "wikipedia", title: "Commodore 128", href: "https://en.wikipedia.org/wiki/Commodore_128" },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("platf+cuda", "CUDA", {
    websites: [{ kind: "wikipedia", title: "CUDA", href: "https://en.wikipedia.org/wiki/CUDA" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("platf+cygwin", "Cygwin", {
    websites: [{ kind: "wikipedia", title: "Cygwin", href: "https://en.wikipedia.org/wiki/Cygwin" }],
  });
}
