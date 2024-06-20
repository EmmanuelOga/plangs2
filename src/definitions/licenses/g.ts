import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  lb.define("lic+gnu-affero-gpl", "GNU Affero General Public License", [
    {
      kind: "wikipedia",
      title: "GNU Affero General Public License",
      href: "https://en.wikipedia.org/wiki/GNU_Affero_General_Public_License",
    },
  ]);

  lb.define("lic+gnu-gpl", "GNU GPL", [
    {
      kind: "wikipedia",
      title: "GNU General Public License",
      href: "https://en.wikipedia.org/wiki/GNU_General_Public_License",
    },
    {
      kind: "wikipedia",
      title: "GNU GPL",
      href: "https://en.wikipedia.org/wiki/GNU_GPL",
    },
  ]);

  lb.define("lic+gnu-gpl-2", "GNU GPLv2", [
    {
      kind: "wikipedia",
      title: "GNU GPL v2",
      href: "https://en.wikipedia.org/wiki/GNU_GPL#Version_2",
    },
    {
      kind: "wikipedia",
      title: "GNU GPL-2.0",
      href: "https://en.wikipedia.org/wiki/GNU_General_Public_License#Version_2",
    },
    {
      kind: "wikipedia",
      title: "GNU GPLv2",
      href: "https://en.wikipedia.org/wiki/GNU_General_Public_License",
    },
  ]);

  lb.define("lic+gnu-gpl-2-plus", "GNU GPLv2+", [
    {
      kind: "wikipedia",
      title: "GNU GPLv2+",
      href: "https://en.wikipedia.org/wiki/GNU_General_Public_License",
    },
  ]);

  lb.define("lic+gnu-gpl-3", "GNU GPLv3", [
    {
      kind: "wikipedia",
      title: "GNU General Public License v3.0",
      href: "https://en.wikipedia.org/wiki/GNU_General_Public_License#Version_3",
    },
    {
      kind: "wikipedia",
      title: "GNU GPLv3",
      href: "https://en.wikipedia.org/wiki/GNU_GPLv3",
    },
  ]);

  lb.define("lic+gnu-gpl-3-plus", "GNU GPL 3+", [
    {
      kind: "wikipedia",
      title: "GNU GPL 3+",
      href: "https://en.wikipedia.org/wiki/GNU_General_Public_License#Version_3",
    },
  ]);

  lb.define("lic+gnu-lesser-gpl", "GNU Lesser General Public License", [
    {
      kind: "wikipedia",
      title: "GNU Lesser General Public License",
      href: "https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License",
    },
  ]);

  lb.define("lic+gnu-lesser-public", "GNU Lesser Public License", [
    {
      kind: "wikipedia",
      title: "GNU Lesser Public License",
      href: "https://en.wikipedia.org/wiki/GNU_Lesser_Public_License",
    },
  ]);

  lb.define("lic+gnu-lgpl-2-plus", "Standard libraries licensed under the GNU LGPLv2+", [
    {
      kind: "wikipedia",
      title: "Standard libraries licensed under the GNU LGPLv2+",
      href: "https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License",
    },
  ]);

  lb.define("lic+gpl", "GPL", [
    {
      kind: "wikipedia",
      title: "GPL",
      href: "https://en.wikipedia.org/wiki/GNU_General_Public_License",
    },
    {
      kind: "wikipedia",
      title: "GPL",
      href: "https://en.wikipedia.org/wiki/GPL",
    },
  ]);

  lb.define("lic+gpl-1", "GPL-1.0-or-later", [
    {
      kind: "wikipedia",
      title: "GPL-1.0-or-later",
      href: "https://en.wikipedia.org/wiki/GNU_General_Public_License#Version_1",
    },
  ]);

  lb.define("lic+gpl-2", "GPLv2", [
    {
      kind: "wikipedia",
      title: "GPLv2",
      href: "https://en.wikipedia.org/wiki/GPLv2",
    },
    {
      kind: "wikipedia",
      title: "GPLv2",
      href: "https://en.wikipedia.org/wiki/GNU_General_Public_License",
    },
    {
      kind: "wikipedia",
      title: "GPL-2.0-or-later",
      href: "https://en.wikipedia.org/wiki/GNU_General_Public_License#Version_2",
    },
  ]);

  lb.define("lic+gpl-2-3", "GPL 2.0, 3.0", [
    {
      kind: "wikipedia",
      title: "GPL 2.0, 3.0",
      href: "https://en.wikipedia.org/wiki/GNU_General_Public_License",
    },
  ]);

  lb.define("lic+gpl-2-plus", "GPL 2+", [
    { kind: "wikipedia", title: "GPL 2+", href: "https://en.wikipedia.org/wiki/GPL_3#Version_2" },
  ]);

  lb.define("lic+gpl-3", "GPLv3", [
    {
      kind: "wikipedia",
      title: "GPLv3",
      href: "https://en.wikipedia.org/wiki/GNU_General_Public_License",
    },
    {
      kind: "wikipedia",
      title: "GPLv3",
      href: "https://en.wikipedia.org/wiki/GNU_General_Public_License#Version_3",
    },
    {
      kind: "wikipedia",
      title: "GPL 3",
      href: "https://en.wikipedia.org/wiki/GPL3",
    },
  ]);

  lb.define("lic+gpl-3-plus", "GPLv3+", [
    {
      kind: "wikipedia",
      title: "GPLv3+",
      href: "https://en.wikipedia.org/wiki/GNU_General_Public_License",
    },
  ]);
}
