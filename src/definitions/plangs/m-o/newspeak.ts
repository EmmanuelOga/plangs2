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
      implementations: ["pl+cpp", "pl+javascript"],
      influences: ["pl+beta", "pl+e", "pl+self", "pl+smalltalk"],
      licenses: ["lic+apache"],
      paradigms: ["para+functional", "para+objects"],
      people: [
        ["person+eliot-miranda", { role: "developer" }],
        ["person+gilad-bracha", { role: "designer" }],
        ["person+peter-von-der-ahe", { role: "developer" }],
        ["person+ryan-macnak", { role: "developer" }],
        ["person+vassili-bykov", { role: "developer" }],
        ["person+william-maddox", { role: "developer" }],
        ["person+yaron-kashai", { role: "developer" }],
      ],
      platforms: ["platf+android", "platf+linux", "platf+mac", "platf+web", "platf+win"],
      typeSystems: ["tsys+dynamic", "tsys+optional"],
    },
  );
}
