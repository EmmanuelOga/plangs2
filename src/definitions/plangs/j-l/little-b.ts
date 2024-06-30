import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+little-b",
    {
      name: "Little b",
      websites: [
        { kind: "wikipedia", title: "Little b", href: "https://en.wikipedia.org/wiki/Little_b_(programming_language)" },
        {
          kind: "homepage",
          title: "www.littleb.org",
          href: "https://web.archive.org/web/20051102195348/http://www.littleb.org/",
        },
      ],
      releases: [{ version: "1.6.0", date: "2008-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+linux", "pl+mac-os-x", "pl+win"],
      influences: ["pl+lisp"],
      paradigms: ["para+functional"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );
}
