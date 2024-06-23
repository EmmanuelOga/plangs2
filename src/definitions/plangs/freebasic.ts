import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+freebasic",
    "FreeBASIC",
    {
      name: "FreeBASIC",
      websites: [
        { kind: "wikipedia", title: "FreeBASIC", href: "https://en.wikipedia.org/wiki/FreeBASIC" },
        { kind: "homepage", title: "www.freebasic.net", href: "http://www.freebasic.net" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Fblogo.gif/121px-Fblogo.gif" },
      ],
      references: { designed_by: [{ href: "https://www.freebasic.net/about.html", title: "freeBASIC about page" }] },
      releases: [
        { version: "unknown", date: "2004-01-01", kind: "first" },
        { version: "1.10.1", date: "2023-12-25", kind: "stable" },
      ],
    },
    {
      influenced: ["pl+qbasic"],
      influences: ["pl+c", "pl+quickbasic"],
      licenses: ["lic+gpl", "lic+lgpl"],
      paradigms: ["para+imperative", "para+objects"],
      people: [["person+andre-victor", "designer"]],
      platforms: ["platf+bsd", "platf+dos", "platf+linux", "platf+windows"],
      typeSystems: ["tsys+static"],
    },
  );

  /**/
}
