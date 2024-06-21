import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define("pl+NekoVMNeko", "NekoVMNeko", {
    websites: [
      {
        kind: "wikipedia",
        title: "NekoVMNeko",
        href: "https://en.wikipedia.org/wiki/Neko_(programming_language)",
      },
      {
        kind: "homepage",
        title: "nekovm.org/specs/syntax",
        href: "http://nekovm.org/specs/syntax",
      },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/NekoVM_logo.svg" },
    ],
    releases: [
      { version: "unknown", date: "2005-01-01", kind: "first" },
      { version: "2.3.0", date: "2019-10-24", kind: "stable" },
      { version: "unknown", date: "2005-01-01", kind: "first" },
    ],
    people: [
      ["person+Motion-Twin", "designer"],
      ["person+Nicolas-Cannasse", "designer"],
    ],
    licenses: ["lic+mit"],
    paradigms: [
      "para+multi-paradigm",
      "para+objects",
      "para+structured",
      "para+prototypes",
      "para+scripting",
    ],
    typeSystems: ["tsys+dynamic"],
    platforms: ["platf+windows", "platf+macos", "platf+linux"],
    implementations: ["pl+OCaml"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Nim", "Nim", {
    websites: [
      {
        kind: "wikipedia",
        title: "Nim",
        href: "https://en.wikipedia.org/wiki/Nim_(programming_language)",
      },
      { kind: "homepage", title: "nim-lang.org", href: "http://nim-lang.org" },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Nim_logo.svg" },
    ],
    references: {
      developer: [
        {
          href: "https://github.com/nim-lang/Nim/graphs/contributors",
          title: "Contributors to nim-lang/Nim",
        },
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
      license: [
        { href: "https://github.com/nim-lang/Nim/blob/devel/copying.txt", title: "copying.txt" },
      ],
      influenced_by: [
        { href: "https://nim-lang.org/araq/destructors.html", title: "Nim without GC" },
      ],
    },
    releases: [
      { version: "unknown", date: "2008-01-01", kind: "first" },
      { version: "2.0.4", date: "2024-01-01", kind: "stable" },
    ],
    extensions: [".nim", ".nims", ".nimble"],
    people: [["person+Andreas-Rumpf", "designer"]],
    paradigms: [
      "para+multi-paradigm",
      "para+compiled",
      "para+concurrent",
      "para+imperative",
      "para+functional",
      "para+objects",
      "para+meta",
    ],
    typeSystems: ["tsys+static", "tsys+strong", "tsys+inferred", "tsys+structural"],
    platforms: [
      "platf+ia-32",
      "platf+x86-64",
      "platf+arm",
      "platf+aarch64",
      "platf+risc-v",
      "platf+cross-platform",
    ],
    influences: [
      "pl+Ada",
      "pl+Modula-3",
      "pl+Lisp",
      "pl+C-Plus-Plus",
      "pl+Object-Pascal",
      "pl+Python",
      "pl+Oberon",
      "pl+Rust",
      "pl+ParaSail",
    ],
    influenced: [
      "pl+Ada",
      "pl+Object-Pascal",
      "pl+Lisp",
      "pl+C-Plus-Plus",
      "pl+Oberon-2",
      "pl+Modula-3",
      "pl+ParaSail",
      "pl+Oberon",
      "pl+C",
      "pl+Python",
    ],
  });
}
