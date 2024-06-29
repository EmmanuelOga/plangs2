import type { PlangsGraph } from "../../../entities/plangs_graph";

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
      influences: ["pl+agda", "pl+clean", "pl+coq", "pl+epigram", "pl+f-sharp", "pl+haskell", "pl+ml", "pl+rust"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+functional"],
      people: [["person+edwin-brady", { role: "designer" }]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );
}
