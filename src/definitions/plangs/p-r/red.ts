import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+red",
    "Red",
    {
      name: "Red",
      websites: [
        { kind: "wikipedia", title: "Red", href: "https://en.wikipedia.org/wiki/Red_(programming_language)" },
        { kind: "homepage", title: "www.red-lang.org", href: "https://www.red-lang.org/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Red_Language_Tower_Logo.png/150px-Red_Language_Tower_Logo.png",
        },
      ],
      references: {
        designed_by: [{ href: "https://github.com/dockimbel", title: "Creator of Red" }],
        stable_release: [{ href: "https://www.red-lang.org/2024/02/065-changelog.html", title: "Red's changelog" }],
      },
      releases: [
        { version: "unknown", date: "2011-01-01", kind: "first" },
        { version: "0.6.5", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".red", ".reds"],
    },
    {
      influences: ["pl+lisp", "pl+lua", "pl+rebol", "pl+scala"],
      licenses: ["lic+boost", "lic+bsd-m"],
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+symbolic"],
      people: [["person+nenad-rakocevic", "designer"]],
      platforms: ["platf+linux", "platf+mac", "platf+win"],
    },
  );
}
