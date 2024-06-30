import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+mojo",
    {
      name: "Mojo",
      websites: [
        { kind: "wikipedia", title: "Mojo", href: "https://en.wikipedia.org/wiki/Mojo_(programming_language)" },
      ],
      releases: [{ version: "24.4", date: "2024-01-01", kind: "preview" }],
      extensions: [".mojo", ".🔥"],
    },
    {
      influences: ["pl+python"],
      people: ["person+chris-lattner"],
      licenses: ["lic+proprietary"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+affine"],
    },
  );
}
