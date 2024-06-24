import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ada",
    "Ada",
    {
      name: "Ada",
      websites: [
        { kind: "wikipedia", title: "Ada", href: "https://en.wikipedia.org/wiki/Ada_(programming_language)" },
        { kind: "homepage", title: "www.adaic.org", href: "https://www.adaic.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/3/31/Ada_horizon_green_logo_with_slogan.svg",
        },
      ],
      references: {
        paradigm: [
          {
            href: "https://web.archive.org/web/20160418132340/http://www.adacore.com/uploads/technical-papers/Ada2012_Rational_Introducion.pdf",
            title: "Ada2012 Rationale",
          },
        ],
        major_implementations: [
          { href: "https://www.adacore.com/download", title: "Commercial software solutions for Ada, C and C++" },
          { href: "http://www.ptc.com/developer-tools/objectada", title: "PTC ObjectAda" },
          { href: "https://www.mapusoft.com/ada-to-c-changer/", title: "MapuSoft Ada-C/C++ changer" },
          { href: "http://ada-auth.org/cpl/details/151.html", title: "Ada 95 Certified Processors List - Details" },
        ],
        influenced: [
          {
            href: "https://ghostarchive.org/archive/20221009/http://chapel.cray.com/spec/spec-0.98.pdf",
            title: "Chapel spec (Acknowledgements)",
          },
          {
            href: "https://web.archive.org/web/20200914212150/http://www.iuma.ulpgc.es/users/gsd/Drago/",
            title: "Drago",
          },
          { href: "https://cs.nyu.edu/~goldberg/griffin.html", title: "The Griffin Project" },
          { href: "https://www.sparforte.com/", title: "SparForte Programming Language" },
        ],
      },
      releases: [
        { version: "unknown", date: "1980-01-01", kind: "first" },
        { version: "unknown", date: "2022-01-01", kind: "stable" },
      ],
      extensions: [".adb", ".ads"],
    },
    {
      implementations: ["pl+ddc-i", "pl+gnat", "pl+green-hills-software", "pl+ptc"],
      influenced: [
        "pl+algol-60",
        "pl+amiga-e",
        "pl+chapel",
        "pl+clu",
        "pl+cpp",
        "pl+eiffel",
        "pl+java",
        "pl+modula-2",
        "pl+nim",
        "pl+parasail",
        "pl+pascal",
        "pl+pl-slashpgsql",
        "pl+python",
        "pl+ruby",
        "pl+seed7",
        "pl+spark",
        "pl+sql-slashpsm",
        "pl+verilog",
        "pl+vhdl",
      ],
      influences: [
        "pl+algol-68",
        "pl+chapel",
        "pl+cpp",
        "pl+d",
        "pl+eiffel",
        "pl+java",
        "pl+modula-2",
        "pl+nim",
        "pl+parasail",
        "pl+pascal",
        "pl+pl-slashpgsql",
        "pl+pl-slashsql",
        "pl+python",
        "pl+ruby",
        "pl+seed7",
        "pl+simula-67",
        "pl+smalltalk",
        "pl+sql-slashpsm",
        "pl+vhdl",
      ],
      paradigms: [
        "para+array",
        "para+aspect",
        "para+concurrent",
        "para+distributed",
        "para+generic",
        "para+imperative",
        "para+meta",
        "para+multi",
        "para+objects",
        "para+structured",
      ],
      people: [["person+jean-ichbiah", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+nominative", "tsys+safe", "tsys+static", "tsys+strong"],
    },
  );

  /**/
}
