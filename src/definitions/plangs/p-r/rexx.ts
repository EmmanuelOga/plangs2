import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+rexx",
    "REXX",
    {
      name: "REXX",
      websites: [{ kind: "wikipedia", title: "REXX", href: "https://en.wikipedia.org/wiki/REXX" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Rexx-img-lg.png/220px-Rexx-img-lg.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1979-01-01", kind: "first" },
        { version: "3.274", date: "1996-01-01", kind: "stable" },
      ],
      extensions: [".cmd", ".bat", ".exec", ".rexx", ".rex", "EXEC"],
      references: {
        major_implementations: [
          { href: "http://www.manmrk.net/tutorials/rexx/rexxvmref.pdf", title: "REXX/VM Reference" },
          { href: "http://regina-rexx.sourceforge.net", title: "Regina Rexx Interpreter" },
        ],
      },
    },
    {
      dialects: ["pl+netrexx", "pl+object-rexx", "pl+oorexx", "pl+xedit"],
      implementations: ["pl+arexx"],
      influences: ["pl+algol", "pl+cms-exec", "pl+exec-2", "pl+pl-slash1", "pl+pl-slashi"],
      paradigms: ["para+imperative", "para+multi", "para+structured"],
      people: [["person+mike-cowlishaw", "designer"]],
      typeSystems: ["tsys+dynamic"],
    },
  );
}
