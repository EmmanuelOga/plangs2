import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+scheme",
    {
      name: "Scheme",
      websites: [
        { kind: "wikipedia", title: "Scheme", href: "https://en.wikipedia.org/wiki/Scheme_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/39/Lambda_lc.svg" }],
      releases: [{ version: "unknown", date: "2013-01-01", kind: "stable" }],
    },
    {
      dialects: ["pl+dsssl"],
      influences: ["pl+algol", "pl+lisp", "pl+mdl", "pl+racket"],
      people: ["person+gerald-jay-sussman", "person+guy-l-steele"],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi"],
      typeSystems: ["tsys+dynamic", "tsys+latent", "tsys+strong"],
    },
  );
}
