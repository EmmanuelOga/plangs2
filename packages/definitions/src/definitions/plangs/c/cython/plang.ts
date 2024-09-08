import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+cython", {
      images: [{ kind: "logo", title: "Cython" }],
      name: "Cython",
      description:
        "Cython (/ˈsaɪθɒn/) is a superset of the programming language Python, which allows developers to write Python code (with optional, C-inspired syntax extensions) that yields performance comparable to that of C.",
      websites: [
        { href: "https://cython.org/", title: "cython.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Cython", title: "Cython", kind: "wikipedia" },
      ],
      extensions: [".pxd", ".pxi", ".pyx"],
      releases: [
        { version: "3.0.11", date: "2024-01-01" },
        { version: "3.0.0", date: "2023-01-01" },
      ],
    })
    .addInfluencedBy(["pl+c"])
    .addLicenses(["lic+apache"])
    .addPlatforms(["platf+apple", "platf+linux", "platf+windows"]);
}