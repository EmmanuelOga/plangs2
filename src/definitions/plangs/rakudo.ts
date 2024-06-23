import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+rakudo",
    "Rakudo",
    {
      name: "Rakudo",
      websites: [
        { kind: "wikipedia", title: "Rakudo", href: "https://en.wikipedia.org/wiki/Rakudo" },
        { kind: "homepage", title: "rakudo.org", href: "http://rakudo.org/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Rakudo_Logo.png/250px-Rakudo_Logo.png",
        },
      ],
      references: {
        stable_release: [{ href: "https://github.com/rakudo/rakudo/releases", title: "Releases · rakudo/rakudo" }],
      },
      releases: [{ version: "2024.05", date: "2024-05-30", kind: "stable" }],
    },
    { licenses: ["lic+artistic"] },
  );

  /**/
}
