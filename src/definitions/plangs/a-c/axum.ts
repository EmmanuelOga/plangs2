import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+axum",
    {
      name: "Axum",
      websites: [
        { kind: "wikipedia", title: "Axum", href: "https://en.wikipedia.org/wiki/Axum_(programming_language)" },
        { kind: "homepage", title: "Axum at DevLabs", href: "http://msdn.microsoft.com/en-us/devlabs/dd795202.aspx" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Axum_Banner.png/150px-Axum_Banner.png",
        },
      ],
      releases: [{ version: "unknown", date: "2009-01-01", kind: "stable" }],
    },
    { licenses: ["lic+closed-source"], platforms: ["platf+win", "platf+x86", "platf+x86-64"] },
  );
}
