import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define("pl+Magma", "Magma", {
    name: "Magma",
    websites: [
      {
        kind: "wikipedia",
        title: "Magma",
        href: "https://en.wikipedia.org/wiki/Magma_computer_algebra_system",
      },
      {
        kind: "homepage",
        title: "magma.maths.usyd.edu.au",
        href: "http://magma.maths.usyd.edu.au",
      },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Magma-logo.png/120px-Magma-logo.png",
      },
    ],
    references: {
      stable_release: [
        {
          href: "http://magma.maths.usyd.edu.au/magma/releasenotes/2/27/8/",
          title: "Summary of New Features in Magma V2.27-8",
        },
      ],
      written_in: [
        {
          href: "https://mathstats.uncg.edu/sites/number-theory/summerschool/2016/magma-general/magma-general-4.pdf",
          title: "What is Magma?",
        },
      ],
    },
    releases: [{ version: "2.27", date: "2023-02-22", kind: "stable" }],
    people: [["person+School-of-Mathematics", "designer"]],
  });

  lb.define("pl+Maple", "Maple", {
    name: "Maple",
    websites: [
      { kind: "wikipedia", title: "Maple", href: "https://en.wikipedia.org/wiki/Maple_(software)" },
      {
        kind: "homepage",
        title: "www.maplesoft.com/products/Maple/",
        href: "https://www.maplesoft.com/products/Maple/",
      },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/30/Maple_2015_logo.svg",
      },
    ],
    releases: [
      { version: "unknown", date: "1982-01-01", kind: "first" },
      { version: "unknown", date: "2024-03-06", kind: "stable" },
    ],
    references: {
      stable_release: [
        {
          href: "https://www.maplesoft.com/company/news/releases/2024/2024-03-06-Powerful-AI-Technology-Advances-Maplesoft-Mission-to-Unleash-the-Power-of-Math.aspx",
          title: "Maplesoft Media Releases",
        },
      ],
      available_in: [
        {
          href: "https://www.maplesoft.com/products/languages/",
          title: "International Language Support in Maple",
        },
      ],
    },
    people: [["person+Waterloo-Maple", "designer"]],
    licenses: ["lic+proprietary", "lic+commercial-software"],
    platforms: ["platf+windows", "platf+macos", "platf+linux"],
    influenced: ["pl+Darwin"],
  });

  lb.define("pl+MATLAB", "MATLAB", {
    name: "MATLAB",
    websites: [
      { kind: "wikipedia", title: "MATLAB", href: "https://en.wikipedia.org/wiki/MATLAB" },
    ],
    influenced: [
      "pl+Pure",
      "pl+Fortran",
      "pl+SpeakeasySpeakeasy-(the-interpreted-programming-language)",
      "pl+Julia",
      "pl+APL",
    ],
  });

  lb.define("pl+Max", "Max", {
    name: "Max",
    websites: [
      { kind: "wikipedia", title: "Max", href: "https://en.wikipedia.org/wiki/Max_(software)" },
      {
        kind: "homepage",
        title: "cycling74.com/products/max/",
        href: "https://cycling74.com/products/max/",
      },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Logo_Max_8_software.jpg/180px-Logo_Max_8_software.jpg",
      },
    ],
    references: {
      stable_release: [
        {
          href: "https://cycling74.com/releases/max/8.6.2",
          title: "Max 8.6.2 Release Notes | Cycling '74",
        },
      ],
    },
    releases: [{ version: "8.6.2", date: "2024-01-01", kind: "stable" }],
    licenses: ["lic+proprietary"],
  });

  lb.define("pl+Maxima", "Maxima", {
    name: "Maxima",
    websites: [
      {
        kind: "wikipedia",
        title: "Maxima",
        href: "https://en.wikipedia.org/wiki/Maxima_(software)",
      },
      { kind: "homepage", title: "maxima.sourceforge.io", href: "https://maxima.sourceforge.io/" },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Maxima-new.svg" },
    ],
    releases: [
      { version: "unknown", date: "1982-01-01", kind: "first" },
      { version: "5.47.0", date: "2023-01-01", kind: "stable" },
    ],
    references: {
      stable_release: [
        {
          href: "https://sourceforge.net/p/maxima/mailman/message/37852344/",
          title: "Announcing 5.47.0",
        },
      ],
    },
    licenses: ["lic+gpl"],
  });

  lb.define("pl+Mercury", "Mercury", {
    name: "Mercury",
    websites: [
      {
        kind: "wikipedia",
        title: "Mercury",
        href: "https://en.wikipedia.org/wiki/Mercury_(programming_language)",
      },
      { kind: "homepage", title: "www.mercurylang.org", href: "http://www.mercurylang.org" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Mercury_%28programming_language%29_logo.jpg/121px-Mercury_%28programming_language%29_logo.jpg",
      },
    ],
    releases: [
      { version: "unknown", date: "1995-04-08", kind: "first" },
      { version: "22.01.8", date: "2023-01-01", kind: "stable" },
    ],
    references: {
      stable_release: [
        {
          href: "https://github.com/Mercury-Language/mercury/releases/tag/version-22_01_8",
          title: "Release 22.01.8",
        },
      ],
    },
    extensions: [".m"],
    people: [["person+Zoltan-Somogyi", "designer"]],
    licenses: ["lic+gpl", "lic+lgpl"],
    typeSystems: ["tsys+strong", "tsys+static", "tsys+polymorphic"],
    platforms: [
      "platf+ia-32",
      "platf+x86-64",
      "platf+arm",
      "platf+jvm",
      "platf+cross-platform",
      "platf+unix",
      "platf+linux",
      "platf+macos",
      "platf+bsd",
      "platf+windows",
      "platf+android",
    ],
    influences: ["pl+Prolog", "pl+Hope", "pl+Haskell"],
    influenced: ["pl+Prolog"],
  });

  lb.define("pl+ML", "ML", {
    name: "ML",
    websites: [
      {
        kind: "wikipedia",
        title: "ML",
        href: "https://en.wikipedia.org/wiki/ML_(programming_language)",
      },
    ],
    releases: [{ version: "unknown", date: "1973-01-01", kind: "first" }],
    people: [["person+Robin-Milner", "designer"]],
    paradigms: ["para+multi-paradigm", "para+functional", "para+generic", "para+imperative"],
    typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    dialects: [
      "pl+Futhark",
      "pl+Standard-ML",
      "pl+Alice",
      "pl+MLton",
      "pl+Caml",
      "pl+Reason",
      "pl+OCaml",
      "pl+F-Star",
      "pl+Standard-ML-of-New-Jersey",
      "pl+ATS",
    ],
    influences: [
      "pl+ISWIM",
      "pl+Clojure",
      "pl+Coq",
      "pl+Cyclone",
      "pl+C-Plus-Plus",
      "pl+Elm",
      "pl+F-Sharp",
      "pl+F-Star",
      "pl+Haskell",
      "pl+Idris",
      "pl+Kotlin",
      "pl+Miranda",
      "pl+Nemerle",
      "pl+OCaml",
      "pl+Opa",
      "pl+Erlang",
      "pl+Rust",
      "pl+Scala",
      "pl+Standard-ML",
    ],
    influenced: [
      "pl+Idris",
      "pl+Standard-ML",
      "pl+Claire",
      "pl+Alice",
      "pl+Pict",
      "pl+Lisp",
      "pl+Caml",
      "pl+Bosque",
      "pl+Nemerle",
      "pl+Clojure",
      "pl+C-Plus-Plus",
      "pl+Orc",
      "pl+Miranda",
      "pl+ParaSail",
      "pl+ISWIM",
      "pl+Lean",
      "pl+Haskell",
      "pl+Kotlin",
      "pl+Ceylon",
      "pl+ATS",
    ],
  });

  lb.define("pl+Modelica", "Modelica", {
    name: "Modelica",
    websites: [
      { kind: "wikipedia", title: "Modelica", href: "https://en.wikipedia.org/wiki/Modelica" },
      { kind: "homepage", title: "www.modelica.org", href: "https://www.modelica.org/" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Modelica_Language.png/300px-Modelica_Language.png",
      },
    ],
    releases: [
      { version: "unknown", date: "1997-01-01", kind: "first" },
      { version: "3.6", date: "2023-01-01", kind: "stable" },
    ],
    extensions: [".mo"],
    licenses: ["lic+cc-by-sa"],
    paradigms: ["para+declarative"],
    platforms: ["platf+cross-platform"],
    implementations: [
      "pl+AMESim",
      "pl+CATIA",
      "pl+Dymola",
      "pl+JModelica.org",
      "pl+MapleSim",
      "pl+Wolfram-SystemModeler",
      "pl+OpenModelica",
      "pl+Scicos",
      "pl+SimulationX",
      "pl+Xcos",
    ],
  });

  lb.define("pl+Mojo", "Mojo", {
    name: "Mojo",
    websites: [
      {
        kind: "wikipedia",
        title: "Mojo",
        href: "https://en.wikipedia.org/wiki/Mojo_(programming_language)",
      },
      { kind: "homepage", title: "www.modular.com/mojo", href: "https://www.modular.com/mojo" },
    ],
    releases: [
      { version: "unknown", date: "2023-01-01", kind: "first" },
      { version: "24.4", date: "2024-05-24", kind: "preview" },
    ],
    people: [["person+Chris-Lattner", "designer"]],
    licenses: ["lic+proprietary"],
    paradigms: ["para+multi-paradigm", "para+imperative", "para+functional", "para+generic"],
    typeSystems: [
      "tsys+affine",
      "tsys+inferred",
      "tsys+nominative",
      "tsys+duck",
      "tsys+static",
      "tsys+dynamic",
      "tsys+strong",
    ],
    platforms: ["platf+cross-platform"],
    influenced: ["pl+Python"],
  });

  lb.define("pl+mruby", "mruby", {
    name: "mruby",
    websites: [
      { kind: "wikipedia", title: "mruby", href: "https://en.wikipedia.org/wiki/Mruby" },
      { kind: "homepage", title: "mruby.org", href: "https://mruby.org" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Mruby_logo_red.svg",
      },
    ],
    releases: [
      { version: "unknown", date: "2012-04-20", kind: "first" },
      { version: "3.3.0", date: "2024-01-01", kind: "stable" },
    ],
    references: {
      stable_release: [
        { href: "https://github.com/mruby/mruby/releases/tag/3.3.0", title: "Release 3.3.0" },
        {
          href: "https://mruby.org/releases/2024/02/14/mruby-3.3.0-released.html",
          title: "mruby 3.3.0 released",
        },
      ],
      license: [{ href: "https://github.com/mruby/mruby/blob/master/LICENSE", title: "LICENSE" }],
    },
    people: [["person+Yukihiro-Matsumoto", "designer"]],
    licenses: ["lic+mit"],
  });
}
