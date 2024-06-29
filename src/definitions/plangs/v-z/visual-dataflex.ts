import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+visual-dataflex",
    "DataFlex",
    {
      name: "DataFlex",
      websites: [
        { kind: "wikipedia", title: "DataFlex", href: "https://en.wikipedia.org/wiki/Visual_DataFlex" },
        { kind: "homepage", title: "www.dataaccess.com/DataFlex", href: "http://www.DataAccess.com/DataFlex" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/DF_Logo_Compact_RGB.png/220px-DF_Logo_Compact_RGB.png",
        },
      ],
      references: {
        stable_release: [
          {
            href: "https://support.dataaccess.com/Forums/showthread.php?70883-DataFlex-2024-Released-Download-now!",
            title: "DataFlex 2024/24.0  Release",
          },
        ],
        operating_system: [
          { href: "https://www.pcmag.com/encyclopedia/term/40897/dataflex", title: "Definition of: DataFlex" },
          { href: "http://johanbroddfelt.se/installing_dataflex-30", title: "Installing DataFlex" },
        ],
        license: [
          {
            href: "https://www.dataaccess.com/resources/licensing/dataflex-studio-license-978",
            title: "“DataFlex License Info”",
          },
        ],
      },
      releases: [{ version: "24.0", date: "2024-03-13", kind: "stable" }],
    },
    {
      licenses: ["lic+commercial", "lic+proprietary"],
      people: [["person+data-access-worldwide", { role: "developer" }]],
    },
  );
}
