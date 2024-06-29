import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+reason",
    "Reason",
    {
      name: "Reason",
      websites: [
        { kind: "wikipedia", title: "Reason", href: "https://en.wikipedia.org/wiki/Reason_(programming_language)" },
        { kind: "repository", title: "reasonml.github.io", href: "https://reasonml.github.io/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/a/af/Reason-logo.svg" }],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "2016-05-16", kind: "first" },
        { version: "3.11.0", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".re", ".rei"],
    },
    {
      influences: ["pl+ocaml", "pl+javascript"],
      licenses: ["lic+mit"],
      paradigms: ["para+multi", "para+functional", "para+imperative", "para+modular", "para+objects"],
      people: ["person+jordan-walke"],
    },
  );
}
