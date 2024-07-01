import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+rexx")
    .merge({
      name: "Rexx",
      websites: [{ kind: "wikipedia", title: "REXX", href: "https://en.wikipedia.org/wiki/REXX" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Rexx-img-lg.png/220px-Rexx-img-lg.png",
        },
      ],
      releases: [{ name: "Rexx", version: "3.274", date: "1996-01-01", kind: "stable" }],
    })
    .addDialects(["pl+netrexx", "pl+object-rexx", "pl+oorexx", "pl+xedit"])
    .addImplementation("pl+arexx", {
      refs: [{ href: "http://regina-rexx.sourceforge.net", title: "Regina Rexx Interpreter" }],
    })
    .addInfluences(["pl+pl-slash", "pl+algol", "pl+cms-exec", "pl+exec-2"])
    .addPerson("person+mike-cowlishaw", { role: "designer" })
    .addParadigms(["para+multi", "para+imperative", "para+structured"]);

  /**/
}
