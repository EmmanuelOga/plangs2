import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+ap")
    .merge({
      name: "A+",
      websites: [{ kind: "wikipedia", title: "A+", href: "https://en.wikipedia.org/wiki/A%2B_(programming_language)" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Aplus_logo.jpg/121px-Aplus_logo.jpg",
        },
      ],
      releases: [{ name: "A+", version: "4.22", date: "2008-01-01", kind: "stable" }],
      extensions: [".+", "..", ".a", ".m"],
    })
    .addInfluences(["pl+apl"])
    .addPerson("person+arthur-whitney", { role: "designer" })
    .addPerson("person+morgan-stanley", { role: "developer" })
    .addLicenses(["lic+gpl"])
    .addParadigms(["para+array"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/
}
