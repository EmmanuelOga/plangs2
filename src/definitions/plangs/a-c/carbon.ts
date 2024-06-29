import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+carbon",
    "Carbon",
    {
      name: "Carbon",
      websites: [
        { kind: "wikipedia", title: "Carbon", href: "https://en.wikipedia.org/wiki/Carbon_(programming_language)" },
        { kind: "repository", title: "github.com/carbon-language", href: "https://github.com/carbon-language" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Carbon_logo.png/121px-Carbon_logo.png",
        },
      ],
      extensions: [".carbon"],
    },
    {
      implementations: ["pl+cpp"],
      influences: ["pl+cpp"],
      licenses: ["lic+apache"],
      typeSystems: ["tsys+static", "tsys+nominative", "tsys+inferred"],
    },
  );
}
