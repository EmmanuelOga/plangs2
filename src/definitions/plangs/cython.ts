import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+cython",
    "Cython",
    {
      name: "Cython",
      websites: [
        { kind: "wikipedia", title: "Cython", href: "https://en.wikipedia.org/wiki/Cython" },
        { kind: "homepage", title: "cython.org", href: "https://cython.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/5/58/Cython_logo.svg" }],
      references: {
        first_appeared: [
          {
            href: "http://www.behnel.de/cythonEP2008/cython-ep2008.html",
            title: "The Cython Compiler for C-Extensions in Python",
          },
        ],
        stable_release: [{ href: "https://github.com/cython/cython/releases/tag/3.0.10", title: "Release 3.0.10" }],
        preview_release: [
          { href: "https://github.com/cython/cython/blob/61c079e/CHANGES.rst", title: "Cython Changelog" },
        ],
        filename_extensions: [
          {
            href: "https://cython.readthedocs.io/en/latest/src/userguide/language_basics.html#cython-file-types",
            title: "Language Basics — Cython 3.0.0a9 documentation",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "2007-07-28", kind: "first" },
        { version: "3.0.10", date: "2024-01-01", kind: "stable" },
        { version: "3.0.0", date: "2023-03-27", kind: "preview" },
      ],
      extensions: [".pyx", ".pxd", ".pxi"],
    },
    {
      dialects: ["pl+python"],
      implementations: ["pl+python"],
      influences: ["pl+c", "pl+python"],
      licenses: ["lic+apache"],
      people: [
        ["person+robert-bradshaw", "designer"],
        ["person+stefan-behnel", "designer"],
      ],
      platforms: ["platf+linux", "platf+mac", "platf+win"],
    },
  );

  /**/
}
