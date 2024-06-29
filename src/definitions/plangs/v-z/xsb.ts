import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+xsb",
    "XSB",
    {
      name: "XSB",
      websites: [
        { kind: "wikipedia", title: "XSB", href: "https://en.wikipedia.org/wiki/XSB" },
        { kind: "homepage", title: "Sourceforge.net", href: "https://xsb.sourceforge.net/" },
      ],
      releases: [{ version: "5.0", date: "2022-05-12", kind: "stable" }],
      extensions: [".P"],
    },
    {
      influences: ["pl+prolog"],
      paradigms: ["para+logic"],
      people: [
        ["person+david-s-warren", { role: "designer" }],
        ["person+kostis-sagonas", { role: "designer" }],
        ["person+terrance-swift", { role: "designer" }],
      ],
      platforms: ["platf+cross-platform"],
    },
  );
}
