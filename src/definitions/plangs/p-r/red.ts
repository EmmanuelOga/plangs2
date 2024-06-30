import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+red",
    "Red",
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
      influences: ["pl+rebol", "pl+lisp", "pl+scala", "pl+lua"],
      licenses: ["lic+bsd-m", "lic+boost"],
      paradigms: ["para+multi", "para+imperative", "para+functional", "para+symbolic"],
      platforms: ["platf+linux", "platf+win", "platf+mac"],
    },
  );
}
