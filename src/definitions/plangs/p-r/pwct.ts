import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+pwct")
    .merge({
      name: "PWCT",
      websites: [{ kind: "wikipedia", title: "PWCT", href: "https://en.wikipedia.org/wiki/PWCT" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/PWCT_1.9_-_Goal_Designer.png/300px-PWCT_1.9_-_Goal_Designer.png",
        },
      ],
      releases: [{ name: "PWCT", version: "1.9", date: "2024-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+visual-foxpro"])
    .addPerson("person+mahmoud-samir-fayed", { role: "designer" })
    .addLicenses(["lic+gpl"])
    .addParadigms(["para+multi", "para+visual", "para+imperative", "para+objects"])
    .addPlatforms(["platf+win"]);

  /**/
}
