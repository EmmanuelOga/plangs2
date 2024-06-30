import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+groovy",
    {
      name: "Groovy",
      websites: [
        { kind: "wikipedia", title: "Groovy", href: "https://en.wikipedia.org/wiki/Groovy_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Groovy-logo.svg" }],
      releases: [{ version: "4.0.0", date: "2021-01-01", kind: "preview" }],
      extensions: [".groovy", ".gvy", ".gy", ".gsh"],
    },
    {
      implementations: ["pl+gradle", "pl+grails"],
      influences: ["pl+java", "pl+python", "pl+ruby", "pl+smalltalk", "pl+objective-cpp", "pl+objective-c"],
      licenses: ["lic+apache"],
      paradigms: ["para+multi", "para+objects", "para+imperative", "para+functional", "para+aspect", "para+scripting"],
      people: ["person+james-strachan"],
      platforms: ["platf+jvm"],
      typeSystems: ["tsys+dynamic", "tsys+static", "tsys+strong", "tsys+duck"],
    },
  );
}
