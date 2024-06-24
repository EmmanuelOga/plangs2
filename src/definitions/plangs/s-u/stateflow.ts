import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+stateflow",
    "Stateflow",
    {
      name: "Stateflow",
      websites: [
        { kind: "wikipedia", title: "Stateflow", href: "https://en.wikipedia.org/wiki/Stateflow" },
        {
          kind: "homepage",
          title: "Stateflow product page",
          href: "http://www.mathworks.com/products/stateflow?s_cid=wiki_stateflow_2",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Automatic_Transmission_Logic.png/220px-Automatic_Transmission_Logic.png",
        },
      ],
      releases: [
        { version: "unknown", date: "2018-09-12", kind: "stable" },
        { version: "unknown", date: "2018-06-14", kind: "preview" },
      ],
      references: {
        operating_system: [
          {
            href: "http://www.mathworks.com/products/stateflow/requirements.html?s_cid=wiki_stateflow_1",
            title: "MathWorks - Stateflow - Requirements",
          },
        ],
      },
    },
    { licenses: ["lic+proprietary"], platforms: ["platf+x64"] },
  );

  /**/
}
