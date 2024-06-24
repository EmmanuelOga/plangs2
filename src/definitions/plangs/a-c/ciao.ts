import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ciao",
    "Ciao",
    {
      name: "Ciao",
      websites: [
        { kind: "wikipedia", title: "Ciao", href: "https://en.wikipedia.org/wiki/Ciao_(programming_language)" },
        { kind: "homepage", title: "www.ciao-lang.org", href: "http://www.ciao-lang.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Logo_for_Ciao_programming_language.png/121px-Logo_for_Ciao_programming_language.png",
        },
      ],
      releases: [{ version: "unknown", date: "1984-01-01", kind: "first" }],
    },
    {
      influences: ["pl+prolog"],
      licenses: ["lic+gpl", "lic+lgpl"],
      paradigms: ["para+functional", "para+logic", "para+modular", "para+objects"],
      platforms: ["platf+cross-platform", "platf+mac", "platf+unix", "platf+win"],
    },
  );

  /**/
}
