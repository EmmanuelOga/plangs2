import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+q",
    "q",
    {
      name: "q",
      websites: [
        {
          kind: "wikipedia",
          title: "Q",
          href: "https://en.wikipedia.org/wiki/Q_(programming_language_from_Kx_Systems)",
        },
        { kind: "homepage", title: "code.kx.com", href: "http://code.kx.com" },
      ],
      references: {
        first_appeared: [
          {
            href: "https://web.archive.org/web/20070101213150/http://vector.org.uk/weblog/archive/000036.html",
            title: "Q Language Widening the Appeal of Vectors",
          },
        ],
        stable_release: [{ href: "https://code.kx.com/q/ref/releases/ChangesIn4.0/", title: "Changes in 4.0" }],
      },
      releases: [
        { version: "unknown", date: "2003-01-01", kind: "first" },
        { version: "4.0", date: "2020-03-17", kind: "stable" },
      ],
    },
    {
      influenced: ["pl+apl", "pl+k", "pl+pure"],
      influences: ["pl+a-plus", "pl+apl", "pl+k", "pl+scheme"],
      paradigms: ["para+array", "para+functional"],
      people: [["person+arthur-whitney", "designer"]],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/
}
