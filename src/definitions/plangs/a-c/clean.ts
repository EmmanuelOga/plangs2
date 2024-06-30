import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+clean")
    .merge({
      name: "Clean",
      websites: [
        { kind: "wikipedia", title: "Clean", href: "https://en.wikipedia.org/wiki/Clean_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/4/4b/Clean_3.0_%28programming_language%29_logo.svg",
        },
      ],
      releases: [{ name: "Clean", version: "3.1", date: "2022-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+miranda", "pl+haskell", "pl+iswim"])
    .addLicense("lic+bsd-s", {
      refs: [{ href: "https://clean.cs.ru.nl/Download_Clean#Clean_3.0_License", title: "Download Clean" }],
    })
    .addParadigms(["para+functional"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+strong", "tsys+static", "tsys+dynamic"]);

  /**/
}
