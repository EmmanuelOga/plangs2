import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+sbcl", {
      name: "SBCL",
      description:
        "Steel Bank Common Lisp (SBCL) is a free Common Lisp implementation that features a high-performance native compiler, Unicode support and threading. It is open source software, with a permissive license. In addition to the compiler and runtime system for ANSI Common Lisp, it provides an interactive environment including a debugger, a statistical profiler, a code coverage tool, and many other extensions.",
      websites: [
        { href: "http://www.sbcl.org/", title: "www.sbcl.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/SBCL", title: "SBCL", kind: "wikipedia" },
      ],
      releases: [{ version: "2.4.5", date: "2024-01-01" }],
      images: [{ kind: "screenshot", title: "SBCL", url: "/images/plangs/s/sbcl/screenshot.png" }],
    })
    .addImplements(["pl+common-lisp"])
    .addLicenses(["license+bsd", "license+mit", "license+public-domain"])
    .addPlatforms(["plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+compiler"]);
}
