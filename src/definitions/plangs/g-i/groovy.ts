import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+groovy")
    .merge({
      name: "Groovy",
      websites: [
        { kind: "wikipedia", title: "Groovy", href: "https://en.wikipedia.org/wiki/Groovy_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Groovy-logo.svg" }],
      releases: [{ name: "Groovy", version: "4.0.0", date: "2021-01-01", kind: "preview" }],
      extensions: [".groovy", ".gsh", ".gvy", ".gy"],
    })
    .addImplementations(["pl+gradle", "pl+grails"])
    .addInfluences(["pl+java", "pl+python", "pl+ruby", "pl+smalltalk", "pl+objective-cpp", "pl+objective-c"])
    .addPerson("person+james-strachan", { role: "designer" })
    .addLicenses(["lic+apache"])
    .addParadigms(["para+multi", "para+objects", "para+imperative", "para+functional", "para+aspect", "para+scripting"])
    .addPlatforms(["platf+jvm"])
    .addTypeSystems(["tsys+dynamic", "tsys+static", "tsys+strong", "tsys+duck"]);

  /**/
}
