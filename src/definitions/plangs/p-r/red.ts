import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+red",
    {
      name: "Red",
      websites: [{ kind: "wikipedia", title: "Red", href: "https://en.wikipedia.org/wiki/Red_(programming_language)" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Red_Language_Tower_Logo.png/150px-Red_Language_Tower_Logo.png",
        },
      ],
      releases: [{ version: "0.6.5", date: "2024-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+lisp", "pl+lua", "pl+rebol", "pl+scala"],
      licenses: ["lic+boost", "lic+bsd-m"],
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+symbolic"],
      platforms: ["platf+linux", "platf+mac", "platf+win"],
    },
  );
}
