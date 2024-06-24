import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+hypertalk",
    "HyperTalk",
    {
      name: "HyperTalk",
      websites: [{ kind: "wikipedia", title: "HyperTalk", href: "https://en.wikipedia.org/wiki/HyperTalk" }],
      releases: [{ version: "unknown", date: "1987-01-01", kind: "first" }],
    },
    {
      influenced: [
        "pl+actionscript",
        "pl+applescript",
        "pl+ecmascript",
        "pl+javascript",
        "pl+sensetalk",
        "pl+transcript",
      ],
      influences: [
        "pl+actionscript",
        "pl+applescript",
        "pl+ecmascript",
        "pl+javascript",
        "pl+lingo",
        "pl+livecode",
        "pl+natural-language-programming",
        "pl+pascal",
        "pl+sensetalk",
        "pl+supertalk",
      ],
      paradigms: ["para+event", "para+imperative"],
    },
  );

  /**/
}
