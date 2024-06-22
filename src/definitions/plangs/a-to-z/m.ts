import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+magma",
    "Magma",
    {
      name: "Magma",
      websites: [
        { kind: "wikipedia", title: "Magma", href: "https://en.wikipedia.org/wiki/Magma_computer_algebra_system" },
        { kind: "homepage", title: "magma.maths.usyd.edu.au", href: "http://magma.maths.usyd.edu.au" },
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
    },
    { people: [["person+school-of-mathematics", "designer"]] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+maple",
    "Maple",
    {
      name: "Maple",
      websites: [
        { kind: "wikipedia", title: "Maple", href: "https://en.wikipedia.org/wiki/Maple_(software)" },
        {
          kind: "homepage",
          title: "www.maplesoft.com/products/Maple/",
          href: "https://www.maplesoft.com/products/Maple/",
        },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/30/Maple_2015_logo.svg" }],
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
          { href: "https://www.maplesoft.com/products/languages/", title: "International Language Support in Maple" },
        ],
      },
    },
    {
      influenced: ["pl+darwin"],
      licenses: ["lic+commercial-software", "lic+proprietary"],
      people: [["person+waterloo-maple", "designer"]],
      platforms: ["platf+linux", "platf+macos", "platf+windows"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+matlab",
    "MATLAB",
    {
      name: "MATLAB",
      websites: [{ kind: "wikipedia", title: "MATLAB", href: "https://en.wikipedia.org/wiki/MATLAB" }],
    },
    {
      influenced: [
        "pl+apl",
        "pl+fortran",
        "pl+julia",
        "pl+pure",
        "pl+speakeasyspeakeasy-(the-interpreted-programming-language)",
      ],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+max",
    "Max",
    {
      name: "Max",
      websites: [
        { kind: "wikipedia", title: "Max", href: "https://en.wikipedia.org/wiki/Max_(software)" },
        { kind: "homepage", title: "cycling74.com/products/max/", href: "https://cycling74.com/products/max/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Logo_Max_8_software.jpg/180px-Logo_Max_8_software.jpg",
        },
      ],
      references: {
        stable_release: [
          { href: "https://cycling74.com/releases/max/8.6.2", title: "Max 8.6.2 Release Notes | Cycling '74" },
        ],
      },
      releases: [{ version: "8.6.2", date: "2024-01-01", kind: "stable" }],
    },
    { licenses: ["lic+proprietary"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+maxima",
    "Maxima",
    {
      name: "Maxima",
      websites: [
        { kind: "wikipedia", title: "Maxima", href: "https://en.wikipedia.org/wiki/Maxima_(software)" },
        { kind: "homepage", title: "maxima.sourceforge.io", href: "https://maxima.sourceforge.io/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Maxima-new.svg" }],
      releases: [
        { version: "unknown", date: "1982-01-01", kind: "first" },
        { version: "5.47.0", date: "2023-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          { href: "https://sourceforge.net/p/maxima/mailman/message/37852344/", title: "Announcing 5.47.0" },
        ],
      },
    },
    { licenses: ["lic+gpl"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+mercury",
    "Mercury",
    {
      name: "Mercury",
      websites: [
        { kind: "wikipedia", title: "Mercury", href: "https://en.wikipedia.org/wiki/Mercury_(programming_language)" },
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
    },
    {
      influenced: ["pl+prolog"],
      influences: ["pl+haskell", "pl+hope", "pl+prolog"],
      licenses: ["lic+gpl", "lic+lgpl"],
      people: [["person+zoltan-somogyi", "designer"]],
      platforms: [
        "platf+android",
        "platf+arm",
        "platf+bsd",
        "platf+cross-platform",
        "platf+ia-32",
        "platf+jvm",
        "platf+linux",
        "platf+macos",
        "platf+unix",
        "platf+windows",
        "platf+x86-64",
      ],
      typeSystems: ["tsys+polymorphic", "tsys+static", "tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+ml",
    "ML",
    {
      name: "ML",
      websites: [{ kind: "wikipedia", title: "ML", href: "https://en.wikipedia.org/wiki/ML_(programming_language)" }],
      releases: [{ version: "unknown", date: "1973-01-01", kind: "first" }],
    },
    {
      dialects: [
        "pl+alice",
        "pl+ats",
        "pl+caml",
        "pl+f-star",
        "pl+futhark",
        "pl+mlton",
        "pl+ocaml",
        "pl+reason",
        "pl+standard-ml",
        "pl+standard-ml-of-new-jersey",
      ],
      influenced: [
        "pl+alice",
        "pl+ats",
        "pl+bosque",
        "pl+c-plus-plus",
        "pl+caml",
        "pl+ceylon",
        "pl+claire",
        "pl+clojure",
        "pl+haskell",
        "pl+idris",
        "pl+iswim",
        "pl+kotlin",
        "pl+lean",
        "pl+lisp",
        "pl+miranda",
        "pl+nemerle",
        "pl+orc",
        "pl+parasail",
        "pl+pict",
        "pl+standard-ml",
      ],
      influences: [
        "pl+c-plus-plus",
        "pl+clojure",
        "pl+coq",
        "pl+cyclone",
        "pl+elm",
        "pl+erlang",
        "pl+f-sharp",
        "pl+f-star",
        "pl+haskell",
        "pl+idris",
        "pl+iswim",
        "pl+kotlin",
        "pl+miranda",
        "pl+nemerle",
        "pl+ocaml",
        "pl+opa",
        "pl+rust",
        "pl+scala",
        "pl+standard-ml",
      ],
      paradigms: ["para+functional", "para+generic", "para+imperative", "para+multi-paradigm"],
      people: [["person+robin-milner", "designer"]],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+modelica",
    "Modelica",
    {
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
    },
    {
      implementations: [
        "pl+amesim",
        "pl+catia",
        "pl+dymola",
        "pl+jmodelica.org",
        "pl+maplesim",
        "pl+openmodelica",
        "pl+scicos",
        "pl+simulationx",
        "pl+wolfram-systemmodeler",
        "pl+xcos",
      ],
      licenses: ["lic+cc-by-sa"],
      paradigms: ["para+declarative"],
      platforms: ["platf+cross-platform"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+mojo",
    "Mojo",
    {
      name: "Mojo",
      websites: [
        { kind: "wikipedia", title: "Mojo", href: "https://en.wikipedia.org/wiki/Mojo_(programming_language)" },
        { kind: "homepage", title: "www.modular.com/mojo", href: "https://www.modular.com/mojo" },
      ],
      releases: [
        { version: "unknown", date: "2023-01-01", kind: "first" },
        { version: "24.4", date: "2024-05-24", kind: "preview" },
      ],
      extensions: [],
    },
    {
      influenced: ["pl+python"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+functional", "para+generic", "para+imperative", "para+multi-paradigm"],
      people: [["person+chris-lattner", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: [
        "tsys+affine",
        "tsys+duck",
        "tsys+dynamic",
        "tsys+inferred",
        "tsys+nominative",
        "tsys+static",
        "tsys+strong",
      ],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+mruby",
    "mruby",
    {
      name: "mruby",
      websites: [
        { kind: "wikipedia", title: "mruby", href: "https://en.wikipedia.org/wiki/Mruby" },
        { kind: "homepage", title: "mruby.org", href: "https://mruby.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Mruby_logo_red.svg" }],
      releases: [
        { version: "unknown", date: "2012-04-20", kind: "first" },
        { version: "3.3.0", date: "2024-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          { href: "https://github.com/mruby/mruby/releases/tag/3.3.0", title: "Release 3.3.0" },
          { href: "https://mruby.org/releases/2024/02/14/mruby-3.3.0-released.html", title: "mruby 3.3.0 released" },
        ],
        license: [{ href: "https://github.com/mruby/mruby/blob/master/LICENSE", title: "LICENSE" }],
      },
    },
    { licenses: ["lic+mit"], people: [["person+yukihiro-matsumoto", "designer"]] },
  );
}
