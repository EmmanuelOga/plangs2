import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  lb.define("lic+apple-public-source", {
    name: "APSL",
    websites: [{ kind: "wikipedia", title: "APSL", href: "https://en.wikipedia.org/wiki/Apple_Public_Source_License" }],
  });

  lb.define("lic+artistic", {
    name: "Artistic License",
    websites: [
      { kind: "wikipedia", title: "Artistic License", href: "https://en.wikipedia.org/wiki/Artistic_License" },
    ],
  });

  lb.define("lic+artistic-2", {
    name: "Artistic License 2.0",
    websites: [
      { kind: "wikipedia", title: "Artistic License 2.0", href: "https://en.wikipedia.org/wiki/Artistic_License_2.0" },
    ],
  });

  lb.define("lic+boost", {
    name: "Boost",
    websites: [{ kind: "wikipedia", title: "Boost", href: "https://en.wikipedia.org/wiki/Boost_Software_License" }],
  });

  lb.define("lic+cc", {
    name: "Creative Commons Attribution",
    websites: [
      {
        kind: "wikipedia",
        title: "Creative Commons Attribution",
        href: "https://en.wikipedia.org/wiki/Creative_Commons_license#Attribution",
      },
    ],
  });

  lb.define("lic+ccs", {
    name: "CC-BY-SA",
    websites: [
      { kind: "wikipedia", title: "CC-BY-SA", href: "https://en.wikipedia.org/wiki/Creative_Commons_licenses" },
    ],
  });

  lb.define("lic+cecill", {
    name: "CeCILL",
    websites: [{ kind: "wikipedia", title: "CeCILL", href: "https://en.wikipedia.org/wiki/CeCILL" }],
  });

  lb.define("lic+closed-source", {
    name: "Closed source",
    websites: [{ kind: "wikipedia", title: "Closed source", href: "https://en.wikipedia.org/wiki/Closed_source" }],
  });

  lb.define("lic+commerce", {
    name: "Commercial",
    websites: [{ kind: "wikipedia", title: "Commercial", href: "https://en.wikipedia.org/wiki/Commerce" }],
  });

  lb.define("lic+commercial", {
    name: "Commercial",
    websites: [
      { kind: "wikipedia", title: "commercial software", href: "https://en.wikipedia.org/wiki/Commercial_software" },
    ],
  });

  lb.define("lic+common-public", {
    name: "CPL",
    websites: [{ kind: "wikipedia", title: "CPL", href: "https://en.wikipedia.org/wiki/Common_Public_License" }],
  });

  lb.define("lic+eclipse-public", {
    name: "EPL",
    websites: [
      { kind: "wikipedia", title: "Eclipse Public", href: "https://en.wikipedia.org/wiki/Eclipse_Public_License" },
    ],
  });

  lb.define("lic+eula", {
    name: "EULA",
    websites: [{ kind: "wikipedia", title: "EULA", href: "https://en.wikipedia.org/wiki/EULA" }],
  });

  lb.define("lic+hpnd", {
    name: "Historical Permission Notice and Disclaimer",
    websites: [
      {
        kind: "wikipedia",
        title: "Historical Permission Notice and Disclaimer",
        href: "https://en.wikipedia.org/wiki/Historical_Permission_Notice_and_Disclaimer",
      },
    ],
  });

  lb.define("lic+icu", {
    name: "ICU",
    websites: [
      { kind: "wikipedia", title: "ICU", href: "https://en.wikipedia.org/wiki/International_Components_for_Unicode" },
    ],
  });

  lb.define("lic+ios", {
    name: "iOS",
    websites: [{ kind: "wikipedia", title: "iOS", href: "https://en.wikipedia.org/wiki/IOS" }],
  });

  lb.define("lic+isc", {
    name: "ISC",
    websites: [{ kind: "wikipedia", title: "ISC", href: "https://en.wikipedia.org/wiki/ISC_license" }],
  });

  lb.define("lic+linux", {
    name: "Linux",
    websites: [{ kind: "wikipedia", title: "Linux", href: "https://en.wikipedia.org/wiki/Linux" }],
  });

  lb.define("lic+mac-os-x", {
    name: "Mac",
    websites: [{ kind: "wikipedia", title: "Mac", href: "https://en.wikipedia.org/wiki/Mac_OS_X" }],
  });

  lb.define("lic+ms", {
    name: "MS",
    websites: [{ kind: "wikipedia", title: "MS", href: "https://en.wikipedia.org/wiki/Microsoft" }],
  });

  lb.define("lic+patents", {
    name: "patent",
    websites: [{ kind: "wikipedia", title: "patent", href: "https://en.wikipedia.org/wiki/Software_patents" }],
  });

  lb.define("lic+php", {
    name: "PHP License",
    websites: [{ kind: "wikipedia", title: "PHP License", href: "https://en.wikipedia.org/wiki/PHP_License" }],
  });

  lb.define("lic+public-domain", {
    name: "Public domain",
    websites: [{ kind: "wikipedia", title: "Public domain", href: "https://en.wikipedia.org/wiki/Public_domain" }],
  });

  lb.define("lic+python-foundation", {
    name: "Python Software Foundation License",
    websites: [
      {
        kind: "wikipedia",
        title: "Python Software Foundation License",
        href: "https://en.wikipedia.org/wiki/Python_Software_Foundation_License",
      },
    ],
  });

  lb.define("lic+q-public", {
    name: "QPL",
    websites: [{ kind: "wikipedia", title: "QPL", href: "https://en.wikipedia.org/wiki/Q_Public_License" }],
  });

  lb.define("lic+roslyn", {
    name: "Roslyn",
    websites: [{ kind: "wikipedia", title: "Roslyn", href: "https://en.wikipedia.org/wiki/Roslyn_(compiler)" }],
  });

  lb.define("lic+ruby", {
    name: "Ruby License",
    websites: [{ kind: "wikipedia", title: "Ruby License", href: "https://en.wikipedia.org/wiki/Ruby_License" }],
  });

  lb.define("lic+sun-public", {
    name: "SPL-1.0",
    websites: [{ kind: "wikipedia", title: "SPL-1.0", href: "https://en.wikipedia.org/wiki/Sun_Public_License" }],
  });

  lb.define("lic+sybase-open-watcom-public", {
    name: "Sybase Open Watcom Public License",
    websites: [
      {
        kind: "wikipedia",
        title: "Sybase Open Watcom Public License",
        href: "https://en.wikipedia.org/wiki/Sybase_Open_Watcom_Public_License",
      },
    ],
  });

  lb.define("lic+trialware", {
    name: "Trialware",
    websites: [{ kind: "wikipedia", title: "Trialware", href: "https://en.wikipedia.org/wiki/Trialware" }],
  });

  lb.define("lic+win", {
    name: "Windows",
    websites: [{ kind: "wikipedia", title: "Windows", href: "https://en.wikipedia.org/wiki/Microsoft_Windows" }],
  });
}
