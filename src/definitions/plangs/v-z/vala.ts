import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+vala",
    {
      name: "Vala",
      websites: [
        { kind: "wikipedia", title: "Vala", href: "https://en.wikipedia.org/wiki/Vala_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Vala_Logo.svg" }],
      releases: [{ version: "0.57.0", date: "2023-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+boo", "pl+c", "pl+c-sharp", "pl+d", "pl+java", "pl+ms-visual-c-sharp", "pl+cpp"],
      licenses: ["lic+lgpl"],
      paradigms: ["para+multi", "para+imperative", "para+structured", "para+objects"],
      platforms: ["platf+cross-platform", "platf+glib"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+inferred", "tsys+structural"],
    },
  );
}
