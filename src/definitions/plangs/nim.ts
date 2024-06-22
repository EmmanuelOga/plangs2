import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+nim",
    "Nim",
    {
      name: "Nim",
      websites: [
        { kind: "wikipedia", title: "Nim", href: "https://en.wikipedia.org/wiki/Nim_(programming_language)" },
        { kind: "homepage", title: "nim-lang.org", href: "http://nim-lang.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Nim_logo.svg" }],
      references: {
        developer: [
          { href: "https://github.com/nim-lang/Nim/graphs/contributors", title: "Contributors to nim-lang/Nim" },
        ],
        stable_release: [
          {
            href: "https://github.com/nim-lang/Nim/releases/tag/v2.0.4",
            title: "https://github.com/nim-lang/Nim/releases/tag/v2.0.4",
          },
        ],
        typing_discipline: [
          { href: "https://nim-by-example.github.io/", title: "Nim by example" },
          { href: "https://ibob.github.io/slides/nimrodbg/#/", title: "Метапрограмиране с Nimrod" },
        ],
        platform: [{ href: "https://nim-lang.org/docs/packaging.html", title: "Packaging Nim" }],
        os: [{ href: "https://nim-lang.org/install.html", title: "Install Nim" }],
        license: [{ href: "https://github.com/nim-lang/Nim/blob/devel/copying.txt", title: "copying.txt" }],
        influenced_by: [{ href: "https://nim-lang.org/araq/destructors.html", title: "Nim without GC" }],
      },
      releases: [
        { version: "unknown", date: "2008-01-01", kind: "first" },
        { version: "2.0.4", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".nim", ".nims", ".nimble"],
    },
    {
      influenced: [
        "pl+ada",
        "pl+c",
        "pl+c-plus-plus",
        "pl+lisp",
        "pl+modula-3",
        "pl+oberon",
        "pl+oberon-2",
        "pl+object-pascal",
        "pl+parasail",
        "pl+python",
      ],
      influences: [
        "pl+ada",
        "pl+c-plus-plus",
        "pl+lisp",
        "pl+modula-3",
        "pl+oberon",
        "pl+object-pascal",
        "pl+parasail",
        "pl+python",
        "pl+rust",
      ],
      paradigms: [
        "para+compiled",
        "para+concurrent",
        "para+functional",
        "para+imperative",
        "para+meta",
        "para+multi-paradigm",
        "para+objects",
      ],
      people: [["person+andreas-rumpf", "designer"]],
      platforms: ["platf+aarch64", "platf+arm", "platf+cross-platform", "platf+ia-32", "platf+risc-v", "platf+x86-64"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"],
    },
  );
}
