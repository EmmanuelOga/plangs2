import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+little-b")
    .merge({
      name: "Little b",
      websites: [
        { kind: "wikipedia", title: "Little b", href: "https://en.wikipedia.org/wiki/Little_b_(programming_language)" },
        {
          kind: "homepage",
          title: "www.littleb.org",
          href: "https://web.archive.org/web/20051102195348/http://www.littleb.org/",
        },
      ],
      releases: [{ name: "Little b", version: "1.6.0", date: "2008-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+linux", "pl+mac-os-x", "pl+win"])
    .addInfluences(["pl+lisp"])
    .addParadigms(["para+functional"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/
}
