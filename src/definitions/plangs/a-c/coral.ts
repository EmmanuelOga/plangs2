import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+coral",
    "Coral 66",
    {
      name: "Coral 66",
      websites: [
        { kind: "wikipedia", title: "Coral 66", href: "https://en.wikipedia.org/wiki/CORAL" },
        { kind: "wikipedia", title: "Coral 66", href: "https://en.wikipedia.org/wiki/Coral_66" },
      ],
      releases: [{ version: "unknown", date: "1964-01-01", kind: "first" }],
      references: {
        os: [
          {
            href: "https://web.archive.org/web/20210123102547/https://assets1.dxc.technology/manufacturing/downloads/MD_6841a-18_Coral_Offer_Overview_v4.pdf",
            title: "Gain the advantage with CORAL, CORAL+ and Context",
          },
        ],
      },
    },
    {
      implementations: ["pl+bcpl"],
      influences: ["pl+algol", "pl+fortran", "pl+jovial"],
      paradigms: ["para+imperative", "para+structured"],
      people: [["person+philip-woodward", "designer"]],
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
