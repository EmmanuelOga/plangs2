import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  //-------------------------------------------------------------------------------

  lb.define("lic+mac", "Mac", [{ kind: "wikipedia", title: "Mac", href: "https://en.wikipedia.org/wiki/Mac_OS_X" }]);

  //-------------------------------------------------------------------------------

  lb.define("lic+mit", "MIT", [
    { kind: "wikipedia", title: "MIT", href: "https://en.wikipedia.org/wiki/MIT_License" },
    { kind: "wikipedia", title: "MIT", href: "https://en.wikipedia.org/wiki/MIT_license" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("lic+mit-x11", "MIT X11", [
    { kind: "wikipedia", title: "MIT X11", href: "https://en.wikipedia.org/wiki/MIT_License" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("lic+modified-bsd", "modified BSD", [
    { kind: "wikipedia", title: "modified BSD", href: "https://en.wikipedia.org/wiki/Modified_BSD_license" },
    { kind: "wikipedia", title: "Modified BSD License", href: "https://en.wikipedia.org/wiki/BSD_licenses" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("lic+mozilla-public", "Mozilla Public", [
    { kind: "wikipedia", title: "Mozilla Public", href: "https://en.wikipedia.org/wiki/Mozilla_Public_Licence" },
    {
      kind: "wikipedia",
      title: "Mozilla Public License",
      href: "https://en.wikipedia.org/wiki/Mozilla_Public_License",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("lic+mpl", "MPL", [
    { kind: "wikipedia", title: "MPL", href: "https://en.wikipedia.org/wiki/Mozilla_Public_License" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("lic+mpl-1-1", "MPL-1-1", [
    { kind: "wikipedia", title: "MPL-1-1", href: "https://en.wikipedia.org/wiki/Mozilla_Public_License" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("lic+ms", "MS", [{ kind: "wikipedia", title: "MS", href: "https://en.wikipedia.org/wiki/Microsoft" }]);
}
