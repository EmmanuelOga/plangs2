import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+lelisp",
    "LeLisp",
    {
      name: "LeLisp",
      websites: [
        { kind: "wikipedia", title: "LeLisp", href: "https://en.wikipedia.org/wiki/LeLisp" },
        { kind: "homepage", title: "www.eligis.com/lelisp", href: "http://www.eligis.com/lelisp" },
      ],
      releases: [
        { version: "unknown", date: "1981-01-01", kind: "first" },
        { version: "15.26.13", date: "2020-01-08", kind: "stable" },
      ],
    },
    {
      dialects: ["pl+lisp-programming-language"],
      implementations: ["pl+c"],
      influenced: ["pl+eulisp"],
      influences: ["pl+islisp", "pl+lisp", "pl+openlisp"],
      licenses: ["lic+bsd-s", "lic+proprietary"],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi", "para+reflection"],
      people: [
        ["person+emmanuel-st-james", "designer"],
        ["person+jean-marie-hullot", "designer"],
        ["person+jerome-chailloux", "designer"],
        ["person+matthieu-devin", "designer"],
      ],
      platforms: [
        "platf+bsd",
        "platf+dec-alpha",
        "platf+linux",
        "platf+mac",
        "platf+mips-architecture",
        "platf+openvms",
        "platf+unix",
        "platf+windows",
        "platf+x86",
      ],
    },
  );

  /**/
}
