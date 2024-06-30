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
      influences: ["pl+algol", "pl+fortran", "pl+jovial"],
      people: ["person+philip-woodward"],
      paradigms: ["para+imperative", "para+structured"],
      platforms: [
        "platf+bsd",
        "platf+dec",
        "platf+intel-8080",
        "platf+linux",
        "platf+openvms",
        "platf+unix",
        "platf+x86",
        "platf+zilog-z80",
      ],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );
}
