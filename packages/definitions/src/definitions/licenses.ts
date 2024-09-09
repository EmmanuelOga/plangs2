import type { PlangsGraph } from "@plangs/plangs";
import { wikipedia } from "@plangs/plangs/util";

export function define(g: PlangsGraph) {
  g.n_licenses.set("lic+bsd", {
    name: "BSD",
    keywords: ["bsd", "bsd3", "bsd4"],
    description:
      "BSD licenses are a family of permissive free software licenses, imposing minimal restrictions on the use and distribution of covered software.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/BSD_licenses", "BSD licenses"), {}],
    spdx: "BSD-3-Clause",
    isFSFLibre: true,
    isOSIApproved: true,
  });

  g.n_licenses.set("lic+afl", {
    name: "Academic Free License",
    keywords: ["afl", "afl-3"],
    description: "The Academic Free License is a permissive free software license with provisions for academic use.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Academic_Free_License", "Academic Free License")],
    spdx: "AFL-3.0",
    isFSFLibre: true,
    isOSIApproved: true,
  });

  g.n_licenses.set("lic+agpl", {
    name: "Affero General Public License",
    keywords: ["agpl", "agpl-3.0-or-later"],
    description:
      "The Affero General Public License is a free software license that requires the source code to be made available to all users who interact with the software over a network.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Affero_General_Public_License", "Affero General Public License")],
    spdx: "AGPL-3.0-only",
    isFSFLibre: true,
    isOSIApproved: true,
  });

  g.n_licenses.set("lic+apache", {
    name: "Apache License 2.0",
    keywords: ["apache", "apache-2"],
    description:
      "The Apache License 2.0 is a permissive free software license written by the Apache Software Foundation, providing an explicit grant of patent rights from contributors to users.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Apache_License_2.0", "Apache License 2.0")],
    spdx: "Apache-2.0",
    isFSFLibre: true,
    isOSIApproved: true,
  });

  g.n_licenses.set("lic+apsl", {
    name: "Apple Public Source License",
    keywords: ["apsl"],
    description: "The Apple Public Source License is a free software license used by Apple for its open-source projects.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Apple_Public_Source_License", "Apple Public Source License")],
    spdx: "APSL-2.0",
    isFSFLibre: false,
    isOSIApproved: true,
  });

  g.n_licenses.set("lic+artistic", {
    name: "Artistic License 2.0",
    keywords: ["artistic", "artistic-2", "artistic-2.0"],
    description: "The Artistic License 2.0 is a free software license used for the Perl programming language and its associated libraries.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Artistic_License_2.0", "Artistic License 2.0")],
    spdx: "Artistic-2.0",
    isFSFLibre: true,
    isOSIApproved: true,
  });

  g.n_licenses.set("lic+boost", {
    name: "Boost Software License",
    keywords: ["boost"],
    description: "The Boost Software License is a permissive free software license used by the Boost C++ Libraries.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Boost_Software_License", "Boost Software License")],
    spdx: "BSL-1.0",
    isFSFLibre: true,
    isOSIApproved: true,
  });

  g.n_licenses.set("lic+cecill", {
    name: "CeCILL",
    keywords: ["cecill"],
    description: "The CeCILL license is a French free software license compatible with the GNU General Public License.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/CeCILL", "CeCILL")],
    spdx: "CECILL-2.1",
    isFSFLibre: true,
    isOSIApproved: false,
  });

  g.n_licenses.set("lic+cpl", {
    name: "Common Public License",
    keywords: ["cpl"],
    description: "The Common Public License is a free software license used by IBM for some of its software projects.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Common_Public_License", "Common Public License")],
    spdx: "CPL-1.0",
    isFSFLibre: true,
    isOSIApproved: true,
  });

  g.n_licenses.set("lic+cc-by", {
    name: "Creative Commons Attribution",
    keywords: ["cc-by"],
    description:
      "The Creative Commons Attribution license allows for the sharing and adaptation of works, provided that appropriate credit is given.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Creative_Commons_license#Attribution", "Creative Commons Attribution")],
    spdx: "CC-BY-4.0",
    isFSFLibre: false,
    isOSIApproved: false,
  });

  g.n_licenses.set("lic+dual", {
    name: "Dual License",
    keywords: ["dual-license"],
    description: "A dual license allows software to be licensed under two different licenses, providing users with a choice.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Dual_license", "Dual License")],
  });

  g.n_licenses.set("lic+epl", {
    name: "Eclipse Public License",
    keywords: ["epl"],
    description: "The Eclipse Public License is a free software license used by the Eclipse Foundation for its open-source projects.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Eclipse_Public_License", "Eclipse Public License")],
    spdx: "EPL-2.0",
    isFSFLibre: true,
    isOSIApproved: true,
  });

  g.n_licenses.set("lic+gnu-gpl", {
    name: "GNU General Public License",
    keywords: ["gpl", "gplv2", "gplv3"],
    description:
      "The GNU General Public License is a free software license that ensures end users have the freedom to run, study, share, and modify the software.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/GNU_General_Public_License", "GNU General Public License")],
    spdx: "GPL-3.0-only",
    isFSFLibre: true,
    isOSIApproved: true,
  });

  g.n_licenses.set("lic+lgpl", {
    name: "GNU Lesser General Public License",
    keywords: ["lgpl"],
    description: "The GNU Lesser General Public License is a free software license that allows for linking with proprietary software.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License", "GNU Lesser General Public License")],
    spdx: "LGPL-2.1-only",
    isFSFLibre: true,
    isOSIApproved: true,
  });

  g.n_licenses.set("lic+isc", {
    name: "ISC License",
    keywords: ["isc"],
    description: "The ISC License is a permissive free software license similar to the MIT License, with simplified terms.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/ISC_license", "ISC License")],
    spdx: "ISC",
    isFSFLibre: true,
    isOSIApproved: true,
  });

  g.n_licenses.set("lic+mit", {
    name: "MIT License",
    keywords: ["mit"],
    description: "The MIT License is a permissive free software license that is very simple and permissive, with very few restrictions.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/MIT_License", "MIT License")],
    spdx: "MIT",
    isFSFLibre: true,
    isOSIApproved: true,
  });

  g.n_licenses.set("lic+mpl", {
    name: "Mozilla Public License",
    keywords: ["mpl"],
    description: "The Mozilla Public License is a free software license used by Mozilla for its open-source projects.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Mozilla_Public_License", "Mozilla Public License")],
    spdx: "MPL-2.0",
    isFSFLibre: true,
    isOSIApproved: true,
  });

  g.n_licenses.set("lic+public-domain", {
    name: "Public Domain",
    keywords: ["public-domain"],
    description: "Public Domain refers to works that are free from copyright restrictions and can be freely used by anyone.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Public_domain", "Public Domain")],
    isFSFLibre: false,
    isOSIApproved: false,
  });

  g.n_licenses.set("lic+python", {
    name: "Python Software Foundation License",
    keywords: ["python-software-foundation"],
    description: "The Python Software Foundation License is a free software license used for Python and related projects.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Python_Software_Foundation_License", "Python Software Foundation License")],
    spdx: "Python-2.0",
    isFSFLibre: true,
    isOSIApproved: true,
  });

  g.n_licenses.set("lic+zlib", {
    name: "zlib License",
    keywords: ["zlib"],
    description: "The zlib License is a permissive free software license used for the zlib compression library.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Zlib_License", "zlib License")],
    spdx: "Zlib",
    isFSFLibre: true,
    isOSIApproved: true,
  });
}
