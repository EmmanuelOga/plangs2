import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+idris",
    {
      name: "Idris",
      websites: [
        { kind: "wikipedia", title: "Idris", href: "https://en.wikipedia.org/wiki/Idris_(programming_language)" },
      ],
      releases: [
        { version: "1.3.4", date: "2021-01-01", kind: "stable" },
        { version: "0.7.0", date: "2023-01-01", kind: "preview" },
      ],
    },
    {
      influences: ["pl+agda", "pl+clean", "pl+coq", "pl+epigram", "pl+f-sharp", "pl+haskell", "pl+ml", "pl+rust"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+functional"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );
}
