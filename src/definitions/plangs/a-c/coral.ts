import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+coral",
    {
      name: "Coral 66",
      websites: [
        { kind: "wikipedia", title: "Coral 66", href: "https://en.wikipedia.org/wiki/Coral_66" },
        { kind: "wikipedia", title: "Coral 66", href: "https://en.wikipedia.org/wiki/CORAL" },
      ],
    },
    {
      implementations: ["pl+bcpl"],
      influences: ["pl+algol", "pl+jovial", "pl+fortran"],
      paradigms: ["para+imperative", "para+structured"],
      people: ["person+philip-woodward"],
      platforms: [
        "platf+dec",
        "platf+x86",
        "platf+intel-8080",
        "platf+zilog-z80",
        "platf+openvms",
        "platf+bsd",
        "platf+unix",
        "platf+linux",
      ],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );
}
