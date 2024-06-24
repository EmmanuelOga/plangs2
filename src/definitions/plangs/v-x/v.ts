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
      references: {
        designed_by: [{ href: "https://github.com/medvednikov", title: "Creator of V" }],
        first_appeared: [{ href: "https://github.com/vlang/v/releases/tag/v0.0.12", title: "First public release" }],
        stable_release: [{ href: "https://github.com/vlang/v/releases/tag/0.4.5", title: "Release 0.4.5" }],
      },
      releases: [
        { version: "unknown", date: "2019-06-20", kind: "first" },
        { version: "0.4.5", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".v", ".vsh"],
    },
    {
      influenced: ["pl+c", "pl+go", "pl+kotlin", "pl+oberon", "pl+rust"],
      influences: ["pl+go", "pl+kotlin", "pl+oberon", "pl+python", "pl+rust", "pl+swift"],
      licenses: ["lic+mit"],
      paradigms: ["para+concurrent", "para+functional", "para+imperative", "para+multi", "para+structured"],
      people: [["person+alexander-medvednikov", "designer"]],
      platforms: ["platf+bsd", "platf+linux", "platf+mac", "platf+win", "platf+x86-64"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  /**/
}
