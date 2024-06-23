import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+gosu",
    "Gosu",
    {
      name: "Gosu",
      websites: [
        { kind: "wikipedia", title: "Gosu", href: "https://en.wikipedia.org/wiki/Gosu_(programming_language)" },
        { kind: "repository", title: "gosu-lang.github.io", href: "https://gosu-lang.github.io/" },
      ],
      references: {
        stable_release: [
          { href: "https://github.com/gosu-lang/gosu-lang/releases/tag/v1.17.10", title: "Release 1.17.10" },
        ],
      },
      releases: [{ version: "1.17.10", date: "2024-01-01", kind: "stable" }],
      extensions: [".gs", ".gsp", ".gst", ".gsx"],
    },
    {
      influenced: ["pl+kotlin"],
      influences: ["pl+c-sharp", "pl+java", "pl+kotlin"],
      licenses: ["lic+apache"],
      platforms: ["platf+jvm"],
      typeSystems: ["tsys+static"],
    },
  );

  /**/
}
