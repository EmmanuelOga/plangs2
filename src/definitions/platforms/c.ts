import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+centos", "CentOS", [
    { kind: "wikipedia", title: "CentOS", href: "https://en.wikipedia.org/wiki/CentOS" },
  ]);

  lb.define("platf+chromeos", "ChromeOS", [
    { kind: "wikipedia", title: "ChromeOS", href: "https://en.wikipedia.org/wiki/ChromeOS" },
  ]);

  lb.define("platf+commodore", "Commodore 128", [
    { kind: "wikipedia", title: "PET", href: "https://en.wikipedia.org/wiki/Commodore_PET" },
    {
      kind: "wikipedia",
      title: "Commodore 128",
      href: "https://en.wikipedia.org/wiki/Commodore_128",
    },
  ]);

  lb.define("platf+cross-platform", "Cross-platform", [
    {
      kind: "wikipedia",
      title: "Cross-platform",
      href: "https://en.wikipedia.org/wiki/Cross-platform",
    },
    {
      kind: "wikipedia",
      title: "cross-platform",
      href: "https://en.wikipedia.org/wiki/Cross-platform_software",
    },
    {
      kind: "wikipedia",
      title: "Platform independent",
      href: "https://en.wikipedia.org/wiki/Platform_independent",
    },
    {
      kind: "wikipedia",
      title: "Cross platform",
      href: "https://en.wikipedia.org/wiki/Cross_platform",
    },
  ]);

  lb.define("platf+cuda", "CUDA", [
    { kind: "wikipedia", title: "CUDA", href: "https://en.wikipedia.org/wiki/CUDA" },
  ]);

  lb.define("platf+cygwin", "Cygwin", [
    { kind: "wikipedia", title: "Cygwin", href: "https://en.wikipedia.org/wiki/Cygwin" },
  ]);
}
