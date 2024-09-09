import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+pypy", {
      images: [{ kind: "logo", title: "PyPy", url: "/images/plangs/p/pypy/logo.png" }],
      name: "PyPy",
      description:
        "PyPy (/ˈpaɪpaɪ/) is an implementation of the Python programming language. PyPy often runs faster than the standard implementation CPython because PyPy uses a just-in-time compiler. Most Python code runs well on PyPy except for code that depends on CPython extensions, which either does not work or incurs some overhead when run in PyPy.",
      websites: [
        { href: "https://pypy.org/", title: "pypy.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/PyPy", title: "PyPy", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [{ version: "7.3.16", date: "2024-01-01" }],
    })
    .addLicenses(["lic+mit"])
    .addPlatforms(["platf+cross"]);
}
