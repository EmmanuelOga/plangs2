import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+forth",
    "Forth",
    {
      name: "Forth",
      websites: [
        { kind: "wikipedia", title: "Forth", href: "https://en.wikipedia.org/wiki/Forth_(programming_language)" },
        { kind: "homepage", title: "forth-standard.org", href: "https://forth-standard.org" },
      ],
      releases: [{ version: "unknown", date: "1970-01-01", kind: "first" }],
    },
    {
      implementations: ["pl+gforth"],
      influenced: ["pl+befunge", "pl+factor", "pl+joy", "pl+lisp", "pl+rebol", "pl+rpl", "pl+stoic"],
      influences: ["pl+bitcoin", "pl+factor", "pl+joy", "pl+rebol", "pl+rpl", "pl+stoic"],
      paradigms: ["para+concatenative", "para+imperative", "para+reflective", "para+stack"],
      people: [["person+charles-h-moore", "designer"]],
    },
  );

  /**/
}
