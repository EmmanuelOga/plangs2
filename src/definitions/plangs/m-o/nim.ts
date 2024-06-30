import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+nim",
    {
      name: "Nim",
      websites: [{ kind: "wikipedia", title: "Nim", href: "https://en.wikipedia.org/wiki/Nim_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Nim_logo.svg" }],
      releases: [{ version: "2.0.4", date: "2024-01-01", kind: "stable" }],
    },
    {
      influences: [
        "pl+ada",
        "pl+c",
        "pl+cpp",
        "pl+lisp",
        "pl+modula",
        "pl+oberon",
        "pl+oberon-2",
        "pl+parasail",
        "pl+pascal",
        "pl+python",
        "pl+rust",
      ],
      paradigms: [
        "para+compiled",
        "para+concurrent",
        "para+functional",
        "para+imperative",
        "para+meta",
        "para+multi",
        "para+objects",
      ],
      platforms: ["platf+aarch64", "platf+arm", "platf+cross-platform", "platf+ia-32", "platf+risc-v", "platf+x86-64"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"],
    },
  );
}
