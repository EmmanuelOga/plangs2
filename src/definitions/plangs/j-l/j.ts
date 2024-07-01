import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+j")
    .merge({
      name: "J",
      websites: [{ kind: "wikipedia", title: "J", href: "https://en.wikipedia.org/wiki/J_(programming_language)" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/J_%28programming_language%29_icon.png/121px-J_%28programming_language%29_icon.png",
        },
      ],
      releases: [{ name: "J", version: "9.5", date: "2023-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+fl", "pl+apl"])
    .addPerson("person+roger-hui", { role: "designer" })
    .addLicenses(["lic+gpl"])
    .addParadigms([
      "para+array",
      "para+functional",
      "para+objects",
      "para+class",
      "para+prototypes",
      "para+function",
      "para+tacit",
    ])
    .addPlatforms(["platf+cross-platform", "platf+win", "platf+linux", "platf+mac", "platf+android", "platf+ios"])
    .addPlatform("platf+rpi", { refs: [{ href: "https://www.jsoftware.com/#/README", title: "Jsoftware" }] })
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
