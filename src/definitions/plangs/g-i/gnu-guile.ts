import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+gnu-guile",
    {
      name: "Guile",
      websites: [{ kind: "wikipedia", title: "GNU Guile", href: "https://en.wikipedia.org/wiki/GNU_Guile" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/b/b3/GNU-Guile-logo.svg" }],
      releases: [{ version: "3.0.9", date: "2023-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+lisp", "pl+scheme", "pl+scm", "pl+siod"],
      licenses: ["lic+lgpl"],
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
}
