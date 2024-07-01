import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+ballerina")
    .merge({
      name: "Ballerina",
      websites: [
        {
          kind: "wikipedia",
          title: "Ballerina",
          href: "https://en.wikipedia.org/wiki/Ballerina_(programming_language)",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Official_Ballerina_Programming_Language_Logo.png/200px-Official_Ballerina_Programming_Language_Logo.png",
        },
      ],
    })
    .addInfluences(["pl+java", "pl+javascript", "pl+go", "pl+rust", "pl+c-sharp"])
    .addPerson("person+sanjiva-weerawarana", { role: "designer" })
    .addPerson("person+james-clark", { role: "designer" })
    .addPerson("person+frank-leymann", { role: "designer" })
    .addLicense("lic+apache", {
      refs: [
        { href: "https://github.com/ballerina-platform/ballerina-lang/blob/master/LICENSE", title: "WSO2 / LICENSE" },
      ],
    })
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+structural", "tsys+strong", "tsys+static", "tsys+inferred"]);

  /**/
}
