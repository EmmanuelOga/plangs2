import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  //-------------------------------------------------------------------------------

  lb.define("platf+linux", "Linux", [
    { kind: "wikipedia", title: "Linux", href: "https://en.wikipedia.org/wiki/Linux" },
    { kind: "wikipedia", title: "Ubuntu", href: "https://en.wikipedia.org/wiki/Ubuntu_(operating_system)" },
    { kind: "wikipedia", title: "WSL", href: "https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux" },
    { kind: "wikipedia", title: "Debian", href: "https://en.wikipedia.org/wiki/Debian" },
    {
      kind: "wikipedia",
      title: "Red Hat Enterprise Linux",
      href: "https://en.wikipedia.org/wiki/Red_Hat_Enterprise_Linux",
    },
    { kind: "wikipedia", title: "openSUSE", href: "https://en.wikipedia.org/wiki/OpenSUSE" },
    { kind: "wikipedia", title: "Fedora", href: "https://en.wikipedia.org/wiki/Fedora_(operating_system)" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("platf+llvm", "LLVM", [{ kind: "wikipedia", title: "LLVM", href: "https://en.wikipedia.org/wiki/LLVM" }]);
}