import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+b-prolog").merge({
    name: "B-Prolog",
    websites: [{ kind: "wikipedia", title: "B-Prolog", href: "https://en.wikipedia.org/wiki/B-Prolog" }],
  });

  /**/

  g.buildPlang("pl+gnu-prolog")
    .merge({
      name: "GNU Prolog",
      websites: [{ kind: "wikipedia", title: "GNU Prolog", href: "https://en.wikipedia.org/wiki/GNU_Prolog" }],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/en/2/22/Heckert_GNU_white.svg" }],
      releases: [{ name: "GNU Prolog", version: "1.5.0", date: "2021-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+gpl", "lic+lgpl"]);

  /**/

  g.buildPlang("pl+prolog")
    .merge({
      name: "Prolog",
      websites: [{ kind: "wikipedia", title: "Prolog", href: "https://en.wikipedia.org/wiki/Prolog" }],
      releases: [{ name: "Prolog", version: "unknown", date: "1995-01-01", kind: "stable" }],
      extensions: [".P", ".pl", ".pro"],
    })
    .addDialects(["pl+datalog"])
    .addImplementations([
      "pl+b-prolog",
      "pl+ciao",
      "pl+eclipse",
      "pl+gnu-prolog",
      "pl+poplog",
      "pl+quintus-prolog",
      "pl+swi-prolog",
      "pl+xsb",
      "pl+yap",
    ])
    .addInfluences(["pl+mdl", "pl+planner"])
    .addPerson("person+alain-colmerauer", { role: "designer" })
    .addParadigms(["para+logic"]);

  /**/

  g.buildPlang("pl+quintus-prolog")
    .merge({
      name: "Quintus Prolog",
      websites: [{ kind: "wikipedia", title: "Quintus Prolog", href: "https://en.wikipedia.org/wiki/Quintus_Prolog" }],
    })
    .addLicenses(["lic+proprietary"]);

  /**/

  g.buildPlang("pl+swi-prolog")
    .merge({
      name: "SWI-Prolog",
      websites: [{ kind: "wikipedia", title: "SWI-Prolog", href: "https://en.wikipedia.org/wiki/SWI-Prolog" }],
      releases: [
        { name: "SWI-Prolog", version: "9.2.2", date: "2024-01-01", kind: "stable" },
        { name: "SWI-Prolog", version: "9.3.2", date: "2024-01-01", kind: "preview" },
      ],
    })
    .addLicenses(["lic+bsd-s", "lic+lgpl"]);

  /**/

  g.buildPlang("pl+visual-prolog")
    .merge({
      name: "Visual Prolog",
      websites: [{ kind: "wikipedia", title: "Visual Prolog", href: "https://en.wikipedia.org/wiki/Visual_Prolog" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Visual_Prolog_IDE_Screenshot.png/300px-Visual_Prolog_IDE_Screenshot.png",
        },
      ],
      releases: [{ name: "Visual Prolog", version: "unknown", date: "1105-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+prolog"])
    .addParadigms([
      "para+multi",
      "para+logic",
      "para+functional",
      "para+objects",
      "para+imperative",
      "para+dec",
      "para+generic",
      "para+concurrent",
    ])
    .addPlatforms(["platf+win"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+inferred"]);

  /**/
}
