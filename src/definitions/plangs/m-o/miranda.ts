import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+miranda",
    {
      name: "Miranda",
      websites: [
        { kind: "wikipedia", title: "Miranda", href: "https://en.wikipedia.org/wiki/Miranda_(programming_language)" },
        { kind: "wikipedia", title: "Miranda", href: "https://en.wikipedia.org/wiki/Miranda_programming_language" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/3/34/Miranda_logo_%28programming_language%29.jpg",
        },
      ],
      releases: [{ version: "2.066", date: "2020-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+iswim", "pl+kent-recursive-calculator", "pl+ml", "pl+sasl", "pl+hope"],
      paradigms: ["para+lazy", "para+functional", "para+dec"],
      people: ["person+david-turner"],
      typeSystems: ["tsys+strong", "tsys+static"],
    },
  );
}
