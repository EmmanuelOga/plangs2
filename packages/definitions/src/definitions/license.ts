import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.license.set("lic+afl", {
    name: "AFL",
    description: "The Academic Free License is a permissive free software license with provisions for academic use.",
    extHomeURL: "https://en.wikipedia.org/wiki/Academic_Free_License",
    isFSFLibre: true,
    isOSIApproved: true,
    keywords: ["afl", "afl-3"],
    spdx: "AFL-3.0",
  });

  g.license.set("lic+agpl", {
    name: "AGPL",
    description:
      "The Affero General Public License is a free software license that requires the source code to be made available to all users who interact with the software over a network.",
    extHomeURL: "https://en.wikipedia.org/wiki/Affero_General_Public_License",
    isFSFLibre: true,
    isOSIApproved: true,
    keywords: ["agpl", "agpl-3.0-or-later"],
    spdx: "AGPL-3.0-only",
  });

  g.license.set("lic+apache", {
    name: "Apache 2.0",
    description:
      "The Apache License 2.0 is a permissive free software license written by the Apache Software Foundation, providing an explicit grant of patent rights from contributors to users.",
    extHomeURL: "https://en.wikipedia.org/wiki/Apache_License_2.0",
    isFSFLibre: true,
    isOSIApproved: true,
    keywords: ["apache", "apache-2"],
    spdx: "Apache-2.0",
  });

  g.license.set("lic+apsl", {
    name: "APSL",
    description: "The Apple Public Source License is a free software license used by Apple for its open-source projects.",
    extHomeURL: "https://en.wikipedia.org/wiki/Apple_Public_Source_License",
    isFSFLibre: false,
    isOSIApproved: true,
    keywords: ["apsl"],
    spdx: "APSL-2.0",
  });

  g.license.set("lic+artistic", {
    name: "AL2.0",
    description: "The Artistic License 2.0 is a free software license used for the Perl programming language and its associated libraries.",
    extHomeURL: "https://en.wikipedia.org/wiki/Artistic_License_2.0",
    isFSFLibre: true,
    isOSIApproved: true,
    keywords: ["artistic", "artistic-2", "artistic-2.0"],
    spdx: "Artistic-2.0",
  });

  g.license.set("lic+boost", {
    name: "Boost",
    description: "The Boost Software License is a permissive free software license used by the Boost C++ Libraries.",
    extHomeURL: "https://en.wikipedia.org/wiki/Boost_Software_License",
    isFSFLibre: true,
    isOSIApproved: true,
    keywords: ["boost"],
    spdx: "BSL-1.0",
  });

  g.license.set("lic+bsd", {
    name: "BSD",
    description:
      "BSD licenses are a family of permissive free software licenses, imposing minimal restrictions on the use and distribution of covered software.",
    extHomeURL: "https://en.wikipedia.org/wiki/BSD_licenses",
    isFSFLibre: true,
    isOSIApproved: true,
    keywords: ["bsd", "bsd3", "bsd4"],
    spdx: "BSD-3-Clause",
  });

  g.license.set("lic+cc-by", {
    name: "CCA",
    description:
      "The Creative Commons Attribution license allows for the sharing and adaptation of works, provided that appropriate credit is given.",
    extHomeURL: "https://en.wikipedia.org/wiki/Creative_Commons_license#Attribution",
    isFSFLibre: false,
    isOSIApproved: false,
    keywords: ["cc-by"],
    spdx: "CC-BY-4.0",
  });

  g.license.set("lic+cecill", {
    name: "CeCILL",
    description: "The CeCILL license is a French free software license compatible with the GNU General Public License.",
    extHomeURL: "https://en.wikipedia.org/wiki/CeCILL",
    isFSFLibre: true,
    isOSIApproved: false,
    keywords: ["cecill"],
    spdx: "CECILL-2.1",
  });

  g.license.set("lic+cpl", {
    name: "CPL",
    description: "The Common Public License is a free software license used by IBM for some of its software projects.",
    extHomeURL: "https://en.wikipedia.org/wiki/Common_Public_License",
    isFSFLibre: true,
    isOSIApproved: true,
    keywords: ["cpl"],
    spdx: "CPL-1.0",
  });

  g.license.set("lic+dual", {
    name: "Dual",
    description: "Dual license allows software to be licensed under two different licenses, providing users with a choice.",
    extHomeURL: "https://en.wikipedia.org/wiki/Dual_license",
    keywords: ["dual-license"],
  });

  g.license.set("lic+epl", {
    name: "EPL",
    description: "The Eclipse Public License is a free software license used by the Eclipse Foundation for its open-source projects.",
    extHomeURL: "https://en.wikipedia.org/wiki/Eclipse_Public_License",
    isFSFLibre: true,
    isOSIApproved: true,
    keywords: ["epl"],
    spdx: "EPL-2.0",
  });

  g.license.set("lic+gnu-gpl", {
    name: "GPL",
    description:
      "The GNU General Public License is a free software license that ensures end users have the freedom to run, study, share, and modify the software.",
    extHomeURL: "https://en.wikipedia.org/wiki/GNU_General_Public_License",
    isFSFLibre: true,
    isOSIApproved: true,
    keywords: ["gpl", "gplv2", "gplv3"],
    spdx: "GPL-3.0-only",
  });

  g.license.set("lic+isc", {
    name: "ISC",
    description: "The ISC License is a permissive free software license similar to the MIT License, with simplified terms.",
    extHomeURL: "https://en.wikipedia.org/wiki/ISC_license",
    isFSFLibre: true,
    isOSIApproved: true,
    keywords: ["isc"],
    spdx: "ISC",
  });

  g.license.set("lic+lgpl", {
    name: "LGPL",
    description: "The GNU Lesser General Public License is a free software license that allows for linking with proprietary software.",
    extHomeURL: "https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License",
    isFSFLibre: true,
    isOSIApproved: true,
    keywords: ["lgpl"],
    spdx: "LGPL-2.1-only",
  });

  g.license.set("lic+mit", {
    name: "MIT",
    description: "The MIT License is a permissive free software license that is very simple and permissive, with very few restrictions.",
    extHomeURL: "https://en.wikipedia.org/wiki/MIT_License",
    isFSFLibre: true,
    isOSIApproved: true,
    keywords: ["mit"],
    spdx: "MIT",
  });

  g.license.set("lic+mpl", {
    name: "MPL",
    description: "The Mozilla Public License is a free software license used by Mozilla for its open-source projects.",
    extHomeURL: "https://en.wikipedia.org/wiki/Mozilla_Public_License",
    isFSFLibre: true,
    isOSIApproved: true,
    keywords: ["mpl"],
    spdx: "MPL-2.0",
  });

  g.license.set("lic+public-domain", {
    name: "PD",
    description: "Public Domain refers to works that are free from copyright restrictions and can be freely used by anyone.",
    extHomeURL: "https://en.wikipedia.org/wiki/Public_domain",
    isFSFLibre: false,
    isOSIApproved: false,
    keywords: ["public-domain"],
  });

  g.license.set("lic+python", {
    name: "PySFL",
    description: "The Python Software Foundation License is a free software license used for Python and related projects.",
    extHomeURL: "https://en.wikipedia.org/wiki/Python_Software_Foundation_License",
    isFSFLibre: true,
    isOSIApproved: true,
    keywords: ["python-software-foundation"],
    spdx: "Python-2.0",
  });

  g.license.set("lic+proprietary", {
    name: "Proprietary",
    description: "Proprietary software is software that is not free or open-source and is subject to restrictions on use and distribution.",
    extHomeURL: "https://en.wikipedia.org/wiki/Proprietary_software",
    isFSFLibre: false,
    isOSIApproved: false,
    keywords: ["proprietary"],
  });

  g.license.set("lic+zlib", {
    name: "zlib",
    description: "The zlib License is a permissive free software license used for the zlib compression library.",
    extHomeURL: "https://en.wikipedia.org/wiki/Zlib_License",
    isFSFLibre: true,
    isOSIApproved: true,
    keywords: ["zlib"],
    spdx: "Zlib",
  });
}
