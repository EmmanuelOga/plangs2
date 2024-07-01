import type { PlangsGraph } from "../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildLicense("lic+bsd").merge({
    name: "BSD",
    websites: [
      { kind: "wikipedia", title: "Revised BSD", href: "https://en.wikipedia.org/wiki/BSD_license" },
      { kind: "wikipedia", title: "BSD", href: "https://en.wikipedia.org/wiki/BSD" },
    ],
  });

  /**/

  g.buildLicense("lic+bsd-3").merge({
    name: "BSD-3",
    websites: [{ kind: "wikipedia", title: "BSD-3", href: "https://en.wikipedia.org/wiki/BSD-3" }],
  });

  /**/

  g.buildLicense("lic+bsd-c").merge({
    name: "3-clause BSD",
    websites: [{ kind: "wikipedia", title: "3-clause BSD", href: "https://en.wikipedia.org/wiki/3-clause_BSD" }],
  });

  /**/

  g.buildLicense("lic+bsd-m").merge({
    name: "BSD",
    websites: [{ kind: "wikipedia", title: "BSD", href: "https://en.wikipedia.org/wiki/Modified_BSD_License" }],
  });

  /**/

  g.buildLicense("lic+bsd-n").merge({
    name: "New BSD License",
    websites: [{ kind: "wikipedia", title: "New BSD License", href: "https://en.wikipedia.org/wiki/New_BSD_License" }],
  });

  /**/

  g.buildLicense("lic+bsd-s").merge({
    name: "BSD",
    websites: [
      { kind: "wikipedia", title: "BSD", href: "https://en.wikipedia.org/wiki/BSD_licenses" },
      { kind: "wikipedia", title: "Simplified BSD", href: "https://en.wikipedia.org/wiki/Simplified_BSD_License" },
      {
        kind: "wikipedia",
        title: "Simplified BSD",
        href: "https://en.wikipedia.org/wiki/BSD_licenses#2-clause_license_.28.22Simplified_BSD_License.22_or_.22FreeBSD_License.22.29",
      },
    ],
  });

  /**/
}
