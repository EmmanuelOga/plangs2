import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+logo",
    {
      name: "Logo",
      websites: [
        { kind: "wikipedia", title: "Logo", href: "https://en.wikipedia.org/wiki/Logo_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/KochTurtleAnim.gif/300px-KochTurtleAnim.gif",
        },
      ],
    },
    {
      dialects: ["pl+netlogo", "pl+starlogo"],
      implementations: ["pl+ucblogo"],
      influences: ["pl+lisp"],
      people: ["person+cynthia-solomon", "person+seymour-papert", "person+wally-feurzeig"],
      paradigms: ["para+educational", "para+functional", "para+imperative", "para+multi", "para+reflective"],
      typeSystems: ["tsys+dynamic"],
    },
  );
}
