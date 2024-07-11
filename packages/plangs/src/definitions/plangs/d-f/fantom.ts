import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+fantom")
    .merge({
      name: "Fantom",
      websites: [
        { kind: "wikipedia", title: "Fantom", href: "https://en.wikipedia.org/wiki/Fantom_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Fantom-logo.png" }],
      releases: [{ name: "Fantom", version: "1.0.79", date: "2023-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+c-sharp", "pl+java", "pl+scala", "pl+ruby", "pl+erlang"])
    .addLicense("lic+academic-free", {
      refs: [{ href: "http://fantom.org/doc/docIntro/Faq.html", title: "FAQ of Fandoc language website" }],
    })
    .addParadigms(["para+multi"])
    .addTypeSystems(["tsys+static", "tsys+dynamic"]);

  /**/
}
