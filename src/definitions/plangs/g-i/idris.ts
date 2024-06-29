import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+idris",
    "Idris",
    {
      name: "Idris",
      websites: [
        { kind: "wikipedia", title: "Idris", href: "https://en.wikipedia.org/wiki/Idris_(programming_language)" },
        { kind: "homepage", title: "idris-lang.org", href: "http://idris-lang.org" },
      ],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "2007-01-01", kind: "first" },
        { version: "1.3.4", date: "2021-10-22", kind: "stable" },
        { version: "0.7.0", date: "2023-12-22", kind: "preview" },
      ],
      extensions: [".idr", ".lidr"],
    },
    {
      influences: ["pl+agda", "pl+clean", "pl+coq", "pl+epigram", "pl+f-sharp", "pl+haskell", "pl+ml", "pl+rust"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+functional"],
      people: ["person+edwin-brady"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );
}
