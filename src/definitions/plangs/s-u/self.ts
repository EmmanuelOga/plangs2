import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+self",
    {
      name: "Self",
      websites: [
        { kind: "wikipedia", title: "Self", href: "https://en.wikipedia.org/wiki/Self_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/88/Self-logo.svg" }],
      releases: [{ version: "2017.1", date: "2017-01-01", kind: "stable" }],
    },
    {
      dialects: ["pl+newspeak"],
      influences: ["pl+apl", "pl+smalltalk"],
      people: ["person+david-ungar"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+objects", "para+prototypes"],
      platforms: ["platf+cross-platform", "platf+mac", "platf+unix", "platf+win"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );
}
