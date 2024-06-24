import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+jq",
    "jq",
    {
      name: "jq",
      websites: [
        { kind: "wikipedia", title: "jq", href: "https://en.wikipedia.org/wiki/Jq_(programming_language)" },
        { kind: "repository", title: "jqlang.github.io/jq", href: "https://jqlang.github.io/jq" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Jq_logo.svg" }],
      releases: [
        { version: "unknown", date: "2012-08-21", kind: "first" },
        { version: "1.7.1", date: "2023-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [{ href: "https://github.com/jqlang/jq/releases/tag/jq-1.7.1", title: "Release jq 1.7.1" }],
      },
    },
    {
      implementations: ["pl+c", "pl+go", "pl+rust"],
      influences: ["pl+icon"],
      licenses: ["lic+mit"],
      paradigms: ["para+functional", "para+json", "para+tacit"],
      people: [["person+stephen-dolan", "designer"]],
      platforms: ["platf+cross-platform"],
    },
  );

  /**/
}
