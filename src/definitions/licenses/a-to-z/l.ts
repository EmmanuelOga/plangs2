import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  lb.define("lic+lgpl-2", "LGPLv2", {
    websites: [
      { kind: "wikipedia", title: "LGPLv2", href: "https://en.wikipedia.org/wiki/GNU_Library_General_Public_License" },
    ],
  });

  /**/

  lb.define("lic+lgpl-2.1", "LGPLv2.1", {
    websites: [
      { kind: "wikipedia", title: "LGPLv2.1", href: "https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License" },
    ],
  });

  /**/

  lb.define("lic+lgpl-2.1-only", "LGPL-2.1-only", {
    websites: [
      {
        kind: "wikipedia",
        title: "LGPL-2.1-only",
        href: "https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License",
      },
    ],
  });

  /**/

  lb.define("lic+lgpl-2.1-plus", "LGPLv2.1+", {
    websites: [
      {
        kind: "wikipedia",
        title: "LGPLv2.1+",
        href: "https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License",
      },
    ],
  });

  /**/

  lb.define("lic+lgpl-3", "LGPL 3.0", {
    websites: [
      { kind: "wikipedia", title: "LGPL 3.0", href: "https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License" },
    ],
  });

  /**/

  lb.define("lic+linux", "Linux", {
    websites: [{ kind: "wikipedia", title: "Linux", href: "https://en.wikipedia.org/wiki/Linux" }],
  });

  /**/
}
