import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+qml")
    .merge({
      name: "QML",
      websites: [{ kind: "wikipedia", title: "QML", href: "https://en.wikipedia.org/wiki/QML" }],
      releases: [{ name: "QML", version: "6.4", date: "2022-01-01", kind: "stable" }],
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

  g.buildPlang("pl+qt")
    .merge({
      name: "Qt",
      websites: [{ kind: "wikipedia", title: "Qt", href: "https://en.wikipedia.org/wiki/Qt_(framework)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/81/Qt_logo_neon_2022.svg" }],
      releases: [{ name: "Qt", version: "6.7.1", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+qml"])
    .addPlatforms(["platf+cross-platform"]);

  /**/

  g.buildPlang("pl+qtscript").merge({
    name: "QtScript",
    websites: [{ kind: "wikipedia", title: "QtScript", href: "https://en.wikipedia.org/wiki/QtScript" }],
  });

  /**/
}
