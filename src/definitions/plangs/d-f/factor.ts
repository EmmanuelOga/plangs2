import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+factor",
    {
      name: "Factor",
      websites: [
        { kind: "wikipedia", title: "Factor", href: "https://en.wikipedia.org/wiki/Factor_(programming_language)" },
        { kind: "homepage", title: "factorcode.org", href: "http://factorcode.org/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/NewFactorLogo.png/200px-NewFactorLogo.png",
        },
      ],
      releases: [{ version: "0.99", date: "2023-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+forth", "pl+joy", "pl+lisp", "pl+self"],
      licenses: ["lic+bsd"],
      paradigms: ["para+concatenative", "para+functional", "para+multi", "para+objects", "para+stack"],
      platforms: ["platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );
}
