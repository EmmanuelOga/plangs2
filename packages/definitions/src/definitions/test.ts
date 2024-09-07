import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+python", {
      name: "Python",
      description:
        "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.",
      websites: [
        { href: "https://www.python.org/", title: "python.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Python_(programming_language)", title: "Python", kind: "wikipedia" },
      ],
      extensions: [".py", ".pyw", ".pyz", ".pyi", ".pyc", ".pyd"],
      images: [
        { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png", kind: "logo" },
      ],
      releases: [{ version: "3.12.5", date: "2024-01-01" }],
    })
    .addLicenses(["lic+python"])
    .addParadigms(["para+multi", "para+oop", "para+procedural", "para+imperative", "para+functional", "para+structured", "para+reflective"])
    .addPlatforms(["platf+linux", "platf+apple", "platf+windows", "platf+wasm", "platf+bsd", "platf+raspberry", "platf+android"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+strong", "tsys+optional"]);
}
