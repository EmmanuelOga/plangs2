import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+delphi",
    "Delphi",
    {
      name: "Delphi",
      websites: [
        { kind: "wikipedia", title: "Delphi", href: "https://en.wikipedia.org/wiki/Delphi_(software)" },
        {
          kind: "homepage",
          title: "www.embarcadero.com/products/delphi",
          href: "https://www.embarcadero.com/products/delphi",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/b/b2/Embarcadero_Delphi_10.4_Sydney_Product_Logo_and_Icon.svg",
        },
      ],
      releases: [
        { version: "unknown", date: "1995-01-01", kind: "first" },
        { version: "12.1", date: "2024-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "https://blogs.embarcadero.com/announcing-the-availability-of-rad-studio-12-1-athens/",
            title: "Announcing the Availability of RAD Studio 12.1 Athens",
          },
        ],
        operating_system: [
          {
            href: "https://web.archive.org/web/20200806012405/http://docwiki.embarcadero.com/RADStudio/Sydney/en/Installation_Notes#Operating_System_Requirements",
            title: "Installation Notes - Operating System Requirements",
          },
        ],
      },
    },
    {
      dialects: ["pl+object-pascal", "pl+pascal"],
      influenced: ["pl+c-plus-plusbuilder", "pl+oxygene"],
      licenses: ["lic+freemium"],
    },
  );

  /**/
}
