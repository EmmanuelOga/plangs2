import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+ezhil")
    .merge({
      name: "Ezhil",
      websites: [
        { kind: "wikipedia", title: "Ezhil", href: "https://en.wikipedia.org/wiki/Ezhil_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/8/88/Ezhil_-_A_Tamil_Programming_Language_Logo.png",
        },
      ],
      releases: [
        { name: "Ezhil", version: "0.99", date: "2017-01-01", kind: "stable" },
        { name: "Ezhil", version: "unknown", date: "2021-01-01", kind: "preview" },
      ],
    })
    .addInfluences(["pl+logo", "pl+basic", "pl+python"])
    .addPerson("person+google-scholar", { role: "designer" })
    .addLicenses(["lic+gpl"])
    .addParadigms(["para+interpreted", "para+imperative", "para+structured"])
    .addPlatforms(["platf+linux", "platf+win", "platf+mac", "platf+python", "platf+pip"])
    .addTypeSystems(["tsys+strong", "tsys+dynamic"]);

  /**/
}
