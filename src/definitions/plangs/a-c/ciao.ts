import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ciao",
    {
      name: "Ciao",
      websites: [
        { kind: "wikipedia", title: "Ciao", href: "https://en.wikipedia.org/wiki/Ciao_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Logo_for_Ciao_programming_language.png/121px-Logo_for_Ciao_programming_language.png",
        },
      ],
    },
    {
      influences: ["pl+prolog"],
      licenses: ["lic+gpl", "lic+lgpl"],
      paradigms: ["para+logic", "para+functional", "para+modular", "para+objects"],
      platforms: ["platf+cross-platform", "platf+unix", "platf+mac", "platf+win"],
    },
  );
}
