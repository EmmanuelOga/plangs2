import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+snap-")
    .merge({
      name: "Snap!",
      websites: [
        { kind: "wikipedia", title: "Snap!", href: "https://en.wikipedia.org/wiki/Snap!_(programming_language)" },
      ],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/6/63/Snap%21.svg" }],
      releases: [{ name: "Snap!", version: "9.2.17", date: "2024-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+javascript"])
    .addInfluences(["pl+scheme", "pl+logo", "pl+smalltalk", "pl+apl"])
    .addInfluence("pl+scratch", {
      refs: [{ href: "https://snap.berkeley.edu/", title: "Snap! Build Your Own Blocks" }],
    })
    .addPerson("person+brian-harvey", { role: "designer" })
    .addLicenses(["lic+affero-gpl"])
    .addParadigms(["para+objects", "para+educational", "para+event"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
