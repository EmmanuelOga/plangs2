import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+Agda",
    "Agda",
    {
      name: "Agda",
      websites: [
        { kind: "wikipedia", title: "Agda", href: "https://en.wikipedia.org/wiki/Agda_(programming_language)" },
        { kind: "wikipedia", title: "Agda", href: "https://en.wikipedia.org/wiki/Agda_(theorem_prover)" },
        { kind: "homepage", title: "wiki.portal.chalmers.se/agda", href: "http://wiki.portal.chalmers.se/agda" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/7/71/Agda%27s_official_logo.svg" }],
      releases: [
        { version: "1.0", date: "2007-01-01", kind: "first" },
        { version: "2.6.3", date: "2023-01-30", kind: "stable" },
      ],
      references: { license: [{ href: "http://code.haskell.org/Agda/LICENSE", title: "Agda license file" }] },
      extensions: [".agda", ".lagda"],
    },
    {
      implementations: ["pl+Haskell"],
      influenced: ["pl+Idris", "pl+Epigram"],
      influences: ["pl+Coq", "pl+Epigram", "pl+Haskell", "pl+Idris"],
      licenses: ["lic+bsd-like"],
      paradigms: ["para+functional"],
      people: [["person+Ulf-Norell", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: [
        "tsys+strong",
        "tsys+static",
        "tsys+dependent",
        "tsys+nominative",
        "tsys+manifest",
        "tsys+inferred",
      ],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+APL",
    "APL",
    {
      name: "APL",
      websites: [
        { kind: "wikipedia", title: "APL", href: "https://en.wikipedia.org/wiki/APL_(programming_language)" },
        { kind: "wikipedia", title: "APL", href: "https://en.wikipedia.org/wiki/APL_programming_language" },
        { kind: "homepage", title: "aplwiki.com", href: "https://aplwiki.com/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/APL_%28programming_language%29_logo.svg",
        },
      ],
      references: {
        first_appeared: [
          { href: "http://www.jsoftware.com/papers/APLQA.htm#APL_birthday", title: "APL Quotations and Anecdotes" },
        ],
        influenced: [{ href: "https://en.cppreference.com/w/cpp/algorithm/iota", title: "std::iota" }],
      },
      releases: [
        { version: "unknown", date: "1966-11-27", kind: "first" },
        { version: "unknown", date: "2001-02-01", kind: "stable" },
      ],
    },
    {
      dialects: ["pl+APLX"],
      implementations: ["pl+APLX"],
      influenced: [
        "pl+Futhark",
        "pl+Wolfram-Language",
        "pl+A-Plus",
        "pl+MATLAB-(programming-language)MATLAB-(software)",
        "pl+Go",
        "pl+K",
        "pl+FP",
        "pl+Nial",
        "pl+SpeakeasySpeakeasy-(the-interpreted-programming-language)",
        "pl+S",
        "pl+J",
        "pl+Perl-Data-Language-(PDL)",
        "pl+q",
        "pl+Self",
        "pl+SAC",
        "pl+Python",
        "pl+Snap-",
      ],
      influences: [
        "pl+Mathematical-notation",
        "pl+A-and-A-Plus",
        "pl+C-Plus-Plus",
        "pl+FP",
        "pl+J",
        "pl+K",
        "pl+MATLAB",
        "pl+Nial",
        "pl+PPL",
        "pl+Python",
        "pl+q-(kdb)",
        "pl+S",
        "pl+Snap-",
        "pl+Speakeasy",
        "pl+Wolfram-Language",
      ],
      licenses: ["lic+proprietary", "lic+open-source"],
      paradigms: ["para+array", "para+functional", "para+structured", "para+modular"],
      people: [
        ["person+Larry-Breed", "designer"],
        ["person+Dick-Lathwell", "designer"],
        ["person+Roger-Moore", "designer"],
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+Arc",
    "Arc",
    {
      name: "Arc",
      websites: [
        { kind: "wikipedia", title: "Arc", href: "https://en.wikipedia.org/wiki/Arc_(programming_language)" },
        { kind: "homepage", title: "arclanguage.org", href: "http://arclanguage.org" },
      ],
      releases: [
        { version: "unknown", date: "2008-01-29", kind: "first" },
        { version: "3.2", date: "2018-10-28", kind: "stable" },
      ],
      references: {
        stable_release: [{ href: "http://arclanguage.org/item?id=20772", title: "Arc Forum: Tell Arc: Arc 3.2" }],
      },
      extensions: [".arc"],
    },
    {
      dialects: ["pl+Lisp"],
      implementations: ["pl+Racket"],
      influences: ["pl+Lisp", "pl+Scheme"],
      licenses: ["lic+artistic"],
      paradigms: ["para+multi-paradigm", "para+functional", "para+meta", "para+imperative"],
      people: [["person+Paul-Graham", "designer"]],
      platforms: ["platf+ia-32", "platf+x86-64", "platf+linux"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+AssemblyScript",
    "AssemblyScript",
    {
      name: "AssemblyScript",
      websites: [
        { kind: "wikipedia", title: "AssemblyScript", href: "https://en.wikipedia.org/wiki/AssemblyScript" },
        { kind: "homepage", title: "www.assemblyscript.org", href: "https://www.assemblyscript.org/" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/00/AssemblyScript_logo_2020.svg" },
      ],
      references: {
        designed_by: [
          { href: "https://github.com/AssemblyScript/working-group", title: "AssemblyScript Working Group" },
          { href: "https://www.youtube.com/watch?v=ZlL1nduatZQ", title: "WebAssembly for Javascript Developers" },
        ],
        developer: [{ href: "https://github.com/AssemblyScript/working-group", title: "AssemblyScript Working Group" }],
        first_appeared: [
          { href: "https://www.npmjs.com/package/assemblyscript/v/0.1.0", title: "assemblyscript 0.1.0" },
        ],
        stable_release: [
          { href: "https://github.com/AssemblyScript/assemblyscript/releases/tag/v0.27.27", title: "Release 0.27.27" },
        ],
        license: [{ href: "https://github.com/AssemblyScript/assemblyscript/blob/master/LICENSE", title: "LICENSE" }],
      },
      releases: [
        { version: "unknown", date: "2017-01-01", kind: "first" },
        { version: "0.27.27", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [],
    },
    {
      influenced: ["pl+ArkTS", "pl+JavaScript", "pl+TypeScript"],
      influences: ["pl+JavaScript", "pl+TypeScript", "pl+WebAssembly"],
      licenses: ["lic+apache-2"],
      paradigms: ["para+multi-paradigm", "para+functional", "para+generic", "para+imperative", "para+objects"],
      people: [
        ["person+Daniel-Wirtz", "designer"],
        ["person+Max-Graey", "designer"],
      ],
      typeSystems: ["tsys+static"],
    },
  );
}
