import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+rpl")
    .merge({
      name: "RPL",
      websites: [{ kind: "wikipedia", title: "RPL", href: "https://en.wikipedia.org/wiki/RPL_(programming_language)" }],
    })
    .addInfluences(["pl+forth", "pl+reverse-polish-notation"])
    .addInfluence("pl+lisp", {
      refs: [
        {
          href: "https://web.archive.org/web/20111206105511/http://www.hpl.hp.com/hpjournal/pdfs/IssuePDFs/1987-08.pdf",
          title: "Computation for Handheld Calculators",
        },
      ],
    })
    .addParadigms(["para+concatenative", "para+structured"])
    .addParadigm("para+stack", {
      refs: [
        {
          href: "https://web.archive.org/web/20211203131528/https://www.hpmuseum.org/forum/showthread.php?mode=linear&tid=15509&pid=135732",
          title: "The Joy of Programming?",
        },
      ],
    });

  /**/
}
