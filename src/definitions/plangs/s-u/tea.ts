import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+tea")
    .merge({
      name: "Tea",
      websites: [
        { kind: "wikipedia", title: "Tea", href: "https://en.wikipedia.org/wiki/Tea_(programming_language)" },
        { kind: "repository", title: "Tea", href: "https://github.com/jorgefranconunes/tea" },
      ],
    })
    .addInfluences(["pl+java", "pl+scheme"])
    .addInfluence("pl+tcl", {
      refs: [{ href: "https://fossil-scm.org/home/doc/trunk/www/th1.md", title: "TH1 Scripts" }],
    })
    .addParadigms(["para+multi", "para+functional", "para+objects", "para+class"]);

  /**/
}
