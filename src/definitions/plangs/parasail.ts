import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+parasail",
    "ParaSail",
    {
      name: "ParaSail",
      websites: [
        { kind: "wikipedia", title: "ParaSail", href: "https://en.wikipedia.org/wiki/ParaSail_(programming_language)" },
        {
          kind: "wikipedia",
          title: "Sparkel",
          href: "https://en.wikipedia.org/wiki/ParaSail_(programming_language)#Description",
        },
        { kind: "homepage", title: "parasail-lang.org", href: "http://parasail-lang.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/c/c1/Logo_for_ParaSail_Programming_Language.jpg",
        },
      ],
      releases: [
        { version: "unknown", date: "2009-01-01", kind: "first" },
        { version: "9.3", date: "2021-06-06", kind: "stable" },
      ],
      extensions: [".psi", ".psl"],
      references: { influenced: [{ href: "https://nim-lang.org/araq/destructors.html", title: "Nim without GC" }] },
    },
    {
      influenced: ["pl+ada", "pl+nim"],
      influences: ["pl+ada", "pl+ml", "pl+modula", "pl+nim", "pl+pascal"],
      licenses: ["lic+gpl"],
      paradigms: ["para+compiled", "para+concurrent", "para+imperative", "para+objects", "para+structured"],
      people: [["person+s-tucker-taft", "designer"]],
      platforms: ["platf+linux", "platf+mac", "platf+windows", "platf+x86"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/
}
