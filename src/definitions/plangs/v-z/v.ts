import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+v",
    "V (Vlang)",
    {
      name: "V (Vlang)",
      websites: [
        { kind: "wikipedia", title: "V (Vlang)", href: "https://en.wikipedia.org/wiki/V_(programming_language)" },
        { kind: "homepage", title: "vlang.io", href: "http://vlang.io" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/e/e8/V_Logo_SVG.svg" }],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "2019-06-20", kind: "first" },
        { version: "0.4.5", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".v", ".vsh"],
    },
    {
      influences: ["pl+go", "pl+oberon", "pl+rust", "pl+c", "pl+kotlin", "pl+python", "pl+swift"],
      licenses: ["lic+mit"],
      paradigms: ["para+multi", "para+functional", "para+imperative", "para+structured", "para+concurrent"],
      people: ["person+alexander-medvednikov"],
      platforms: ["platf+x86-64", "platf+linux", "platf+mac", "platf+win", "platf+bsd"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+inferred"],
    },
  );
}
