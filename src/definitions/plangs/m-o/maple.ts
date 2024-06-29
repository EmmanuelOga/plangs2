import type { PlangsGraph } from "../../../entities/plangs_graph";

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
        { version: "unknown", kind: "stable" },
        { version: "unknown", date: "2024-03-06", kind: "stable" },
      ],
    },
    {
      licenses: ["lic+proprietary", "lic+commercial"],
      people: ["person+waterloo-maple"],
      platforms: ["platf+win", "platf+mac", "platf+linux"],
    },
  );
}
