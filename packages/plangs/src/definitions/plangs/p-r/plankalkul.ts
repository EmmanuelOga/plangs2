import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+plankalkul")
    .merge({
      name: "Plankalkül",
      websites: [{ kind: "wikipedia", title: "Plankalkül", href: "https://en.wikipedia.org/wiki/Plankalk%C3%BCl" }],
    })
    .addImplementations(["pl+free-university-of-berlin"])
    .addInfluence("pl+begriffsschrift", {
      refs: [
        {
          href: "https://web.archive.org/web/20231102214019/https://web.stanford.edu/class/cs208e/cgi-bin/main.cgi/static/lectures/17-ProgrammingEarlyDays/EarlyProgrammingLanguages.pdf",
          title: "Early Programming Languages / CS208e: Great Ideas in Computer Science",
        },
      ],
    })
    .addPerson("person+konrad-zuse", { role: "designer" })
    .addParadigms(["para+imperative"]);

  /**/
}
