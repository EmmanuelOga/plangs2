import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+cython", {
      name: "Cython",
      description:
        "Cython (/ˈsaɪθɒn/) is a superset of the programming language Python, which allows developers to write Python code (with optional, C-inspired syntax extensions) that yields performance comparable to that of C.",
      firstAppeared: "2007-01-01",
      extensions: [".pxd", ".pxi", ".pyx"],
      websites: [
        { href: "https://cython.org/", title: "cython.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Cython", title: "Cython", kind: "wikipedia" },
      ],
      releases: [
        { version: "3.0.11", date: "2024-01-01" },
        { version: "3.0.0", date: "2023-01-01" },
      ],
      images: [{ kind: "logo", title: "Cython", url: "/images/plangs/c/cython/logo.png" }],
    })
    .addDialectOf(["pl+python"])
    .addInfluencedBy(["pl+c", "pl+python"])
    .addLicenses(["license+apache"])
    .addPlatforms(["plat+apple", "plat+linux", "plat+windows"])
    .addWrittenIn(["pl+python"]);
}
