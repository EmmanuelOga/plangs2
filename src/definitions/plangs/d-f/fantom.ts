import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+fantom",
    "Fantom",
    {
      name: "Fantom",
      websites: [
        { kind: "wikipedia", title: "Fantom", href: "https://en.wikipedia.org/wiki/Fantom_(programming_language)" },
        { kind: "homepage", title: "www.fantom.org", href: "http://www.fantom.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Fantom-logo.png" }],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "2005-01-01", kind: "first" },
        { version: "1.0.79", date: "2023-07-17", kind: "stable" },
      ],
      extensions: [".fan", ".fwt", ".pod"],
    },
    {
      influences: ["pl+java", "pl+c-sharp", "pl+scala", "pl+ruby", "pl+erlang"],
      licenses: ["lic+academic-free"],
      paradigms: ["para+multi"],
      people: ["person+brian-frank", "person+andy-frank"],
      typeSystems: ["tsys+static", "tsys+dynamic"],
    },
  );
}
