import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+apache-groovy",
    "Apache Groovy",
    {
      name: "Apache Groovy",
      websites: [
        { kind: "wikipedia", title: "Groovy", href: "https://en.wikipedia.org/wiki/Apache_Groovy" },
        { kind: "homepage", title: "groovy-lang.org", href: "https://groovy-lang.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Groovy-logo.svg" }],
      releases: [
        { version: "unknown", date: "2003-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "4.0.21", date: "2024-01-01", kind: "stable" },
        { version: "4.0.0", date: "2021-09-06", kind: "preview" },
      ],
    },
    {
      implementations: ["pl+gradle", "pl+grails"],
      influences: ["pl+java", "pl+python", "pl+ruby", "pl+smalltalk"],
      licenses: ["lic+apache"],
      paradigms: ["para+multi", "para+objects", "para+imperative", "para+functional", "para+aspect", "para+scripting"],
      people: [
        "person+james-strachan",
        "person+guillaume-laforge",
        "person+jochen-theodorou",
        "person+paul-king",
        "person+cedric-champeau",
      ],
      platforms: ["platf+jvm"],
      typeSystems: ["tsys+dynamic", "tsys+static", "tsys+strong", "tsys+duck"],
    },
  );
}
