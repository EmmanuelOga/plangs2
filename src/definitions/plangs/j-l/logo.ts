import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+logo")
    .merge({
      name: "Logo",
      websites: [
        { kind: "wikipedia", title: "Logo", href: "https://en.wikipedia.org/wiki/Logo_(programming_language)" },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/KochTurtleAnim.gif/300px-KochTurtleAnim.gif",
        },
      ],
    })
    .addDialects(["pl+starlogo", "pl+netlogo"])
    .addImplementations(["pl+ucblogo"])
    .addInfluences(["pl+lisp"])
    .addPerson("person+wally-feurzeig", { role: "designer" })
    .addPerson("person+seymour-papert", { role: "designer" })
    .addPerson("person+cynthia-solomon", { role: "designer" })
    .addParadigms(["para+multi", "para+functional", "para+educational", "para+imperative", "para+reflective"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
