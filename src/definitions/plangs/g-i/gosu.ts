import type { PlangsGraph } from "../../../entities/plangs_graph";

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
      releases: [
        { version: "unknown", kind: "stable" },
        { version: "1.17.10", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".gs", ".gsp", ".gst", ".gsx"],
    },
    {
      influences: ["pl+java", "pl+c-sharp"],
      licenses: ["lic+apache"],
      platforms: ["platf+jvm"],
      typeSystems: ["tsys+static"],
    },
  );
}
