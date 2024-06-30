import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+d",
    {
      name: "D",
      websites: [
        { kind: "wikipedia", title: "D", href: "https://en.wikipedia.org/wiki/D_(programming_language)" },
        { kind: "wikipedia", title: "D programming language", href: "https://en.wikipedia.org/wiki/D_language" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/24/D_Programming_Language_logo.svg" },
      ],
      releases: [{ version: "2.108.0", date: "2024-01-01", kind: "stable" }],
    },
    {
      influences: [
        "pl+ada",
        "pl+basic",
        "pl+c",
        "pl+c-sharp",
        "pl+cpp",
        "pl+eiffel",
        "pl+java",
        "pl+ms-visual-c-sharp",
        "pl+python",
        "pl+ruby",
      ],
      people: ["person+andrei-alexandrescu", "person+walter-bright"],
      licenses: ["lic+boost"],
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+objects"],
      platforms: ["platf+bsd", "platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );
}
