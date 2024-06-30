import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+f-sharp",
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
        "pl+ms-visual-c-sharp",
        "pl+ocaml",
        "pl+poly-slashml",
        "pl+python",
        "pl+scala",
        "pl+sml",
      ],
      people: ["person+don-syme"],
      licenses: ["lic+mit"],
      paradigms: [
        "para+agent",
        "para+concurrent",
        "para+functional",
        "para+imperative",
        "para+meta",
        "para+multi",
        "para+objects",
        "para+reflective",
      ],
      platforms: ["platf+.net", "platf+cross-platform", "platf+mono"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );
}
