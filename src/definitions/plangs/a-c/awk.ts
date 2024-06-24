import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+awk",
    "AWK",
    {
      name: "AWK",
      websites: [{ kind: "wikipedia", title: "AWK", href: "https://en.wikipedia.org/wiki/AWK" }],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/The-AWK-Programming-Language.svg" },
      ],
      references: {
        paradigm: [
          {
            href: "https://web.archive.org/web/20150427143548/https://www6.software.ibm.com/developerworks/education/au-gawk/au-gawk-a4.pdf",
            title: "Get started with GAWK: AWK language fundamentals",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "1977-01-01", kind: "first" },
        { version: "unknown", date: "1985-01-01", kind: "stable" },
      ],
    },
    {
      influenced: ["pl+ampl", "pl+ecmascript", "pl+javascript", "pl+korn-shell", "pl+lua", "pl+perl", "pl+tcl"],
      influences: ["pl+c", "pl+sed", "pl+snobol"],
      paradigms: ["para+data", "para+imperative", "para+scripting"],
      people: [
        ["person+alfred-aho", "designer"],
        ["person+brian-kernighan", "designer"],
        ["person+peter-weinberger", "designer"],
      ],
      platforms: ["platf+cross-platform"],
    },
  );

  /**/
}
