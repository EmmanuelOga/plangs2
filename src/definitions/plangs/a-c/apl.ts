import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+apl")
    .merge({
      name: "APL",
      websites: [
        { kind: "wikipedia", title: "APL", href: "https://en.wikipedia.org/wiki/APL_(programming_language)" },
        { kind: "wikipedia", title: "APL", href: "https://en.wikipedia.org/wiki/APL_programming_language" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/APL_%28programming_language%29_logo.svg",
        },
      ],
      releases: [{ name: "APL", version: "unknown", date: "1375-01-01", kind: "stable" }],
    })
    .addPerson("person+larry-breed", { role: "developer" })
    .addPerson("person+dick-lathwell", { role: "developer" })
    .addPerson("person+roger-moore", { role: "developer" })
    .addLicenses(["lic+proprietary", "lic+open-source"])
    .addParadigms(["para+array", "para+functional", "para+structured", "para+modular"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
