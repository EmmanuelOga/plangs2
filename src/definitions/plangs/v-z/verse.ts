import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+verse")
    .merge({
      name: "Verse",
      websites: [
        { kind: "wikipedia", title: "Verse", href: "https://en.wikipedia.org/wiki/Verse_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Verse_Programming_Language_Logo.jpeg/160px-Verse_Programming_Language_Logo.jpeg",
        },
      ],
      extensions: [".verse"],
    })
    .addImplementations(["pl+uefn", "pl+visual-studio-code"])
    .addInfluences(["pl+lambda-calculus"])
    .addPerson("person+simon-peyton-jones", { role: "designer" })
    .addPerson("person+tim-sweeney", { role: "designer" })
    .addPerson("person+lennart-augustsson", { role: "designer" })
    .addPerson("person+guy-steele", { role: "designer" })
    .addParadigms(["para+objects"])
    .addTypeSystems(["tsys+strong"]);

  /**/
}
