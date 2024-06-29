import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+racket",
    "Racket",
    {
      name: "Racket",
      websites: [
        { kind: "wikipedia", title: "Racket", href: "https://en.wikipedia.org/wiki/Racket_(programming_language)" },
        { kind: "homepage", title: "racket-lang.org", href: "https://racket-lang.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Racket-logo.svg" }],
      releases: [
        { version: "unknown", date: "1995-01-28", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "8.13", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".rkt"],
    },
    {
      influences: ["pl+scheme", "pl+eiffel"],
      licenses: ["lic+mit", "lic+apache"],
      paradigms: [
        "para+multi",
        "para+functional",
        "para+imperative",
        "para+logic",
        "para+meta",
        "para+modular",
        "para+objects",
        "para+reflective",
      ],
      platforms: ["platf+x86", "platf+mips", "platf+arm", "platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+static", "tsys+strong"],
    },
  );
}
