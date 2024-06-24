import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+pharo",
    "Pharo",
    {
      name: "Pharo",
      websites: [
        { kind: "wikipedia", title: "Pharo", href: "https://en.wikipedia.org/wiki/Pharo" },
        { kind: "homepage", title: "pharo.org", href: "http://pharo.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Pharo_Logo_v3.0.svg" }],
      releases: [
        { version: "unknown", date: "2008-01-01", kind: "first" },
        { version: "12.0", date: "2024-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "https://pharo.org/news/2024-04-26-pharo12-released.html",
            title: "https://pharo.org/news/2024-04-26-pharo12-released.html",
          },
        ],
        license: [{ href: "https://pharo.org/license", title: "Pharo license information" }],
      },
    },
    {
      implementations: ["pl+smalltalk"],
      influences: ["pl+smalltalk", "pl+squeak"],
      licenses: ["lic+apache", "lic+mit"],
      paradigms: ["para+objects"],
      platforms: ["platf+arm", "platf+ia-32", "platf+linux", "platf+mac", "platf+win", "platf+x86-64"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/
}
