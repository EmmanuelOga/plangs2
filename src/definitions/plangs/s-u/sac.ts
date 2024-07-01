import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+sac")
    .merge({
      name: "SAC",
      websites: [{ kind: "wikipedia", title: "SAC", href: "https://en.wikipedia.org/wiki/SAC_programming_language" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/SAC_language_logo.png/121px-SAC_language_logo.png",
        },
      ],
    })
    .addImplementations(["pl+c"])
    .addInfluences(["pl+apl", "pl+sisal", "pl+c"])
    .addLicenses(["lic+free"])
    .addParadigms(["para+array", "para+functional"])
    .addPlatforms(["platf+posix", "platf+unix"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/
}
