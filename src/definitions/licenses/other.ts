import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildLicense("lic+apple-public-source").merge({
    name: "APSL",
    websites: [{ kind: "wikipedia", title: "APSL", href: "https://en.wikipedia.org/wiki/Apple_Public_Source_License" }],
  });

  /**/
  g.buildLicense("lic+artistic").merge({
    name: "Artistic License",
    websites: [
      { kind: "wikipedia", title: "Artistic License", href: "https://en.wikipedia.org/wiki/Artistic_License" },
    ],
  });

  /**/
  g.buildLicense("lic+artistic-2").merge({
    name: "Artistic License 2.0",
    websites: [
      { kind: "wikipedia", title: "Artistic License 2.0", href: "https://en.wikipedia.org/wiki/Artistic_License_2.0" },
    ],
  });

  /**/
  g.buildLicense("lic+boost").merge({
    name: "Boost",
    websites: [{ kind: "wikipedia", title: "Boost", href: "https://en.wikipedia.org/wiki/Boost_Software_License" }],
  });

  /**/
  g.buildLicense("lic+cc").merge({
    name: "Creative Commons Attribution",
    websites: [
      {
        kind: "wikipedia",
        title: "Creative Commons Attribution",
        href: "https://en.wikipedia.org/wiki/Creative_Commons_license#Attribution",
      },
    ],
  });

  /**/
  g.buildLicense("lic+ccs").merge({
    name: "CC-BY-SA",
    websites: [
      { kind: "wikipedia", title: "CC-BY-SA", href: "https://en.wikipedia.org/wiki/Creative_Commons_licenses" },
    ],
  });

  /**/
  g.buildLicense("lic+cecill").merge({
    name: "CeCILL",
    websites: [{ kind: "wikipedia", title: "CeCILL", href: "https://en.wikipedia.org/wiki/CeCILL" }],
  });

  /**/
  g.buildLicense("lic+closed-source").merge({
    name: "Closed source",
    websites: [{ kind: "wikipedia", title: "Closed source", href: "https://en.wikipedia.org/wiki/Closed_source" }],
  });

  /**/
  g.buildLicense("lic+commerce").merge({
    name: "Commercial",
    websites: [{ kind: "wikipedia", title: "Commercial", href: "https://en.wikipedia.org/wiki/Commerce" }],
  });

  /**/
  g.buildLicense("lic+commercial").merge({
    name: "Commercial",
    websites: [
      { kind: "wikipedia", title: "commercial software", href: "https://en.wikipedia.org/wiki/Commercial_software" },
    ],
  });

  /**/
  g.buildLicense("lic+common-public").merge({
    name: "CPL",
    websites: [{ kind: "wikipedia", title: "CPL", href: "https://en.wikipedia.org/wiki/Common_Public_License" }],
  });

  /**/
  g.buildLicense("lic+eclipse-public").merge({
    name: "EPL",
    websites: [
      { kind: "wikipedia", title: "Eclipse Public", href: "https://en.wikipedia.org/wiki/Eclipse_Public_License" },
    ],
  });

  /**/
  g.buildLicense("lic+eula").merge({
    name: "EULA",
    websites: [{ kind: "wikipedia", title: "EULA", href: "https://en.wikipedia.org/wiki/EULA" }],
  });

  /**/
  g.buildLicense("lic+hpnd").merge({
    name: "Historical Permission Notice and Disclaimer",
    websites: [
      {
        kind: "wikipedia",
        title: "Historical Permission Notice and Disclaimer",
        href: "https://en.wikipedia.org/wiki/Historical_Permission_Notice_and_Disclaimer",
      },
    ],
  });

  /**/
  g.buildLicense("lic+icu").merge({
    name: "ICU",
    websites: [
      { kind: "wikipedia", title: "ICU", href: "https://en.wikipedia.org/wiki/International_Components_for_Unicode" },
    ],
  });

  /**/
  g.buildLicense("lic+ios").merge({
    name: "iOS",
    websites: [{ kind: "wikipedia", title: "iOS", href: "https://en.wikipedia.org/wiki/IOS" }],
  });

  /**/
  g.buildLicense("lic+isc").merge({
    name: "ISC",
    websites: [{ kind: "wikipedia", title: "ISC", href: "https://en.wikipedia.org/wiki/ISC_license" }],
  });

  /**/
  g.buildLicense("lic+linux").merge({
    name: "Linux",
    websites: [{ kind: "wikipedia", title: "Linux", href: "https://en.wikipedia.org/wiki/Linux" }],
  });

  /**/
  g.buildLicense("lic+mac-os-x").merge({
    name: "Mac",
    websites: [{ kind: "wikipedia", title: "Mac", href: "https://en.wikipedia.org/wiki/Mac_OS_X" }],
  });

  /**/
  g.buildLicense("lic+ms").merge({
    name: "MS",
    websites: [{ kind: "wikipedia", title: "MS", href: "https://en.wikipedia.org/wiki/Microsoft" }],
  });

  /**/
  g.buildLicense("lic+patents").merge({
    name: "patent",
    websites: [{ kind: "wikipedia", title: "patent", href: "https://en.wikipedia.org/wiki/Software_patents" }],
  });

  /**/
  g.buildLicense("lic+php").merge({
    name: "PHP License",
    websites: [{ kind: "wikipedia", title: "PHP License", href: "https://en.wikipedia.org/wiki/PHP_License" }],
  });

  /**/
  g.buildLicense("lic+public-domain").merge({
    name: "Public domain",
    websites: [{ kind: "wikipedia", title: "Public domain", href: "https://en.wikipedia.org/wiki/Public_domain" }],
  });

  /**/
  g.buildLicense("lic+python-foundation").merge({
    name: "Python Software Foundation License",
    websites: [
      {
        kind: "wikipedia",
        title: "Python Software Foundation License",
        href: "https://en.wikipedia.org/wiki/Python_Software_Foundation_License",
      },
    ],
  });

  /**/
  g.buildLicense("lic+q-public").merge({
    name: "QPL",
    websites: [{ kind: "wikipedia", title: "QPL", href: "https://en.wikipedia.org/wiki/Q_Public_License" }],
  });

  /**/
  g.buildLicense("lic+roslyn").merge({
    name: "Roslyn",
    websites: [{ kind: "wikipedia", title: "Roslyn", href: "https://en.wikipedia.org/wiki/Roslyn_(compiler)" }],
  });

  /**/
  g.buildLicense("lic+ruby").merge({
    name: "Ruby License",
    websites: [{ kind: "wikipedia", title: "Ruby License", href: "https://en.wikipedia.org/wiki/Ruby_License" }],
  });

  /**/
  g.buildLicense("lic+sun-public").merge({
    name: "SPL-1.0",
    websites: [{ kind: "wikipedia", title: "SPL-1.0", href: "https://en.wikipedia.org/wiki/Sun_Public_License" }],
  });

  /**/
  g.buildLicense("lic+sybase-open-watcom-public").merge({
    name: "Sybase Open Watcom Public License",
    websites: [
      {
        kind: "wikipedia",
        title: "Sybase Open Watcom Public License",
        href: "https://en.wikipedia.org/wiki/Sybase_Open_Watcom_Public_License",
      },
    ],
  });

  /**/
  g.buildLicense("lic+trialware").merge({
    name: "Trialware",
    websites: [{ kind: "wikipedia", title: "Trialware", href: "https://en.wikipedia.org/wiki/Trialware" }],
  });

  /**/
  g.buildLicense("lic+win").merge({
    name: "Windows",
    websites: [{ kind: "wikipedia", title: "Windows", href: "https://en.wikipedia.org/wiki/Microsoft_Windows" }],
  });

  /**/
}
