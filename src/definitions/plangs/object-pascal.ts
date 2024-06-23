import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+object-pascal",
    "Object Pascal",
    {
      name: "Object Pascal",
      websites: [{ kind: "wikipedia", title: "Object Pascal", href: "https://en.wikipedia.org/wiki/Object_Pascal" }],
      references: {
        designed_by: [
          {
            href: "https://web.archive.org/web/20240229162502/https://books.google.com/books?id=RzoEAAAAMBAJ&pg=PT27#v=onepage&q&f=false",
            title: "Borland and Microsoft Enter the Object-Oriented Pascal Ring",
          },
        ],
        developers: [
          {
            href: "https://web.archive.org/web/20240229162502/https://books.google.com/books?id=RzoEAAAAMBAJ&pg=PT27#v=onepage&q&f=false",
            title: "Borland and Microsoft Enter the Object-Oriented Pascal Ring",
          },
        ],
      },
      releases: [{ version: "unknown", date: "1986-01-01", kind: "first" }],
      extensions: [".p", ".pp", ".pas"],
    },
    {
      implementations: [
        "pl+.net",
        "pl+arm-architecture-family",
        "pl+cocoa",
        "pl+delphi",
        "pl+free-pascal",
        "pl+java",
        "pl+javascript",
        "pl+mips-architecture",
        "pl+oxygene",
        "pl+powerpc",
        "pl+ppc64",
        "pl+sparc",
        "pl+x86",
      ],
      influenced: ["pl+genie", "pl+java", "pl+nim", "pl+oxygene", "pl+pascal", "pl+pascal-script"],
      influences: [
        "pl+c-sharp",
        "pl+c-slashal",
        "pl+genie",
        "pl+java",
        "pl+nim",
        "pl+pascal",
        "pl+simula",
        "pl+smalltalk",
      ],
      paradigms: [
        "para+component",
        "para+event",
        "para+functional",
        "para+generic",
        "para+imperative",
        "para+objects",
        "para+structured",
      ],
      people: [
        ["person+anders-hejlsberg", "designer"],
        ["person+borland-international", "designer"],
        ["person+larry-tesler", "designer"],
        ["person+niklaus-wirth", "designer"],
      ],
      platforms: ["platf+.net", "platf+arm", "platf+jvm", "platf+mips", "platf+x86"],
      typeSystems: ["tsys+dynamic", "tsys+safe", "tsys+strong"],
    },
  );

  /**/
}
