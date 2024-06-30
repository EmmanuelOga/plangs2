import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+j",
    {
      name: "J",
      websites: [{ kind: "wikipedia", title: "J", href: "https://en.wikipedia.org/wiki/J_(programming_language)" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/J_%28programming_language%29_icon.png/121px-J_%28programming_language%29_icon.png",
        },
      ],
      releases: [{ version: "9.5", date: "2023-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+fl", "pl+apl"],
      licenses: ["lic+gpl"],
      paradigms: [
        "para+array",
        "para+functional",
        "para+objects",
        "para+class",
        "para+prototypes",
        "para+function",
        "para+tacit",
      ],
      people: ["person+roger-hui"],
      platforms: [
        "platf+cross-platform",
        "platf+win",
        "platf+linux",
        "platf+mac",
        "platf+android",
        "platf+ios",
        "platf+rpi",
      ],
      typeSystems: ["tsys+dynamic"],
    },
  );
}
