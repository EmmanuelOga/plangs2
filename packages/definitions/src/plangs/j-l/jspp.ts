import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+jspp")
    .merge({
      name: "JS++",
      websites: [{ kind: "wikipedia", title: "JS++", href: "https://en.wikipedia.org/wiki/JS%2B%2B" }],
    })
    .addInfluences(["pl+c", "pl+java", "pl+javascript", "pl+c-sharp"])
    .addInfluence("pl+cpp", {
      refs: [
        {
          href: "https://web.archive.org/web/20200511095442/https://www.onux.com/jspp/blog/scaling-jspp-abstraction-performance-and-readability/",
          title: "Scaling JS++: Abstraction, Performance, and Readability",
        },
      ],
    })
    .addLicenses(["lic+bsd"])
    .addParadigms(["para+imperative", "para+structured", "para+objects", "para+functional", "para+generic"])
    .addTypeSystems(["tsys+gradual", "tsys+static", "tsys+dynamic"]);

  /**/
}
