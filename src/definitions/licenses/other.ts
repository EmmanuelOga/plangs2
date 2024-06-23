import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  lb.define("lic+apple-public-source", "APSL", {
    websites: [{ kind: "wikipedia", title: "APSL", href: "https://en.wikipedia.org/wiki/Apple_Public_Source_License" }],
  });

  /**/

  lb.define("lic+artistic", "Artistic License", {
    websites: [
      { kind: "wikipedia", title: "Perl Artistic License 2.0", href: "https://en.wikipedia.org/wiki/Artistic_License" },
    ],
  });

  /**/

  lb.define("lic+artistic-2", "Artistic License 2.0", {
    websites: [
      { kind: "wikipedia", title: "Artistic License 2.0", href: "https://en.wikipedia.org/wiki/Artistic_License_2.0" },
    ],
  });

  /**/

  lb.define("lic+boost", "Boost", {
    websites: [{ kind: "wikipedia", title: "Boost", href: "https://en.wikipedia.org/wiki/Boost_Software_License" }],
  });

  /**/

  lb.define("lic+cc", "Creative Commons Attribution", {
    websites: [
      {
        kind: "wikipedia",
        title: "Creative Commons Attribution",
        href: "https://en.wikipedia.org/wiki/Creative_Commons_license#Attribution",
      },
    ],
  });

  /**/

  lb.define("lic+ccs", "CC-BY-SA", {
    websites: [
      { kind: "wikipedia", title: "CC-BY-SA", href: "https://en.wikipedia.org/wiki/Creative_Commons_licenses" },
    ],
  });

  /**/

  lb.define("lic+cecill", "CeCILL", {
    websites: [{ kind: "wikipedia", title: "CeCILL", href: "https://en.wikipedia.org/wiki/CeCILL" }],
  });

  /**/

  lb.define("lic+closed-source", "Closed source", {
    websites: [{ kind: "wikipedia", title: "Closed source", href: "https://en.wikipedia.org/wiki/Closed_source" }],
  });

  /**/

  lb.define("lic+commerce", "Commercial", {
    websites: [{ kind: "wikipedia", title: "Commercial", href: "https://en.wikipedia.org/wiki/Commerce" }],
  });

  /**/

  lb.define("lic+commercial", "Commercial", {
    websites: [{ kind: "wikipedia", title: "Commercial", href: "https://en.wikipedia.org/wiki/Commercial_software" }],
  });

  /**/

  lb.define("lic+common-public", "CPL", {
    websites: [{ kind: "wikipedia", title: "CPL", href: "https://en.wikipedia.org/wiki/Common_Public_License" }],
  });

  /**/

  lb.define("lic+eclipse-public", "EPL", {
    websites: [{ kind: "wikipedia", title: "EPL", href: "https://en.wikipedia.org/wiki/Eclipse_Public_License" }],
  });

  /**/

  lb.define("lic+eula", "EULA", {
    websites: [{ kind: "wikipedia", title: "EULA", href: "https://en.wikipedia.org/wiki/EULA" }],
  });

  /**/

  lb.define("lic+hpnd", "Historical Permission Notice and Disclaimer", {
    websites: [
      {
        kind: "wikipedia",
        title: "Historical Permission Notice and Disclaimer",
        href: "https://en.wikipedia.org/wiki/Historical_Permission_Notice_and_Disclaimer",
      },
    ],
  });

  /**/

  lb.define("lic+icu", "ICU", {
    websites: [
      { kind: "wikipedia", title: "ICU", href: "https://en.wikipedia.org/wiki/International_Components_for_Unicode" },
    ],
  });

  /**/

  lb.define("lic+ios", "iOS", {
    websites: [{ kind: "wikipedia", title: "iOS", href: "https://en.wikipedia.org/wiki/IOS" }],
  });

  /**/

  lb.define("lic+isc", "ISC", {
    websites: [{ kind: "wikipedia", title: "ISC", href: "https://en.wikipedia.org/wiki/ISC_license" }],
  });

  /**/

  lb.define("lic+linux", "Linux", {
    websites: [{ kind: "wikipedia", title: "Linux", href: "https://en.wikipedia.org/wiki/Linux" }],
  });

  /**/

  lb.define("lic+mac-os-x", "Mac", {
    websites: [{ kind: "wikipedia", title: "Mac", href: "https://en.wikipedia.org/wiki/Mac_OS_X" }],
  });

  /**/

  lb.define("lic+microsoft", "MS", {
    websites: [{ kind: "wikipedia", title: "MS", href: "https://en.wikipedia.org/wiki/Microsoft" }],
  });

  /**/

  lb.define("lic+microsoft-windows", "Windows", {
    websites: [{ kind: "wikipedia", title: "Windows", href: "https://en.wikipedia.org/wiki/Microsoft_Windows" }],
  });

  /**/

  lb.define("lic+open-source", "Open-source", {
    websites: [
      { kind: "wikipedia", title: "Open-source", href: "https://en.wikipedia.org/wiki/Open-source_license" },
      { kind: "wikipedia", title: "Open-source", href: "https://en.wikipedia.org/wiki/Open-source_software" },
    ],
  });

  /**/

  lb.define("lic+patents", "patent", {
    websites: [{ kind: "wikipedia", title: "patent", href: "https://en.wikipedia.org/wiki/Software_patents" }],
  });

  /**/

  lb.define("lic+permissive", "BSD-like", {
    websites: [
      { kind: "wikipedia", title: "BSD-like", href: "https://en.wikipedia.org/wiki/Permissive_software_license" },
      { kind: "wikipedia", title: "Permissive", href: "https://en.wikipedia.org/wiki/Permissive_license" },
    ],
  });

  /**/

  lb.define("lic+php", "PHP License", {
    websites: [{ kind: "wikipedia", title: "PHP License", href: "https://en.wikipedia.org/wiki/PHP_License" }],
  });

  /**/

  lb.define("lic+proprietary", "Proprietary", {
    websites: [
      { kind: "wikipedia", title: "Proprietary", href: "https://en.wikipedia.org/wiki/Proprietary_software" },
      { kind: "wikipedia", title: "Proprietary", href: "https://en.wikipedia.org/wiki/Proprietary_license" },
    ],
  });

  /**/

  lb.define("lic+public-domain", "Public domain", {
    websites: [{ kind: "wikipedia", title: "Public domain", href: "https://en.wikipedia.org/wiki/Public_domain" }],
  });

  /**/

  lb.define("lic+python-foundation", "Python Software Foundation License", {
    websites: [
      {
        kind: "wikipedia",
        title: "Python Software Foundation License",
        href: "https://en.wikipedia.org/wiki/Python_Software_Foundation_License",
      },
    ],
  });

  /**/

  lb.define("lic+q-public", "QPL", {
    websites: [{ kind: "wikipedia", title: "QPL", href: "https://en.wikipedia.org/wiki/Q_Public_License" }],
  });

  /**/

  lb.define("lic+qt-commercial", "Qt Commercial License", {
    websites: [
      {
        kind: "wikipedia",
        title: "Qt Commercial License",
        href: "https://en.wikipedia.org/wiki/Qt_Commercial_License",
      },
    ],
  });

  /**/

  lb.define("lic+ruby", "Ruby License", {
    websites: [{ kind: "wikipedia", title: "Ruby License", href: "https://en.wikipedia.org/wiki/Ruby_License" }],
  });

  /**/

  lb.define("lic+sun-public", "SPL-1.0", {
    websites: [{ kind: "wikipedia", title: "SPL-1.0", href: "https://en.wikipedia.org/wiki/Sun_Public_License" }],
  });

  /**/

  lb.define("lic+sybase-open-watcom-public", "Sybase Open Watcom Public License", {
    websites: [
      {
        kind: "wikipedia",
        title: "Sybase Open Watcom Public License",
        href: "https://en.wikipedia.org/wiki/Sybase_Open_Watcom_Public_License",
      },
    ],
  });

  /**/

  lb.define("lic+trialware", "Trialware", {
    websites: [{ kind: "wikipedia", title: "Trialware", href: "https://en.wikipedia.org/wiki/Trialware" }],
  });

  /**/

  lb.define("lic+zend", "Zend License", {
    websites: [
      { kind: "wikipedia", title: "Zend Engine License", href: "https://en.wikipedia.org/wiki/Zend_Engine_License" },
      { kind: "wikipedia", title: "Zend License", href: "https://en.wikipedia.org/wiki/Zend_License" },
    ],
  });

  /**/
}
