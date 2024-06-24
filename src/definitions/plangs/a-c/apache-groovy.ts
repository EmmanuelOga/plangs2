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
        { version: "4.0.21", date: "2024-01-01", kind: "stable" },
        { version: "4.0.0", date: "2021-09-06", kind: "preview" },
      ],
      references: {
        stable_release: [
          { href: "https://github.com/apache/groovy/releases/tag/GROOVY_4_0_21", title: "Release 4.0.21" },
        ],
        preview_release: [{ href: "https://github.com/apache/groovy/releases", title: "Releases - apache/groovy" }],
      },
    },
    {
      implementations: ["pl+gradle", "pl+grails"],
      influenced: ["pl+python"],
      influences: ["pl+java", "pl+kotlin", "pl+python", "pl+ruby", "pl+smalltalk"],
      licenses: ["lic+apache"],
      paradigms: ["para+aspect", "para+functional", "para+imperative", "para+multi", "para+objects", "para+scripting"],
      people: [
        ["person+cedric-champeau", "designer"],
        ["person+james-strachan", "designer"],
        ["person+paul-king", "designer"],
      ],
      platforms: ["platf+jvm"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+static", "tsys+strong"],
    },
  );

  /**/
}
