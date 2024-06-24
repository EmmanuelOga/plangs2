import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+prolog",
    "Prolog",
    {
      name: "Prolog",
      websites: [
        { kind: "wikipedia", title: "Prolog", href: "https://en.wikipedia.org/wiki/Prolog" },
        { kind: "homepage", title: "www.iso.org/standard/21413.html", href: "https://www.iso.org/standard/21413.html" },
        { kind: "homepage", title: "www.iso.org/standard/20775.html", href: "https://www.iso.org/standard/20775.html" },
      ],
      releases: [
        { version: "unknown", date: "1972-01-01", kind: "first" },
        { version: "unknown", date: "1995-01-01", kind: "stable" },
      ],
      extensions: [".pl", ".pro", ".P"],
    },
    {
      dialects: ["pl+datalog"],
      implementations: [
        "pl+b-prolog",
        "pl+ciao",
        "pl+eclipse",
        "pl+gnu-prolog",
        "pl+logic-programming-associates",
        "pl+poplog",
        "pl+quintus-prolog",
        "pl+swi-prolog",
        "pl+xsb",
        "pl+yap",
      ],
      influenced: [
        "pl+algebraic-logic-functional",
        "pl+ciao",
        "pl+clojure",
        "pl+constraint-handling-rules",
        "pl+curry",
        "pl+datalog",
        "pl+erlang",
        "pl+go-",
        "pl+logtalk",
        "pl+mdl",
        "pl+mercury",
        "pl+oz",
        "pl+planner",
        "pl+wolfram",
        "pl+xsb",
      ],
      influences: [
        "pl+clojure",
        "pl+constraint-handling-rules",
        "pl+datalog",
        "pl+erlang",
        "pl+kl0",
        "pl+kl1",
        "pl+logtalk",
        "pl+mercury",
        "pl+oz",
        "pl+planner",
        "pl+strand",
        "pl+visual-prolog",
      ],
      paradigms: ["para+logic"],
      people: [["person+alain-colmerauer", "designer"]],
    },
  );

  /**/
}
