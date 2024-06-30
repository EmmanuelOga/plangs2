import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildLicense("lic+affero-gpl").merge({
    name: "AGPL",
    websites: [
      { kind: "wikipedia", title: "AGPLv3", href: "https://en.wikipedia.org/wiki/Affero_General_Public_License" },
    ],
  });

  /**/
  g.buildLicense("lic+gnu-affero-gpl").merge({
    name: "AGPL-3.0-or-later",
    websites: [
      {
        kind: "wikipedia",
        title: "GNU Affero General Public License",
        href: "https://en.wikipedia.org/wiki/GNU_Affero_General_Public_License",
      },
    ],
  });

  /**/
  g.buildLicense("lic+gnu-library-gpl").merge({
    name: "LGPLv2",
    websites: [
      { kind: "wikipedia", title: "LGPLv2", href: "https://en.wikipedia.org/wiki/GNU_Library_General_Public_License" },
    ],
  });

  /**/
  g.buildLicense("lic+gpl").merge({
    name: "GPL",
    websites: [
      {
        kind: "wikipedia",
        title: "GNU General Public License",
        href: "https://en.wikipedia.org/wiki/GNU_General_Public_License",
      },
      {
        kind: "wikipedia",
        title: "GPL-3.0-or-later",
        href: "https://en.wikipedia.org/wiki/GNU_General_Public_License#Version_3",
      },
      {
        kind: "wikipedia",
        title: "GPL-2.0-or-later",
        href: "https://en.wikipedia.org/wiki/GNU_General_Public_License#Version_2",
      },
      {
        kind: "wikipedia",
        title: "GPL-1.0-or-later",
        href: "https://en.wikipedia.org/wiki/GNU_General_Public_License#Version_1",
      },
      { kind: "wikipedia", title: "GPL", href: "https://en.wikipedia.org/wiki/GPL" },
      { kind: "wikipedia", title: "GNU GPL", href: "https://en.wikipedia.org/wiki/GNU_GPL" },
      { kind: "wikipedia", title: "GNU GPL v2", href: "https://en.wikipedia.org/wiki/GNU_GPL#Version_2" },
    ],
  });

  /**/
  g.buildLicense("lic+gpl-2").merge({
    name: "GPLv2",
    websites: [{ kind: "wikipedia", title: "GPLv2", href: "https://en.wikipedia.org/wiki/GPLv2" }],
  });

  /**/
  g.buildLicense("lic+gpl-3").merge({
    name: "GPL 2+",
    websites: [
      { kind: "wikipedia", title: "GPL 2+", href: "https://en.wikipedia.org/wiki/GPL_3#Version_2" },
      { kind: "wikipedia", title: "GNU GPLv3", href: "https://en.wikipedia.org/wiki/GNU_GPLv3" },
    ],
  });

  /**/
  g.buildLicense("lic+gpl3").merge({
    name: "GPL 3",
    websites: [{ kind: "wikipedia", title: "GPL 3", href: "https://en.wikipedia.org/wiki/GPL3" }],
  });

  /**/
  g.buildLicense("lic+lgpl").merge({
    name: "LGPL",
    websites: [
      {
        kind: "wikipedia",
        title: "LGPL-2.1-only",
        href: "https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License",
      },
      { kind: "wikipedia", title: "LGPL", href: "https://en.wikipedia.org/wiki/LGPL" },
      { kind: "wikipedia", title: "LGPL", href: "https://en.wikipedia.org/wiki/GNU_Lesser_Public_License" },
    ],
  });

  /**/
}
