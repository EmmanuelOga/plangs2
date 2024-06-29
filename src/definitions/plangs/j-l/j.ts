import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+j",
    "J",
    {
      name: "J",
      websites: [
        { kind: "wikipedia", title: "J", href: "https://en.wikipedia.org/wiki/J_(programming_language)" },
        { kind: "homepage", title: "www.jsoftware.com", href: "http://www.jsoftware.com" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/J_%28programming_language%29_icon.png/121px-J_%28programming_language%29_icon.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1990-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "9.5", date: "2023-12-20", kind: "stable" },
      ],
    },
    {
      influences: ["pl+apl", "pl+fl"],
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
