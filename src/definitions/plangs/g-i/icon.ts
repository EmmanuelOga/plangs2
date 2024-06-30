import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+icon")
    .merge({
      name: "Icon",
      websites: [
        { kind: "wikipedia", title: "Icon", href: "https://en.wikipedia.org/wiki/Icon_(programming_language)" },
        { kind: "wikipedia", title: "Icon", href: "https://en.wikipedia.org/wiki/Icon_programming_language" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Panorama_Icon_logo_Mondadori.png/121px-Panorama_Icon_logo_Mondadori.png",
        },
      ],
      releases: [{ version: "9.5.24", date: "2024-01-01", kind: "stable" }],
    })
    .addDialects(["pl+unicon"])
    .addInfluences(["pl+snobol", "pl+algol"])
    .addPerson("person+ralph-griswold", { role: "designer" })
    .addParadigms(["para+multi", "para+structured"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
