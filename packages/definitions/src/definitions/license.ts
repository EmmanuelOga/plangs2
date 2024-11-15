import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.license.set("license+afl", {
    name: "Academic Free License",
    keywords: ["afl", "afl-3"],
    description: "The Academic Free License is a permissive free software license with provisions for academic use.",
    spdx: "AFL-3.0",
    isFSFLibre: true,
    isOSIApproved: true,
    extHomeURL: "https://en.wikipedia.org/wiki/Academic_Free_License",
  });

  g.nodes.license.set("license+agpl", {
    name: "Affero General Public License",
    keywords: ["agpl", "agpl-3.0-or-later"],
    description:
      "The Affero General Public License is a free software license that requires the source code to be made available to all users who interact with the software over a network.",
    spdx: "AGPL-3.0-only",
    isFSFLibre: true,
    isOSIApproved: true,
    extHomeURL: "https://en.wikipedia.org/wiki/Affero_General_Public_License",
  });

  g.nodes.license.set("license+apache", {
    name: "Apache License 2.0",
    keywords: ["apache", "apache-2"],
    description:
      "The Apache License 2.0 is a permissive free software license written by the Apache Software Foundation, providing an explicit grant of patent rights from contributors to users.",
    spdx: "Apache-2.0",
    isFSFLibre: true,
    isOSIApproved: true,
    extHomeURL: "https://en.wikipedia.org/wiki/Apache_License_2.0",
  });

  g.nodes.license.set("license+apsl", {
    name: "Apple Public Source License",
    keywords: ["apsl"],
    description: "The Apple Public Source License is a free software license used by Apple for its open-source projects.",
    spdx: "APSL-2.0",
    isFSFLibre: false,
    isOSIApproved: true,
    extHomeURL: "https://en.wikipedia.org/wiki/Apple_Public_Source_License",
  });

  g.nodes.license.set("license+artistic", {
    name: "Artistic License 2.0",
    keywords: ["artistic", "artistic-2", "artistic-2.0"],
    description: "The Artistic License 2.0 is a free software license used for the Perl programming language and its associated libraries.",
    spdx: "Artistic-2.0",
    isFSFLibre: true,
    isOSIApproved: true,
    extHomeURL: "https://en.wikipedia.org/wiki/Artistic_License_2.0",
  });

  g.nodes.license.set("license+boost", {
    name: "Boost Software License",
    keywords: ["boost"],
    description: "The Boost Software License is a permissive free software license used by the Boost C++ Libraries.",
    spdx: "BSL-1.0",
    isFSFLibre: true,
    isOSIApproved: true,
    extHomeURL: "https://en.wikipedia.org/wiki/Boost_Software_License",
  });

  g.nodes.license.set("license+bsd", {
    name: "BSD",
    keywords: ["bsd", "bsd3", "bsd4"],
    description:
      "BSD licenses are a family of permissive free software licenses, imposing minimal restrictions on the use and distribution of covered software.",
    spdx: "BSD-3-Clause",
    isFSFLibre: true,
    isOSIApproved: true,
    extHomeURL: "https://en.wikipedia.org/wiki/BSD_licenses",
  });

  g.nodes.license.set("license+cc-by", {
    name: "Creative Commons Attribution",
    keywords: ["cc-by"],
    description:
      "The Creative Commons Attribution license allows for the sharing and adaptation of works, provided that appropriate credit is given.",
    spdx: "CC-BY-4.0",
    isFSFLibre: false,
    isOSIApproved: false,
    extHomeURL: "https://en.wikipedia.org/wiki/Creative_Commons_license#Attribution",
  });

  g.nodes.license.set("license+cecill", {
    name: "CeCILL",
    keywords: ["cecill"],
    description: "The CeCILL license is a French free software license compatible with the GNU General Public License.",
    spdx: "CECILL-2.1",
    isFSFLibre: true,
    isOSIApproved: false,
    extHomeURL: "https://en.wikipedia.org/wiki/CeCILL",
  });

  g.nodes.license.set("license+cpl", {
    name: "Common Public License",
    keywords: ["cpl"],
    description: "The Common Public License is a free software license used by IBM for some of its software projects.",
    spdx: "CPL-1.0",
    isFSFLibre: true,
    isOSIApproved: true,
    extHomeURL: "https://en.wikipedia.org/wiki/Common_Public_License",
  });

  g.nodes.license.set("license+dual", {
    name: "Dual License",
    keywords: ["dual-license"],
    description: "A dual license allows software to be licensed under two different licenses, providing users with a choice.",
    extHomeURL: "https://en.wikipedia.org/wiki/Dual_license",
  });

  g.nodes.license.set("license+epl", {
    name: "Eclipse Public License",
    keywords: ["epl"],
    description: "The Eclipse Public License is a free software license used by the Eclipse Foundation for its open-source projects.",
    spdx: "EPL-2.0",
    isFSFLibre: true,
    isOSIApproved: true,
    extHomeURL: "https://en.wikipedia.org/wiki/Eclipse_Public_License",
  });

  g.nodes.license.set("license+gnu-gpl", {
    name: "GNU General Public License",
    keywords: ["gpl", "gplv2", "gplv3"],
    description:
      "The GNU General Public License is a free software license that ensures end users have the freedom to run, study, share, and modify the software.",
    spdx: "GPL-3.0-only",
    isFSFLibre: true,
    isOSIApproved: true,
    extHomeURL: "https://en.wikipedia.org/wiki/GNU_General_Public_License",
  });

  g.nodes.license.set("license+isc", {
    name: "ISC License",
    keywords: ["isc"],
    description: "The ISC License is a permissive free software license similar to the MIT License, with simplified terms.",
    spdx: "ISC",
    isFSFLibre: true,
    isOSIApproved: true,
    extHomeURL: "https://en.wikipedia.org/wiki/ISC_license",
  });

  g.nodes.license.set("license+lgpl", {
    name: "GNU Lesser General Public License",
    keywords: ["lgpl"],
    description: "The GNU Lesser General Public License is a free software license that allows for linking with proprietary software.",
    spdx: "LGPL-2.1-only",
    isFSFLibre: true,
    isOSIApproved: true,
    extHomeURL: "https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License",
  });

  g.nodes.license.set("license+mit", {
    name: "MIT License",
    keywords: ["mit"],
    description: "The MIT License is a permissive free software license that is very simple and permissive, with very few restrictions.",
    spdx: "MIT",
    isFSFLibre: true,
    isOSIApproved: true,
    extHomeURL: "https://en.wikipedia.org/wiki/MIT_License",
  });

  g.nodes.license.set("license+mpl", {
    name: "Mozilla Public License",
    keywords: ["mpl"],
    description: "The Mozilla Public License is a free software license used by Mozilla for its open-source projects.",
    spdx: "MPL-2.0",
    isFSFLibre: true,
    isOSIApproved: true,
    extHomeURL: "https://en.wikipedia.org/wiki/Mozilla_Public_License",
  });

  g.nodes.license.set("license+public-domain", {
    name: "Public Domain",
    keywords: ["public-domain"],
    description: "Public Domain refers to works that are free from copyright restrictions and can be freely used by anyone.",
    isFSFLibre: false,
    isOSIApproved: false,
    extHomeURL: "https://en.wikipedia.org/wiki/Public_domain",
  });

  g.nodes.license.set("license+python", {
    name: "Python Software Foundation License",
    keywords: ["python-software-foundation"],
    description: "The Python Software Foundation License is a free software license used for Python and related projects.",
    spdx: "Python-2.0",
    isFSFLibre: true,
    isOSIApproved: true,
    extHomeURL: "https://en.wikipedia.org/wiki/Python_Software_Foundation_License",
  });

  g.nodes.license.set("license+zlib", {
    name: "zlib License",
    keywords: ["zlib"],
    description: "The zlib License is a permissive free software license used for the zlib compression library.",
    spdx: "Zlib",
    isFSFLibre: true,
    isOSIApproved: true,
    extHomeURL: "https://en.wikipedia.org/wiki/Zlib_License",
  });
}
