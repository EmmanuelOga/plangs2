import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+cpython", {
      name: "CPython",
      description:
        "CPython is the reference implementation of the Python programming language. Written in C and Python, CPython is the default and most widely used implementation of the Python language.",
      websites: [
        { href: "https://www.python.org/", title: "www.python.org", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/CPython", title: "CPython", kind: "wikipedia" },
      ],
      releases: [{ version: "3.12.0", date: "2023-01-01" }],
    })
    .addLicenses(["license+python"])
    .addWrittenIn(["pl+c"]);
}
