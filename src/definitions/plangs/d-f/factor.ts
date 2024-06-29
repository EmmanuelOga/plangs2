import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+factor",
    "Factor",
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
      releases: [
        { version: "unknown", date: "2003-01-01", kind: "first" },
        { version: "0.99", date: "2023-08-24", kind: "stable" },
      ],
    },
    {
      influences: ["pl+forth", "pl+joy", "pl+self", "pl+lisp"],
      licenses: ["lic+bsd"],
      paradigms: ["para+multi", "para+concatenative", "para+stack", "para+functional", "para+objects"],
      people: ["person+slava-pestov"],
      platforms: ["platf+win", "platf+mac", "platf+linux"],
      typeSystems: ["tsys+strong", "tsys+dynamic"],
    },
  );
}
