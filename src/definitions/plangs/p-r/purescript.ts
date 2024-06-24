import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+purescript",
    "PureScript",
    {
      name: "PureScript",
      websites: [
        { kind: "wikipedia", title: "PureScript", href: "https://en.wikipedia.org/wiki/PureScript" },
        { kind: "homepage", title: "www.purescript.org", href: "https://www.purescript.org/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/PureScript_Logo.png/121px-PureScript_Logo.png",
        },
      ],
      releases: [
        { version: "unknown", date: "2013-01-01", kind: "first" },
        { version: "0.15.15", date: "2024-01-01", kind: "stable" },
      ],
      references: {
        license: [
          { href: "https://github.com/purescript/purescript/blob/master/LICENSE", title: "purescript/purescript" },
        ],
      },
      extensions: [".purs"],
    },
    {
      influences: ["pl+haskell", "pl+javascript"],
      licenses: ["lic+bsd-m"],
      paradigms: ["para+functional"],
      people: [["person+phil-freeman", "designer"]],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  /**/
}
