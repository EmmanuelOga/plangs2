import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+chuck",
    {
      name: "ChucK",
      websites: [{ kind: "wikipedia", title: "ChucK", href: "https://en.wikipedia.org/wiki/ChucK" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Chuck-2023.png" }],
      releases: [{ version: "1.5.2.4", date: "2024-01-01", kind: "stable" }],
    },
    {
      people: ["person+ge-wang"],
      licenses: ["lic+gpl", "lic+ios", "lic+linux", "lic+mac-os-x", "lic+win"],
      paradigms: ["para+multi"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+strong"],
    },
  );
}
