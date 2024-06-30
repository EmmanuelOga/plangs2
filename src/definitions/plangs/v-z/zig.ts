import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+zig")
    .merge({
      name: "Zig",
      websites: [{ kind: "wikipedia", title: "Zig", href: "https://en.wikipedia.org/wiki/Zig_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Zig_logo_2020.svg" }],
      releases: [{ version: "0.13.0", date: "2024-01-01", kind: "preview" }],
    })
    .addInfluences(["pl+c"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+multi", "para+imperative", "para+concurrent", "para+functional"])
    .addPlatforms([
      "platf+x86-64",
      "platf+aarch64",
      "platf+wasm",
      "platf+arm",
      "platf+ia-32",
      "platf+risc-v",
      "platf+mips",
      "platf+power-isa",
      "platf+cross-platform",
      "platf+linux",
      "platf+bsd",
      "platf+win",
    ])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+inferred", "tsys+structural", "tsys+generic"]);

  /**/
}
