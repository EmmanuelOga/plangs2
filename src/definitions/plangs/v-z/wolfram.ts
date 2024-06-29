import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+wolfram",
    "Wolfram Language",
    {
      name: "Wolfram Language",
      websites: [
        { kind: "wikipedia", title: "Wolfram Language", href: "https://en.wikipedia.org/wiki/Wolfram_Language" },
        { kind: "homepage", title: "www.wolfram.com/language/", href: "https://www.wolfram.com/language/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/1/17/Wolfram_Language_Logo_2016.svg" }],
      releases: [
        { version: "unknown", date: "1988-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "14.0.0", date: "2024-01-09", kind: "stable" },
      ],
      extensions: [".nb", ".m", ".wl"],
    },
    {
      implementations: ["pl+wolfram-mathematica"],
      influences: [
        "pl+apl",
        "pl+c",
        "pl+cpp",
        "pl+fortran",
        "pl+lisp",
        "pl+pascal",
        "pl+prolog",
        "pl+schoonschip",
        "pl+simula",
        "pl+smalltalk",
        "pl+symbolic-manipulation-program",
      ],
      licenses: ["lic+proprietary"],
      paradigms: ["para+multi", "para+term", "para+functional", "para+imperative", "para+array"],
      people: ["person+stephen-wolfram"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );
}
