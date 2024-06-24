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
        { kind: "homepage", title: "ballerina.io", href: "http://ballerina.io/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Official_Ballerina_Programming_Language_Logo.png/200px-Official_Ballerina_Programming_Language_Logo.png",
        },
      ],
      references: {
        designed_by: [
          {
            href: "https://web.archive.org/web/20200811095205/https://ballerina.io/spec/",
            title: "Ballerina Language Specification",
          },
        ],
        implementation_language: [
          { href: "https://github.com/ballerina-platform/ballerina-lang", title: "Ballerina source code" },
        ],
        license: [
          { href: "https://github.com/ballerina-platform/ballerina-lang/blob/master/LICENSE", title: "WSO2 / LICENSE" },
        ],
      },
      releases: [{ version: "unknown", date: "2017-01-01", kind: "first" }],
    },
    {
      influences: ["pl+c-sharp", "pl+go", "pl+java", "pl+javascript", "pl+rust"],
      licenses: ["lic+apache"],
      people: [
        ["person+frank-leymann", "designer"],
        ["person+james-clark", "designer"],
        ["person+sanjiva-weerawarana", "designer"],
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"],
    },
  );

  /**/
}
