import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  lb.define("license+lgpl", "LGPL", [
    {
      kind: "wikipedia",
      title: "LGPL",
      href: "https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License",
    },
    {
      kind: "wikipedia",
      title: "LGPL",
      href: "https://en.wikipedia.org/wiki/GNU_Lesser_Public_License",
    },
    {
      kind: "wikipedia",
      title: "LGPL",
      href: "https://en.wikipedia.org/wiki/LGPL",
    },
  ]);

  lb.define("license+lgpl-2", "LGPLv2", [
    {
      kind: "wikipedia",
      title: "LGPLv2",
      href: "https://en.wikipedia.org/wiki/GNU_Library_General_Public_License",
    },
  ]);

  lb.define("license+lgpl-2.1", "LGPLv2.1", [
    {
      kind: "wikipedia",
      title: "LGPLv2.1",
      href: "https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License",
    },
  ]);

  lb.define("license+lgpl-2.1-only", "LGPL-2.1-only", [
    {
      kind: "wikipedia",
      title: "LGPL-2.1-only",
      href: "https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License",
    },
  ]);

  lb.define("license+lgpl-2.1-plus", "LGPLv2.1+", [
    {
      kind: "wikipedia",
      title: "LGPLv2.1+",
      href: "https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License",
    },
  ]);

  lb.define("license+lgpl-3", "LGPL 3.0", [
    {
      kind: "wikipedia",
      title: "LGPL 3.0",
      href: "https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License",
    },
  ]);

  lb.define("license+linux", "Linux", [
    {
      kind: "wikipedia",
      title: "Linux",
      href: "https://en.wikipedia.org/wiki/Linux",
    },
  ]);
}
