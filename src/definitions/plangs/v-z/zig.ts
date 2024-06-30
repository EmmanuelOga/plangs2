import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+zig",
    {
      name: "Zig",
      websites: [{ kind: "wikipedia", title: "Zig", href: "https://en.wikipedia.org/wiki/Zig_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Zig_logo_2020.svg" }],
      releases: [{ version: "0.13.0", date: "2024-01-01", kind: "preview" }],
    },
    {
      influences: ["pl+c"],
      licenses: ["lic+mit"],
      paradigms: ["para+concurrent", "para+functional", "para+imperative", "para+multi"],
      platforms: [
        "platf+aarch64",
        "platf+arm",
        "platf+bsd",
        "platf+cross-platform",
        "platf+ia-32",
        "platf+linux",
        "platf+mips",
        "platf+power-isa",
        "platf+risc-v",
        "platf+wasm",
        "platf+win",
        "platf+x86-64",
      ],
      typeSystems: ["tsys+generic", "tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"],
    },
  );
}
