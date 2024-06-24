import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+gemstone",
    "GemStone/S",
    {
      name: "GemStone/S",
      websites: [
        {
          kind: "wikipedia",
          title: "GemStone/S Object Server",
          href: "https://en.wikipedia.org/wiki/Gemstone_(database)",
        },
        {
          kind: "homepage",
          title: "gemtalksystems.com/products/gss32",
          href: "http://gemtalksystems.com/products/gss32",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/GemStone-S_logo_and_wordmark.png/121px-GemStone-S_logo_and_wordmark.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1986-01-01", kind: "first" },
        { version: "3.7.1", kind: "stable" },
      ],
    },
    {
      implementations: ["pl+smalltalk"],
      influenced: ["pl+java-ee"],
      influences: ["pl+smalltalk"],
      licenses: ["lic+commercial", "lic+proprietary"],
      paradigms: ["para+distributed", "para+in", "para+objects", "para+process"],
      platforms: ["platf+cross-platform", "platf+ia-32", "platf+linux", "platf+mac", "platf+x86-64"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/
}
