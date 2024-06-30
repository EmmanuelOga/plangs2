import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+win", {
    name: "Windows",
    websites: [
      { kind: "wikipedia", title: "Windows", href: "https://en.wikipedia.org/wiki/Microsoft_Windows" },
      { kind: "wikipedia", title: "Windows", href: "https://en.wikipedia.org/wiki/Windows" },
      { kind: "wikipedia", title: "Windows XP SP3", href: "https://en.wikipedia.org/wiki/Windows_XP_SP3" },
      { kind: "wikipedia", title: "Windows Server 2003", href: "https://en.wikipedia.org/wiki/Windows_Server_2003" },
      { kind: "wikipedia", title: "Windows XP", href: "https://en.wikipedia.org/wiki/Windows_XP" },
      { kind: "wikipedia", title: "Windows Vista", href: "https://en.wikipedia.org/wiki/Windows_Vista" },
      { kind: "wikipedia", title: "Windows Server 2008", href: "https://en.wikipedia.org/wiki/Windows_Server_2008" },
      { kind: "wikipedia", title: "Windows 7", href: "https://en.wikipedia.org/wiki/Windows_7" },
      { kind: "wikipedia", title: "Windows 10", href: "https://en.wikipedia.org/wiki/Windows_10" },
      { kind: "wikipedia", title: "WSL", href: "https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux" },
      { kind: "wikipedia", title: "Windows", href: "https://en.wikipedia.org/wiki/Windows_(operating_system)" },
      { kind: "wikipedia", title: "Windows 8", href: "https://en.wikipedia.org/wiki/Windows_8" },
      { kind: "wikipedia", title: "Windows 8.1", href: "https://en.wikipedia.org/wiki/Windows_8.1" },
      {
        kind: "wikipedia",
        title: "Windows Server 2008 R2",
        href: "https://en.wikipedia.org/wiki/Windows_Server_2008_R2",
      },
      { kind: "wikipedia", title: "Windows 95", href: "https://en.wikipedia.org/wiki/Windows_95" },
      { kind: "wikipedia", title: "Windows 98", href: "https://en.wikipedia.org/wiki/Windows_98" },
      { kind: "wikipedia", title: "Windows Me", href: "https://en.wikipedia.org/wiki/Windows_Me" },
    ],
  });
}
