import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+autoit")
    .merge({
      name: "AutoIt",
      websites: [{ kind: "wikipedia", title: "AutoIt", href: "https://en.wikipedia.org/wiki/AutoIt" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Autoitlogo.png/121px-Autoitlogo.png",
        },
      ],
      releases: [{ name: "AutoIt", version: "3.3.16.1", date: "2022-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+basic"])
    .addLicenses(["lic+freeware"])
    .addParadigms(["para+imperative", "para+functional", "para+reflective"])
    .addPlatforms(["platf+ia-32", "platf+x64", "platf+win"]);

  /**/
}
