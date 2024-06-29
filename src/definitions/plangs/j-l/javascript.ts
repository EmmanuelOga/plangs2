import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+javascript",
    "JavaScript",
    {
      name: "JavaScript",
      websites: [
        { kind: "wikipedia", title: "JavaScript", href: "https://en.wikipedia.org/wiki/JavaScript" },
        {
          kind: "wikipedia",
          title: "Javascript",
          href: "https://en.wikipedia.org/wiki/Javascript_(programming_language)",
        },
        {
          kind: "homepage",
          title: "ecma-international.org/publications-and-standards/standards/ecma-262/",
          href: "https://ecma-international.org/publications-and-standards/standards/ecma-262/",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/JavaScript_code.png/300px-JavaScript_code.png",
        },
      ],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "1995-12-04", kind: "first" },
        { version: "unknown", date: "2023-01-01", kind: "stable" },
        { version: "unknown", date: "2025-01-01", kind: "preview" },
      ],
      extensions: [],
    },
    {
      dialects: ["pl+assemblyscript"],
      implementations: ["pl+v8", "pl+javascriptcore", "pl+spidermonkey", "pl+chakra"],
      influences: ["pl+java", "pl+hypertalk", "pl+scheme", "pl+lisp", "pl+self", "pl+awk", "pl+c", "pl+python"],
      paradigms: ["para+multi", "para+event", "para+functional", "para+imperative", "para+objects"],
      people: ["person+brendan-eich"],
      typeSystems: ["tsys+dynamic", "tsys+weak", "tsys+duck"],
    },
  );
}
