import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  lb.define("lic+boost", "Boost", {
    websites: [{ kind: "wikipedia", title: "Boost", href: "https://en.wikipedia.org/wiki/Boost_Software_License" }],
  });

  /**/

  lb.define("lic+bsd-2-clause", "BSD 2-Clause", {
    websites: [{ kind: "wikipedia", title: "BSD 2-Clause", href: "https://en.wikipedia.org/wiki/BSD_licenses" }],
  });

  /**/

  lb.define("lic+bsd-3", "BSD-3", {
    websites: [{ kind: "wikipedia", title: "BSD-3", href: "https://en.wikipedia.org/wiki/BSD-3" }],
  });

  /**/

  lb.define("lic+bsd-3-clause", "BSD-3-Clause", {
    websites: [{ kind: "wikipedia", title: "BSD-3-Clause", href: "https://en.wikipedia.org/wiki/BSD_licenses" }],
  });

  /**/

  lb.define("lic+bsd-like", "BSD-like", {
    websites: [
      { kind: "wikipedia", title: "BSD-like", href: "https://en.wikipedia.org/wiki/Permissive_software_license" },
      { kind: "wikipedia", title: "BSD-like", href: "https://en.wikipedia.org/wiki/BSD_licenses" },
    ],
  });

  /**/

  lb.define("lic+bsd-revised", "Revised BSD", {
    websites: [
      { kind: "wikipedia", title: "Revised BSD", href: "https://en.wikipedia.org/wiki/BSD_license" },
      { kind: "wikipedia", title: "BSD revised", href: "https://en.wikipedia.org/wiki/BSD_licenses" },
    ],
  });

  /**/

  lb.define("lic+bsds", "BSD licenses", {
    websites: [{ kind: "wikipedia", title: "BSD licenses", href: "https://en.wikipedia.org/wiki/BSD_licenses" }],
  });

  /**/
}
