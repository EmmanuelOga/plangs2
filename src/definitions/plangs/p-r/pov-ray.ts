import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+pov-ray",
    "POV-Ray",
    {
      name: "POV-Ray",
      websites: [
        { kind: "wikipedia", title: "POV-Ray", href: "https://en.wikipedia.org/wiki/POV-Ray" },
        { kind: "homepage", title: "www.povray.org", href: "https://www.povray.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Povray_logo_sphere.png/120px-Povray_logo_sphere.png",
        },
      ],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "1991-07-29", kind: "first" },
        { version: "3.7.0.0", date: "2013-01-01", kind: "stable" },
        { version: "3.8.0", date: "2021-08-09", kind: "preview" },
      ],
    },
    { licenses: ["lic+gnu-affero-gpl"] },
  );
}
