import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+icon",
    {
      name: "Icon",
      websites: [
        { kind: "wikipedia", title: "Icon", href: "https://en.wikipedia.org/wiki/Icon_(programming_language)" },
        { kind: "wikipedia", title: "Icon", href: "https://en.wikipedia.org/wiki/Icon_programming_language" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Panorama_Icon_logo_Mondadori.png/121px-Panorama_Icon_logo_Mondadori.png",
        },
      ],
      releases: [{ version: "9.5.24", date: "2024-01-01", kind: "stable" }],
    },
    {
      dialects: ["pl+unicon"],
      influences: ["pl+algol", "pl+snobol"],
      people: ["person+ralph-griswold"],
      paradigms: ["para+multi", "para+structured"],
      typeSystems: ["tsys+dynamic"],
    },
  );
}
