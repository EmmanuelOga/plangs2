import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+gnu-guile")
    .merge({
      name: "Guile",
      websites: [{ kind: "wikipedia", title: "GNU Guile", href: "https://en.wikipedia.org/wiki/GNU_Guile" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/b/b3/GNU-Guile-logo.svg" }],
      releases: [{ version: "3.0.9", date: "2023-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+lisp", "pl+scheme", "pl+scm", "pl+siod"])
    .addLicenses(["lic+lgpl"])
    .addPlatforms([
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
    ]);

  /**/
}
