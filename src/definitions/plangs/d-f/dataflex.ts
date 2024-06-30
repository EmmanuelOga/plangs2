import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+dataflex")
    .merge({
      name: "DataFlex",
      websites: [{ kind: "wikipedia", title: "DataFlex", href: "https://en.wikipedia.org/wiki/DataFlex" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/DF_Logo_Compact_RGB.png/220px-DF_Logo_Compact_RGB.png",
        },
      ],
      releases: [{ version: "24.0", date: "2024-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+commercial"])
    .addLicense("lic+proprietary", {
      refs: [
        {
          href: "https://www.dataaccess.com/resources/licensing/dataflex-studio-license-978",
          title: "“DataFlex License Info”",
        },
      ],
    });

  /**/
}
