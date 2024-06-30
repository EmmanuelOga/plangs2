import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+qml")
    .merge({
      name: "QML",
      websites: [{ kind: "wikipedia", title: "QML", href: "https://en.wikipedia.org/wiki/QML" }],
      releases: [{ version: "6.4", date: "2022-01-01", kind: "stable" }],
      extensions: [".qml"],
    })
    .addInfluences(["pl+json", "pl+javascript", "pl+qt"])
    .addInfluence("pl+xaml", {
      refs: [
        { href: "https://www.scriptol.com/ajax/ajax-xul-xaml.php", title: "Which interface for a modern application?" },
      ],
    })
    .addParadigms(["para+multi", "para+dec", "para+reactive", "para+scripting"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/
}
