import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+agda",
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
      implementations: ["pl+haskell"],
      influenced: ["pl+idris", "pl+epigram"],
      influences: ["pl+coq", "pl+epigram", "pl+haskell", "pl+idris"],
      licenses: ["lic+bsd-like"],
      paradigms: ["para+functional"],
      people: [["person+ulf-norell", "designer"]],
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
    "pl+apl",
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
      dialects: ["pl+aplx"],
      implementations: ["pl+aplx"],
      influenced: [
        "pl+futhark",
        "pl+wolfram-language",
        "pl+a-plus",
        "pl+matlab-(programming-language)matlab-(software)",
        "pl+go",
        "pl+k",
        "pl+fp",
        "pl+nial",
        "pl+speakeasyspeakeasy-(the-interpreted-programming-language)",
        "pl+s",
        "pl+j",
        "pl+perl-data-language-(pdl)",
        "pl+q",
        "pl+self",
        "pl+sac",
        "pl+python",
        "pl+snap-",
      ],
      influences: [
        "pl+mathematical-notation",
        "pl+a-and-a-plus",
        "pl+c-plus-plus",
        "pl+fp",
        "pl+j",
        "pl+k",
        "pl+matlab",
        "pl+nial",
        "pl+ppl",
        "pl+python",
        "pl+q-(kdb)",
        "pl+s",
        "pl+snap-",
        "pl+speakeasy",
        "pl+wolfram-language",
      ],
      licenses: ["lic+proprietary", "lic+open-source"],
      paradigms: ["para+array", "para+functional", "para+structured", "para+modular"],
      people: [
        ["person+larry-breed", "designer"],
        ["person+dick-lathwell", "designer"],
        ["person+roger-moore", "designer"],
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+arc",
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
      dialects: ["pl+lisp"],
      implementations: ["pl+racket"],
      influences: ["pl+lisp", "pl+scheme"],
      licenses: ["lic+artistic"],
      paradigms: ["para+multi-paradigm", "para+functional", "para+meta", "para+imperative"],
      people: [["person+paul-graham", "designer"]],
      platforms: ["platf+ia-32", "platf+x86-64", "platf+linux"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+assemblyscript",
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
      influenced: ["pl+arkts", "pl+javascript", "pl+typescript"],
      influences: ["pl+javascript", "pl+typescript", "pl+webassembly"],
      licenses: ["lic+apache-2"],
      paradigms: ["para+multi-paradigm", "para+functional", "para+generic", "para+imperative", "para+objects"],
      people: [
        ["person+daniel-wirtz", "designer"],
        ["person+max-graey", "designer"],
      ],
      typeSystems: ["tsys+static"],
    },
  );
}
