import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+julia",
    {
      name: "Julia",
      websites: [
        { kind: "wikipedia", title: "Julia", href: "https://en.wikipedia.org/wiki/Julia_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Julia_Programming_Language_Logo.svg",
        },
      ],
      releases: [
        { version: "1.10.3", date: "2024-01-01", kind: "stable" },
        { version: "1.11.0", date: "2024-01-01", kind: "preview" },
      ],
    },
    {
      implementations: ["pl+c", "pl+cpp", "pl+llvm", "pl+scheme"],
      influences: [
        "pl+armed-bear-common-lisp",
        "pl+c",
        "pl+common-lisp",
        "pl+dylan",
        "pl+python",
        "pl+r",
        "pl+ruby",
        "pl+scheme",
      ],
      people: ["person+alan-edelman", "person+jeff-bezanson", "person+stefan-karpinski", "person+viral-b-shah"],
      licenses: ["lic+mit"],
      paradigms: [
        "para+array",
        "para+functional",
        "para+imperative",
        "para+meta",
        "para+multi",
        "para+objects",
        "para+reflective",
        "para+structured",
      ],
      platforms: [
        "platf+64-bit-computing",
        "platf+aarch64",
        "platf+arm",
        "platf+bsd",
        "platf+cuda",
        "platf+ia-32",
        "platf+linux",
        "platf+mac",
        "platf+oneapi",
        "platf+rocm",
        "platf+win",
        "platf+x86-64",
      ],
      typeSystems: [
        "tsys+dynamic",
        "tsys+inferred",
        "tsys+nominative",
        "tsys+optional",
        "tsys+parametric",
        "tsys+strong",
      ],
    },
  );
}
