import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+go",
    "Go",
    {
      name: "Go",
      websites: [
        { kind: "wikipedia", title: "Go", href: "https://en.wikipedia.org/wiki/Go_(programming_language)" },
        { kind: "homepage", title: "go.dev", href: "https://go.dev" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" }],
      releases: [
        { version: "unknown", date: "2009-11-10", kind: "first" },
        { version: "1.22.4", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".go"],
    },
    {
      implementations: ["pl+assembly", "pl+cpp"],
      influences: [
        "pl+bcpl",
        "pl+modula",
        "pl+erlang",
        "pl+oberon-2",
        "pl+c",
        "pl+limbo",
        "pl+active-oberon",
        "pl+communicating-sequential-processes",
        "pl+pascal",
        "pl+oberon",
        "pl+smalltalk",
        "pl+newsqueak",
        "pl+alef",
        "pl+apl",
        "pl+occam",
        "pl+python",
        "pl+d",
      ],
      licenses: ["lic+bsd-c", "lic+patents"],
      paradigms: ["para+multi", "para+concurrent", "para+imperative", "para+functional", "para+objects"],
      people: ["person+robert-griesemer", "person+rob-pike", "person+ken-thompson"],
      platforms: ["platf+bsd", "platf+linux", "platf+mac", "platf+plan9", "platf+win"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural", "tsys+nominative"],
    },
  );
}
