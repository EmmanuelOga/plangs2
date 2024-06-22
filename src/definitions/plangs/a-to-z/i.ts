import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+idris",
    "Idris",
    {
      name: "Idris",
      websites: [
        { kind: "wikipedia", title: "Idris", href: "https://en.wikipedia.org/wiki/Idris_(programming_language)" },
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
          { href: "https://github.com/idris-lang/Idris-dev/releases/tag/v1.3.4", title: "Release 1.3.4" },
        ],
        preview_release: [
          { href: "https://github.com/idris-lang/Idris2/releases/tag/v0.7.0", title: "Idris 2 version 0.7.0 Released" },
        ],
        influenced_by: [
          { href: "http://docs.idris-lang.org/en/latest/reference/uniqueness-types.html", title: "Uniqueness Types" },
          { href: "http://www.idris-lang.org/", title: "Idris, a language with dependent types" },
        ],
      },
      releases: [
        { version: "unknown", date: "2007-01-01", kind: "first" },
        { version: "1.3.4", date: "2021-10-22", kind: "stable" },
        { version: "0.7.0", date: "2023-12-22", kind: "preview" },
      ],
      extensions: [".idr", ".lidr"],
    },
    {
      influenced: ["pl+agda", "pl+clean", "pl+epigram", "pl+ml", "pl+rust"],
      influences: ["pl+agda", "pl+clean", "pl+coq", "pl+epigram", "pl+f-sharp", "pl+haskell", "pl+ml", "pl+rust"],
      licenses: ["lic+bsd"],
      paradigms: ["para+functional"],
      people: [["person+edwin-brady", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+inform",
    "Inform",
    {
      name: "Inform",
      websites: [{ kind: "wikipedia", title: "Inform", href: "https://en.wikipedia.org/wiki/Inform" }],
    },
    { influenced: ["pl+corvision"] },
  );

  /**/

  lb.define(
    "pl+io",
    "Io",
    {
      name: "Io",
      websites: [
        { kind: "wikipedia", title: "Io", href: "https://en.wikipedia.org/wiki/Io_(programming_language)" },
        { kind: "homepage", title: "iolanguage.org", href: "https://iolanguage.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/Io-logo.svg" }],
      releases: [
        { version: "unknown", date: "2002-01-01", kind: "first" },
        { version: "unknown", date: "2017-08-11", kind: "stable" },
      ],
      references: { stable_release: [{ href: "https://github.com/IoLanguage/io/releases", title: "Io Releases" }] },
    },
    {
      influenced: ["pl+lisp", "pl+newtonscript", "pl+self", "pl+smalltalk", "pl+urbiscript"],
      influences: ["pl+act1", "pl+lisp", "pl+lua", "pl+newtonscript", "pl+python", "pl+self", "pl+smalltalk"],
      paradigms: ["para+objects", "para+prototypes"],
      people: [
        ["person+jeremy-tregunna", "designer"],
        ["person+jonathan-wright", "designer"],
        ["person+steve-dekorte", "designer"],
      ],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+ironpython",
    "IronPython",
    {
      name: "IronPython",
      websites: [
        { kind: "wikipedia", title: "IronPython", href: "https://en.wikipedia.org/wiki/IronPython" },
        { kind: "homepage", title: "ironpython.net", href: "https://ironpython.net" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/9/99/IronPython_3_logo.svg" }],
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
    },
    { licenses: ["lic+apache-2"], platforms: ["platf+.net", "platf+mono"] },
  );

  /**/
}
