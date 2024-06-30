import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ballerina",
    "Ballerina",
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
      influences: ["pl+java", "pl+javascript", "pl+go", "pl+rust", "pl+c-sharp"],
      licenses: ["lic+apache"],
      people: ["person+sanjiva-weerawarana", "person+james-clark", "person+frank-leymann"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+structural", "tsys+strong", "tsys+static", "tsys+inferred"],
    },
  );
}
