import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+prolog", {
      name: "Prolog",
      description:
        "Prolog is a logic programming language that has its origins in artificial intelligence, automated theorem proving and computational linguistics.",
      firstAppeared: "1972-01-01",
      extensions: [".P", ".pl", ".pro"],
      websites: [
        { href: "https://www.iso.org/standard/21413.html", title: "www.iso.org/standard/21413.html", kind: "other" },
        { href: "https://www.iso.org/standard/20775.html", title: "www.iso.org/standard/20775.html", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Prolog", title: "Prolog", kind: "wikipedia" },
      ],
    })
    .addImplements(["pl+curry"])
    .addParadigms(["para+logic"]);
}
