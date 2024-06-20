import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+pic", "PIC", [
    { kind: "wikipedia", title: "PIC", href: "https://en.wikipedia.org/wiki/PIC_microcontrollers" },
  ]);

  lb.define("platf+pip", "pip (package manager)", [
    {
      kind: "wikipedia",
      title: "pip (package manager)",
      href: "https://en.wikipedia.org/wiki/Pip_(package_manager)",
    },
  ]);

  lb.define("platf+plan9", "Plan 9 from User Space", [
    {
      kind: "wikipedia",
      title: "Plan 9",
      href: "https://en.wikipedia.org/wiki/Plan_9_from_Bell_Labs",
    },
    {
      kind: "wikipedia",
      title: "Plan 9 from User Space",
      href: "https://en.wikipedia.org/wiki/Plan_9_from_User_Space",
    },
  ]);

  lb.define("platf+playstation", "PlayStation 3", [
    {
      kind: "wikipedia",
      title: "PlayStation 4",
      href: "https://en.wikipedia.org/wiki/PlayStation_4",
    },
    {
      kind: "wikipedia",
      title: "PlayStation 5",
      href: "https://en.wikipedia.org/wiki/PlayStation_5",
    },
    {
      kind: "wikipedia",
      title: "PlayStation 2",
      href: "https://en.wikipedia.org/wiki/PlayStation_2",
    },
    {
      kind: "wikipedia",
      title: "PlayStation Portable",
      href: "https://en.wikipedia.org/wiki/PlayStation_Portable",
    },
    {
      kind: "wikipedia",
      title: "PlayStation 3",
      href: "https://en.wikipedia.org/wiki/PlayStation_3",
    },
  ]);

  lb.define("platf+posix", "POSIX", [
    { kind: "wikipedia", title: "POSIX", href: "https://en.wikipedia.org/wiki/POSIX" },
  ]);
}
