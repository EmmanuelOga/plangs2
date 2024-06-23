import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+cpython",
    "CPython",
    {
      name: "CPython",
      websites: [
        { kind: "wikipedia", title: "CPython", href: "https://en.wikipedia.org/wiki/CPython" },
        { kind: "homepage", title: "www.python.org", href: "https://www.python.org/" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Python_logo_and_wordmark.svg" },
      ],
      releases: [
        { version: "unknown", date: "1994-01-26", kind: "first" },
        { version: "3.12.0", date: "2023-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "https://discuss.python.org/t/python-3-12-0-final-is-here/35186",
            title: "Python 3.12.0 (final) is here",
          },
        ],
      },
    },
    { licenses: ["lic+python-foundation"] },
  );

  /**/
}
