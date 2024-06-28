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
      references: {
        first_appeared: [
          {
            href: "https://github.com/facebook/reason",
            title: "Simple, fast & type safe code that leverages the JavaScript & OCaml ecosystems: facebook/reason",
          },
        ],
        stable_release: [{ href: "https://github.com/reasonml/reason/releases/tag/3.11.0", title: "Release 3.11.0" }],
      },
      releases: [
        { version: "unknown", date: "2016-05-16", kind: "first" },
        { version: "3.11.0", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".re", ".rei"],
    },
    {
      influences: ["pl+javascript", "pl+ocaml"],
      licenses: ["lic+mit"],
      paradigms: ["para+functional", "para+imperative", "para+modular", "para+multi", "para+objects"],
      people: [["person+jordan-walke", "designer"]],
    },
  );
}
