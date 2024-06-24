import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+newspeak",
    "Newspeak",
    {
      name: "Newspeak",
      websites: [
        { kind: "wikipedia", title: "Newspeak", href: "https://en.wikipedia.org/wiki/Newspeak_(programming_language)" },
        { kind: "homepage", title: "newspeaklanguage.org", href: "http://newspeaklanguage.org" },
      ],
      releases: [
        { version: "unknown", date: "2006-01-01", kind: "first" },
        { version: "unknown", date: "2013-01-01", kind: "stable" },
      ],
    },
    {
      dialects: ["pl+squeak"],
      implementations: ["pl+c-plus-plus", "pl+javascript"],
      influenced: ["pl+smalltalk"],
      influences: ["pl+beta", "pl+e", "pl+self", "pl+smalltalk"],
      licenses: ["lic+apache"],
      paradigms: ["para+functional", "para+objects"],
      people: [
        ["person+eliot-miranda", "designer"],
        ["person+gilad-bracha", "designer"],
        ["person+peter-von-der-ahe", "designer"],
        ["person+ryan-macnak", "designer"],
        ["person+vassili-bykov", "designer"],
        ["person+william-maddox", "designer"],
        ["person+yaron-kashai", "designer"],
      ],
      platforms: ["platf+android", "platf+linux", "platf+mac", "platf+web", "platf+win"],
      typeSystems: ["tsys+dynamic", "tsys+optional"],
    },
  );

  /**/
}
