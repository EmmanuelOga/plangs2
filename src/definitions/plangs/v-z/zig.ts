import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+zig",
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
      influences: ["pl+c", "pl+rust"],
      licenses: ["lic+mit"],
      paradigms: ["para+concurrent", "para+functional", "para+imperative", "para+multi"],
      people: [["person+andrew-kelley", { role: "designer" }]],
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
