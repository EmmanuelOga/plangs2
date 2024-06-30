import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+f-sharp",
    "F#",
    {
      name: "F#",
      websites: [
        { kind: "wikipedia", title: "F#", href: "https://en.wikipedia.org/wiki/F_Sharp_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/66/F_Sharp_logo.svg" }],
      releases: [{ version: "8.0.0", date: "2023-01-01", kind: "stable" }],
    },
    {
      influences: [
        "pl+c-sharp",
        "pl+erlang",
        "pl+haskell",
        "pl+ml",
        "pl+ocaml",
        "pl+python",
        "pl+scala",
        "pl+ms-visual-c-sharp",
        "pl+poly-slashml",
        "pl+sml",
      ],
      licenses: ["lic+mit"],
      paradigms: [
        "para+multi",
        "para+functional",
        "para+imperative",
        "para+objects",
        "para+agent",
        "para+meta",
        "para+reflective",
        "para+concurrent",
      ],
      people: ["person+don-syme"],
      platforms: ["platf+cross-platform", "platf+.net", "platf+mono"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+inferred"],
    },
  );
}
