import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+etoys",
    "Etoys",
    {
      name: "Etoys",
      websites: [
        { kind: "wikipedia", title: "Etoys", href: "https://en.wikipedia.org/wiki/Etoys_(programming_language)" },
      ],
      references: {
        developer: [{ href: "https://computerhistory.org/profile/dan-ingalls-2/", title: "Dan Ingalls" }],
        license: [{ href: "http://www.squeakland.org/download/license.jsp", title: "Squeakland : Download : License" }],
      },
      releases: [{ version: "unknown", date: "1996-01-01", kind: "first" }],
    },
    {
      implementations: ["pl+morphic", "pl+squeak", "pl+tweak"],
      influences: [
        "pl+agentsheets",
        "pl+hypercard",
        "pl+logo",
        "pl+objectlogo",
        "pl+smalltalk",
        "pl+squeak",
        "pl+starlogo",
        "pl+ucblogo",
      ],
      licenses: ["lic+apache", "lic+mit"],
      paradigms: ["para+educational", "para+objects", "para+prototypes"],
      people: [
        ["person+alan-kay", { role: "designer" }],
        ["person+andreas-raab", { role: "developer" }],
        ["person+dan-ingalls", { role: "developer" }],
        ["person+ted-kaehler", { role: "developer" }],
      ],
      typeSystems: ["tsys+dynamic"],
    },
  );
}
