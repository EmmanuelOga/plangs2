import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+javascript",
    {
      name: "JavaScript",
      websites: [
        { kind: "wikipedia", title: "JavaScript", href: "https://en.wikipedia.org/wiki/JavaScript" },
        {
          kind: "wikipedia",
          title: "Javascript",
          href: "https://en.wikipedia.org/wiki/Javascript_(programming_language)",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/JavaScript_code.png/300px-JavaScript_code.png",
        },
      ],
      releases: [
        { version: "unknown", date: "2023-01-01", kind: "stable" },
        { version: "unknown", date: "2025-01-01", kind: "preview" },
      ],
      extensions: [".cjs", ".js", ".mjs[4]"],
    },
    {
      dialects: ["pl+assemblyscript"],
      implementations: ["pl+chakra", "pl+javascriptcore", "pl+spidermonkey", "pl+v8"],
      influences: ["pl+awk", "pl+c", "pl+hypertalk", "pl+java", "pl+python", "pl+scheme", "pl+self", "pl+xtalk"],
      people: ["person+brendan-eich"],
      paradigms: ["para+event", "para+functional", "para+imperative", "para+multi", "para+objects"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+weak"],
    },
  );
}
