import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ballerina",
    {
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
    },
    {
      influences: ["pl+c-sharp", "pl+go", "pl+java", "pl+javascript", "pl+rust"],
      people: ["person+frank-leymann", "person+james-clark", "person+sanjiva-weerawarana"],
      licenses: ["lic+apache"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"],
    },
  );
}
