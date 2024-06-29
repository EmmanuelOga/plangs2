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
      influences: ["pl+scm", "pl+siod", "pl+lisp", "pl+scheme"],
      licenses: ["lic+lgpl"],
      people: ["person+aubrey-jaffer", "person+tom-lord", "person+miles-bader"],
      platforms: [
        "platf+ia-32",
        "platf+x86-64",
        "platf+aarch64",
        "platf+arm",
        "platf+mips",
        "platf+linux",
        "platf+bsd",
        "platf+win",
        "platf+mingw",
        "platf+cygwin",
      ],
    },
  );
}
