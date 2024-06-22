import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+oberon",
    "Oberon",
    {
      name: "Oberon",
      websites: [
        { kind: "wikipedia", title: "Oberon", href: "https://en.wikipedia.org/wiki/Oberon_(programming_language)" },
        { kind: "homepage", title: "projectoberon.net", href: "https://projectoberon.net" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/9/97/Oberon_programming_language_logo.svg",
        },
      ],
      releases: [
        { version: "unknown", date: "1987-01-01", kind: "first" },
        { version: "unknown", date: "2020-03-06", kind: "stable" },
      ],
    },
    {
      dialects: ["pl+active-oberon", "pl+oberon-2", "pl+obliq"],
      influenced: [
        "pl+active-oberon",
        "pl+component-pascal",
        "pl+go",
        "pl+java",
        "pl+modula-2",
        "pl+modula-3",
        "pl+nim",
        "pl+oberon-2",
        "pl+object-oberon",
        "pl+obliq",
        "pl+pascal",
        "pl+v",
        "pl+zonnon",
      ],
      influences: [
        "pl+active-oberon",
        "pl+component-pascal",
        "pl+go",
        "pl+modula-2",
        "pl+nim",
        "pl+oberon-2",
        "pl+v-(vlang)",
        "pl+zonnon",
      ],
      paradigms: ["para+imperative", "para+modular", "para+objects", "para+structured"],
      platforms: [
        "platf+amiga",
        "platf+arm",
        "platf+atari",
        "platf+ia-32",
        "platf+linux",
        "platf+windows",
        "platf+x86-64",
      ],
      typeSystems: ["tsys+dynamic", "tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+objective-c",
    "Objective-C",
    {
      name: "Objective-C",
      websites: [
        { kind: "wikipedia", title: "Objective-C", href: "https://en.wikipedia.org/wiki/Objective-C%2B%2B" },
        {
          kind: "homepage",
          title: "developer.apple.com",
          href: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html",
        },
        { kind: "wikipedia", title: "Objective-C", href: "https://en.wikipedia.org/wiki/Objective-C" },
      ],
      releases: [
        { version: "unknown", date: "1984-01-01", kind: "first" },
        { version: "2.0", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "https://web.archive.org/web/20160720034718/https://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Articles/ocrtVersionsPlatforms.html",
            title: "Runtime Versions and Platforms",
          },
        ],
        influenced: [
          {
            href: "https://web.archive.org/web/20140604061001/http://nondot.org/sabre/",
            title: "Chris Lattner's Homepage",
          },
        ],
      },
      extensions: [".h", ".m", ".mm", ".M"],
    },
    {
      implementations: ["pl+clang", "pl+gcc"],
      influenced: ["pl+arkts", "pl+c", "pl+cobra", "pl+java", "pl+logtalk", "pl+nu", "pl+smalltalk"],
      influences: ["pl+c", "pl+groovy", "pl+java", "pl+nu", "pl+smalltalk", "pl+swift"],
      people: [["person+brad-cox", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+static", "tsys+weak"],
    },
  );

  /**/

  lb.define("pl+openacc", "OpenACC", {
    name: "OpenACC",
    websites: [
      { kind: "wikipedia", title: "OpenACC", href: "https://en.wikipedia.org/wiki/OpenACC" },
      { kind: "homepage", title: "www.openacc.org", href: "https://www.openacc.org/" },
    ],
    releases: [{ version: "3.2", date: "2021-01-01", kind: "stable" }],
  });

  /**/

  lb.define(
    "pl+openmp",
    "OpenMP",
    {
      name: "OpenMP",
      websites: [
        { kind: "wikipedia", title: "OpenMP", href: "https://en.wikipedia.org/wiki/OpenMP" },
        { kind: "homepage", title: "openmp.org", href: "http://openmp.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/OpenMP_logo.png/180px-OpenMP_logo.png",
        },
      ],
      references: {
        original_authors: [
          {
            href: "https://web.archive.org/web/20130809153922/http://openmp.org/wp/about-openmp/",
            title: "About the OpenMP ARB and",
          },
        ],
        developers: [
          {
            href: "https://web.archive.org/web/20130809153922/http://openmp.org/wp/about-openmp/",
            title: "About the OpenMP ARB and",
          },
        ],
      },
      releases: [{ version: "5.2", date: "2021-01-01", kind: "stable" }],
    },
    { influenced: ["pl+cilkopencilkcilk-plus"] },
  );

  /**/
}
