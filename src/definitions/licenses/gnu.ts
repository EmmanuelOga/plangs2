import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  lb.define("lic+affero-gpl", "AGPL", {
    websites: [
      { kind: "wikipedia", title: "AGPL", href: "https://en.wikipedia.org/wiki/Affero_General_Public_License" },
    ],
  });

  /**/

  lb.define("lic+gnu-affero-gpl", "AGPL-3.0-or-later", {
    websites: [
      {
        kind: "wikipedia",
        title: "AGPL-3.0-or-later",
        href: "https://en.wikipedia.org/wiki/GNU_Affero_General_Public_License",
      },
    ],
  });

  /**/

  lb.define("lic+gnu-library-gpl", "LGPLv2", {
    websites: [
      { kind: "wikipedia", title: "LGPLv2", href: "https://en.wikipedia.org/wiki/GNU_Library_General_Public_License" },
    ],
  });

  /**/

  lb.define("lic+gpl", "GPL", {
    websites: [
      { kind: "wikipedia", title: "GPL", href: "https://en.wikipedia.org/wiki/GNU_General_Public_License" },
      { kind: "wikipedia", title: "GPL", href: "https://en.wikipedia.org/wiki/GPL" },
      {
        kind: "wikipedia",
        title: "GNU General Public License v3.0",
        href: "https://en.wikipedia.org/wiki/GNU_General_Public_License#Version_3",
      },
      { kind: "wikipedia", title: "GNU GPL v2", href: "https://en.wikipedia.org/wiki/GNU_GPL#Version_2" },
      {
        kind: "wikipedia",
        title: "GNU GPL-2.0",
        href: "https://en.wikipedia.org/wiki/GNU_General_Public_License#Version_2",
      },
      { kind: "wikipedia", title: "GNU GPL", href: "https://en.wikipedia.org/wiki/GNU_GPL" },
      {
        kind: "wikipedia",
        title: "GPL-1.0-or-later",
        href: "https://en.wikipedia.org/wiki/GNU_General_Public_License#Version_1",
      },
    ],
  });

  /**/

  lb.define("lic+gpl-2", "GPLv2", {
    websites: [{ kind: "wikipedia", title: "GPLv2", href: "https://en.wikipedia.org/wiki/GPLv2" }],
  });

  /**/

  lb.define("lic+gpl-3", "GPL 2+", {
    websites: [
      { kind: "wikipedia", title: "GNU GPLv3", href: "https://en.wikipedia.org/wiki/GNU_GPLv3" },
      { kind: "wikipedia", title: "GPL 2+", href: "https://en.wikipedia.org/wiki/GPL_3#Version_2" },
    ],
  });

  /**/

  lb.define("lic+gpl3", "GPL 3", {
    websites: [{ kind: "wikipedia", title: "GPL 3", href: "https://en.wikipedia.org/wiki/GPL3" }],
  });

  /**/

  lb.define("lic+lgpl", "LGPL", {
    websites: [
      {
        kind: "wikipedia",
        title: "GNU Lesser General Public License",
        href: "https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License",
      },
      { kind: "wikipedia", title: "LGPL", href: "https://en.wikipedia.org/wiki/GNU_Lesser_Public_License" },
      { kind: "wikipedia", title: "LGPL", href: "https://en.wikipedia.org/wiki/LGPL" },
    ],
  });

  /**/
}
