import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+coral")
    .merge({
      name: "Coral 66",
      websites: [
        { kind: "wikipedia", title: "Coral 66", href: "https://en.wikipedia.org/wiki/Coral_66" },
        { kind: "wikipedia", title: "Coral 66", href: "https://en.wikipedia.org/wiki/CORAL" },
      ],
    })
    .addImplementations(["pl+bcpl"])
    .addInfluences(["pl+algol", "pl+jovial", "pl+fortran"])
    .addPerson("person+philip-woodward", { role: "designer" })
    .addParadigms(["para+imperative", "para+structured"])
    .addPlatforms([
      "platf+dec",
      "platf+x86",
      "platf+intel-8080",
      "platf+zilog-z80",
      "platf+bsd",
      "platf+unix",
      "platf+linux",
    ])
    .addPlatform("platf+openvms", {
      refs: [
        {
          href: "https://web.archive.org/web/20210123102547/https://assets1.dxc.technology/manufacturing/downloads/MD_6841a-18_Coral_Offer_Overview_v4.pdf",
          title: "Gain the advantage with CORAL, CORAL+ and Context",
        },
      ],
    })
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/
}
