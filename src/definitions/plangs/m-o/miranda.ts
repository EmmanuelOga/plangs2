import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+miranda")
    .merge({
      name: "Miranda",
      websites: [
        { kind: "wikipedia", title: "Miranda", href: "https://en.wikipedia.org/wiki/Miranda_(programming_language)" },
        { kind: "wikipedia", title: "Miranda", href: "https://en.wikipedia.org/wiki/Miranda_programming_language" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/3/34/Miranda_logo_%28programming_language%29.jpg",
        },
      ],
      releases: [{ name: "Miranda", version: "2.066", date: "2020-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+iswim", "pl+kent-recursive-calculator", "pl+ml", "pl+sasl", "pl+hope"])
    .addPerson("person+david-turner", { role: "designer" })
    .addParadigms(["para+lazy", "para+functional", "para+dec"])
    .addTypeSystems(["tsys+strong", "tsys+static"]);

  /**/
}
