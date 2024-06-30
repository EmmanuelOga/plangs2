import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+v",
    {
      name: "V",
      websites: [
        { kind: "wikipedia", title: "V (Vlang)", href: "https://en.wikipedia.org/wiki/V_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/e/e8/V_Logo_SVG.svg" }],
      releases: [{ version: "0.4.5", date: "2024-01-01", kind: "stable" }],
      extensions: [".v", ".vsh"],
    },
    {
      influences: ["pl+c", "pl+go", "pl+kotlin", "pl+oberon", "pl+swift", "pl+python", "pl+rust"],
      licenses: ["lic+mit"],
      paradigms: ["para+multi", "para+functional", "para+imperative", "para+structured", "para+concurrent"],
      platforms: ["platf+x86-64", "platf+linux", "platf+mac", "platf+win", "platf+bsd"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+inferred"],
    },
  );
}
