import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+go",
    {
      name: "Go",
      websites: [{ kind: "wikipedia", title: "Go", href: "https://en.wikipedia.org/wiki/Go_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" }],
      releases: [{ version: "1.22.4", date: "2024-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+assembly", "pl+cpp"],
      influences: [
        "pl+alef",
        "pl+bcpl",
        "pl+c",
        "pl+d",
        "pl+dis-virtual-machine",
        "pl+erlang",
        "pl+limbo",
        "pl+modula",
        "pl+newsqueak",
        "pl+oberon",
        "pl+oberon-2",
        "pl+occam",
        "pl+python",
        "pl+smalltalk",
      ],
      people: ["person+ken-thompson", "person+rob-pike", "person+robert-griesemer"],
      licenses: ["lic+bsd-c", "lic+patents"],
      paradigms: ["para+concurrent", "para+functional", "para+imperative", "para+multi", "para+objects"],
      platforms: ["platf+bsd", "platf+linux", "platf+mac", "platf+plan9", "platf+win"],
      typeSystems: ["tsys+inferred", "tsys+nominative", "tsys+static", "tsys+strong", "tsys+structural"],
    },
  );
}
