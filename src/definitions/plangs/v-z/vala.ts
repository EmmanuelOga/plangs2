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
      influences: ["pl+java", "pl+c", "pl+cpp", "pl+c-sharp", "pl+d", "pl+boo"],
      licenses: ["lic+lgpl"],
      paradigms: ["para+multi", "para+imperative", "para+structured", "para+objects"],
      people: ["person+jurg-billeter", "person+raffaele-sandrini", "person+rico-tzschichholz"],
      platforms: ["platf+cross-platform", "platf+glib"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+inferred", "tsys+structural"],
    },
  );
}
