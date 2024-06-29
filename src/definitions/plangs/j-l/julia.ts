import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+julia",
    "Julia",
    {
      name: "Julia",
      websites: [
        { kind: "wikipedia", title: "Julia", href: "https://en.wikipedia.org/wiki/Julia_(programming_language)" },
        { kind: "homepage", title: "JuliaLang.org", href: "https://JuliaLang.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Julia_Programming_Language_Logo.svg",
        },
      ],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "2012-01-01", kind: "first" },
        { version: "1.10.3", date: "2022-07-19", kind: "stable" },
        { version: "1.11.0", date: "2024-05-30", kind: "preview" },
      ],
      extensions: [".jl"],
    },
    {
      implementations: ["pl+c", "pl+cpp", "pl+llvm", "pl+scheme"],
      influences: [
        "pl+wolfram",
        "pl+scheme",
        "pl+lisp",
        "pl+matlab",
        "pl+r",
        "pl+ruby",
        "pl+dylan",
        "pl+lua",
        "pl+perl",
        "pl+python",
        "pl+fortress",
        "pl+common-lisp",
        "pl+c",
      ],
      licenses: ["lic+mit"],
      paradigms: [
        "para+multi",
        "para+objects",
        "para+functional",
        "para+array",
        "para+imperative",
        "para+structured",
        "para+reflective",
        "para+meta",
      ],
      people: ["person+jeff-bezanson", "person+alan-edelman", "person+stefan-karpinski", "person+viral-b-shah"],
      platforms: [
        "platf+x86-64",
        "platf+ia-32",
        "platf+mac",
        "platf+64-bit-computing",
        "platf+aarch64",
        "platf+cuda",
        "platf+bsd",
        "platf+arm",
        "platf+rocm",
        "platf+oneapi",
        "platf+linux",
        "platf+win",
      ],
      typeSystems: [
        "tsys+dynamic",
        "tsys+inferred",
        "tsys+optional",
        "tsys+nominative",
        "tsys+parametric",
        "tsys+strong",
      ],
    },
  );
}
