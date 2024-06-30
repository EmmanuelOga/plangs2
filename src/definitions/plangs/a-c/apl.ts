import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+apl",
    {
      name: "APL",
      websites: [
        { kind: "wikipedia", title: "APL", href: "https://en.wikipedia.org/wiki/APL_(programming_language)" },
        { kind: "wikipedia", title: "APL", href: "https://en.wikipedia.org/wiki/APL_programming_language" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/APL_%28programming_language%29_logo.svg",
        },
      ],
      releases: [{ version: "unknown", date: "1375-01-01", kind: "stable" }],
    },
    {
      people: ["person+dick-lathwell", "person+larry-breed", "person+roger-moore"],
      licenses: ["lic+open-source", "lic+proprietary"],
      paradigms: ["para+array", "para+functional", "para+modular", "para+structured"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic"],
    },
  );
}
