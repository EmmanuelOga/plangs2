import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+gnu-guile",
    "GNU Guile",
    {
      name: "GNU Guile",
      websites: [
        { kind: "wikipedia", title: "GNU Guile", href: "https://en.wikipedia.org/wiki/GNU_Guile" },
        { kind: "homepage", title: "gnu.org/software/guile", href: "https://gnu.org/software/guile" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/b/b3/GNU-Guile-logo.svg" }],
      releases: [
        { version: "unknown", date: "1993-01-01", kind: "first" },
        { version: "3.0.9", date: "2023-01-25", kind: "stable" },
      ],
      extensions: [],
    },
    {
      influenced: ["pl+scm", "pl+siod"],
      influences: ["pl+lisp", "pl+scheme", "pl+scm"],
      licenses: ["lic+lgpl"],
      people: [
        ["person+aubrey-jaffer", "designer"],
        ["person+miles-bader", "designer"],
        ["person+tom-lord", "designer"],
      ],
      platforms: [
        "platf+aarch64",
        "platf+arm",
        "platf+bsd",
        "platf+cygwin",
        "platf+ia-32",
        "platf+linux",
        "platf+mingw",
        "platf+mips",
        "platf+win",
        "platf+x86-64",
      ],
    },
  );

  /**/
}
