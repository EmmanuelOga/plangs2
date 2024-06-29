import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+aldor",
    "Aldor",
    {
      name: "Aldor",
      websites: [
        { kind: "wikipedia", title: "Aldor", href: "https://en.wikipedia.org/wiki/Aldor" },
        { kind: "homepage", title: "aldor.org", href: "https://aldor.org" },
      ],
      releases: [
        { version: "unknown", date: "1990-01-01", kind: "first" },
        { version: "1.0.3", kind: "stable" },
        { version: "1.1.0", kind: "preview" },
      ],
      extensions: [".al", ".as"],
    },
    {
      implementations: ["pl+axiom"],
      influences: ["pl+a-", "pl+haskell", "pl+pascal"],
      licenses: ["lic+apache"],
      paradigms: ["para+dependent", "para+functional", "para+imperative", "para+logic", "para+multi", "para+objects"],
      people: [
        ["person+barry-trager", { role: "designer" }],
        ["person+james-davenport", { role: "designer" }],
        ["person+richard-dimick-jenks", { role: "designer" }],
        ["person+robert-sutor", { role: "designer" }],
        ["person+scott-morrison", { role: "designer" }],
        ["person+stephen-watt", { role: "designer" }],
      ],
      platforms: ["platf+axiom", "platf+linux", "platf+win"],
    },
  );
}
