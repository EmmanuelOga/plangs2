import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+Zig",
    "Zig",
    {
      name: "Zig",
      websites: [
        { kind: "wikipedia", title: "Zig", href: "https://en.wikipedia.org/wiki/Zig_(programming_language)" },
        { kind: "homepage", title: "ziglang.org", href: "https://ziglang.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Zig_logo_2020.svg" }],
      references: {
        first_appeared: [
          {
            href: "https://andrewkelley.me/post/intro-to-zig.html",
            title: "Introduction to the Zig Programming Language",
          },
        ],
        preview_release: [{ href: "https://ziglang.org/download/#release-0.13.0", title: "Release 0.13.0" }],
      },
      releases: [
        { version: "unknown", date: "2016-02-08", kind: "first" },
        { version: "0.13.0", date: "2024-01-01", kind: "preview" },
      ],
      extensions: [".zig", ".zir"],
    },
    {
      influenced: ["pl+Rust", "pl+C"],
      licenses: ["lic+mit"],
      paradigms: ["para+multi-paradigm", "para+imperative", "para+concurrent", "para+functional"],
      people: [["person+Andrew-Kelley", "designer"]],
      platforms: [
        "platf+x86-64",
        "platf+aarch64",
        "platf+web",
        "platf+arm",
        "platf+ia-32",
        "platf+risc-v",
        "platf+mips",
        "platf+cross-platform",
        "platf+linux",
        "platf+bsd",
        "platf+windows",
      ],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+inferred", "tsys+structural", "tsys+generic"],
    },
  );
}
