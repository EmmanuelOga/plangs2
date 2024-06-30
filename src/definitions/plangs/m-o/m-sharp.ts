import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+m-sharp")
    .merge({
      name: "M#",
      websites: [
        { kind: "wikipedia", title: "M#", href: "https://en.wikipedia.org/wiki/M_Sharp_(programming_language)" },
        { kind: "homepage", title: "http://www.msharp.co.uk/", href: "http://www.msharp.co.uk/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Msharp_logo.png" }],
    })
    .addImplementations(["pl+ms-visual-c-sharp", "pl+.net-framework", "pl+asp.net", "pl+domain-specific"])
    .addParadigms(["para+multi", "para+structured", "para+objects", "para+event", "para+imperative", "para+meta"])
    .addTypeSystems(["tsys+static", "tsys+dynamic"]);

  /**/
}
