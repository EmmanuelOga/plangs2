import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+maple",
    "Maple",
    {
      name: "Maple",
      websites: [
        { kind: "wikipedia", title: "Maple", href: "https://en.wikipedia.org/wiki/Maple_(software)" },
        {
          kind: "homepage",
          title: "www.maplesoft.com/products/Maple/",
          href: "https://www.maplesoft.com/products/Maple/",
        },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/30/Maple_2015_logo.svg" }],
      releases: [
        { version: "unknown", date: "1982-01-01", kind: "first" },
        { version: "unknown", date: "2024-03-06", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "https://www.maplesoft.com/company/news/releases/2024/2024-03-06-Powerful-AI-Technology-Advances-Maplesoft-Mission-to-Unleash-the-Power-of-Math.aspx",
            title: "Maplesoft Media Releases",
          },
        ],
        available_in: [
          { href: "https://www.maplesoft.com/products/languages/", title: "International Language Support in Maple" },
        ],
      },
    },
    {
      influenced: ["pl+darwin"],
      licenses: ["lic+commercial", "lic+proprietary"],
      people: [["person+waterloo-maple", "designer"]],
      platforms: ["platf+linux", "platf+mac", "platf+windows"],
    },
  );

  /**/
}
