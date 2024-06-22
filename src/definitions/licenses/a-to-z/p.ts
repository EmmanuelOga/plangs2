import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  //-------------------------------------------------------------------------------

  lb.define("lic+patent", "patent", {
    websites: [{ kind: "wikipedia", title: "patent", href: "https://en.wikipedia.org/wiki/Software_patents" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("lic+perl-artistic-2", "Perl Artistic License 2.0", {
    websites: [
      { kind: "wikipedia", title: "Perl Artistic License 2.0", href: "https://en.wikipedia.org/wiki/Artistic_License" },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("lic+permissive", "Permissive", {
    websites: [{ kind: "wikipedia", title: "Permissive", href: "https://en.wikipedia.org/wiki/Permissive_license" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("lic+php", "PHP License", {
    websites: [{ kind: "wikipedia", title: "PHP License", href: "https://en.wikipedia.org/wiki/PHP_License" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("lic+proprietary-software", "proprietary software", {
    websites: [
      { kind: "wikipedia", title: "proprietary software", href: "https://en.wikipedia.org/wiki/Proprietary_software" },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("lic+python-software-foundation", "Python Software Foundation License", {
    websites: [
      {
        kind: "wikipedia",
        title: "Python Software Foundation License",
        href: "https://en.wikipedia.org/wiki/Python_Software_Foundation_License",
      },
    ],
  });
}
