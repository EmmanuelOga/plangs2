import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+vala",
    "Vala",
    {
      name: "Vala",
      websites: [
        { kind: "wikipedia", title: "Vala", href: "https://en.wikipedia.org/wiki/Vala_(programming_language)" },
        { kind: "homepage", title: "vala.dev", href: "https://vala.dev" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Vala_Logo.svg" }],
      releases: [
        { version: "unknown", date: "2006-01-01", kind: "first" },
        { version: "0.57.0", date: "2023-01-01", kind: "stable" },
      ],
      extensions: [".vala", ".vapi"],
    },
    {
      influences: ["pl+boo", "pl+c", "pl+c-sharp", "pl+cpp", "pl+d", "pl+java"],
      licenses: ["lic+lgpl"],
      paradigms: ["para+imperative", "para+multi", "para+objects", "para+structured"],
      people: [
        ["person+jurg-billeter", { role: "developer" }],
        ["person+raffaele-sandrini", { role: "developer" }],
        ["person+rico-tzschichholz", { role: "developer" }],
      ],
      platforms: ["platf+cross-platform", "platf+glib"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"],
    },
  );
}
