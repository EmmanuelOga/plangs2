import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define("pl+Idris", "Idris", {
    name: "Idris",
    websites: [
      {
        kind: "wikipedia",
        title: "Idris",
        href: "https://en.wikipedia.org/wiki/Idris_(programming_language)",
      },
      { kind: "homepage", title: "idris-lang.org", href: "http://idris-lang.org" },
    ],
    references: {
      first_appeared: [
        {
          href: "https://web.archive.org/web/20080320233322/http://www-fp.cs.st-and.ac.uk/~eb/darcs/Idris/",
          title: "Index of /~eb/darcs/Idris",
        },
      ],
      stable_release: [
        {
          href: "https://github.com/idris-lang/Idris-dev/releases/tag/v1.3.4",
          title: "Release 1.3.4",
        },
      ],
      preview_release: [
        {
          href: "https://github.com/idris-lang/Idris2/releases/tag/v0.7.0",
          title: "Idris 2 version 0.7.0 Released",
        },
      ],
      influenced_by: [
        {
          href: "http://docs.idris-lang.org/en/latest/reference/uniqueness-types.html",
          title: "Uniqueness Types",
        },
        { href: "http://www.idris-lang.org/", title: "Idris, a language with dependent types" },
      ],
    },
    releases: [
      { version: "unknown", date: "2007-01-01", kind: "first" },
      { version: "1.3.4", date: "2021-10-22", kind: "stable" },
      { version: "0.7.0", date: "2023-12-22", kind: "preview" },
    ],
    extensions: [".idr", ".lidr"],
    people: [["person+Edwin-Brady", "designer"]],
    licenses: ["lic+bsd"],
    paradigms: ["para+functional"],
    typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    platforms: ["platf+cross-platform"],
    influences: [
      "pl+Agda",
      "pl+Clean",
      "pl+Coq",
      "pl+Epigram",
      "pl+F-Sharp",
      "pl+Haskell",
      "pl+ML",
      "pl+Rust",
    ],
    influenced: ["pl+ML", "pl+Epigram", "pl+Rust", "pl+Agda", "pl+Clean"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Inform", "Inform", {
    name: "Inform",
    websites: [
      { kind: "wikipedia", title: "Inform", href: "https://en.wikipedia.org/wiki/Inform" },
    ],
    influenced: ["pl+CorVision"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Io", "Io", {
    name: "Io",
    websites: [
      {
        kind: "wikipedia",
        title: "Io",
        href: "https://en.wikipedia.org/wiki/Io_(programming_language)",
      },
      { kind: "homepage", title: "iolanguage.org", href: "https://iolanguage.org/" },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/Io-logo.svg" },
    ],
    releases: [
      { version: "unknown", date: "2002-01-01", kind: "first" },
      { version: "unknown", date: "2017-08-11", kind: "stable" },
    ],
    references: {
      stable_release: [{ href: "https://github.com/IoLanguage/io/releases", title: "Io Releases" }],
    },
    people: [
      ["person+Steve-Dekorte", "designer"],
      ["person+Jonathan-Wright", "designer"],
      ["person+Jeremy-Tregunna", "designer"],
    ],
    paradigms: ["para+objects", "para+prototypes"],
    typeSystems: ["tsys+dynamic", "tsys+strong"],
    influences: [
      "pl+Smalltalk",
      "pl+NewtonScript",
      "pl+Self",
      "pl+Lua",
      "pl+Lisp",
      "pl+Python",
      "pl+Act1",
    ],
    influenced: ["pl+Lisp", "pl+NewtonScript", "pl+urbiscript", "pl+Self", "pl+Smalltalk"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+IronPython", "IronPython", {
    name: "IronPython",
    websites: [
      { kind: "wikipedia", title: "IronPython", href: "https://en.wikipedia.org/wiki/IronPython" },
      { kind: "homepage", title: "ironpython.net", href: "https://ironpython.net" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/99/IronPython_3_logo.svg",
      },
    ],
    references: {
      initial_release: [
        {
          href: "https://web.archive.org/web/20171226082609/http://ironpython.codeplex.com/releases/view/423",
          title: "CodePlex Archive",
        },
      ],
    },
    releases: [
      { version: "unknown", date: "2006-09-05", kind: "first" },
      { version: "3.4.1", date: "2023-07-12", kind: "stable" },
      { version: "3.4.0", date: "2022-04-30", kind: "preview" },
    ],
    licenses: ["lic+apache-2"],
    platforms: ["platf+.net", "platf+mono"],
  });
}
