import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+scratch")
    .merge({
      name: "Scratch",
      websites: [
        { kind: "wikipedia", title: "Scratch", href: "https://en.wikipedia.org/wiki/Scratch_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Scratchlogo.svg" }],
      releases: [
        { name: "Scratch", version: "0.1", date: "2003-01-01", kind: "first" },
        { name: "Scratch", version: "3.0", date: "2019-01-01", kind: "stable" },
      ],
    })
    .addImplementations(["pl+squeak", "pl+actionscript", "pl+html5", "pl+javascript"])
    .addInfluences([
      "pl+agentcubes",
      "pl+agentsheets",
      "pl+etoys",
      "pl+logo",
      "pl+objectlogo",
      "pl+smalltalk",
      "pl+hypercard",
      "pl+starlogo",
      "pl+squeak",
      "pl+ucblogo",
    ])
    .addLicenses(["lic+bsd-s", "lic+gpl"])
    .addParadigms(["para+event", "para+visual"])
    .addPlatforms(["platf+win", "platf+mac", "platf+linux", "platf+web", "platf+ios", "platf+dos", "platf+android"]);

  /**/

  g.buildPlang("pl+scratchjr")
    .merge({
      name: "ScratchJr",
      websites: [{ kind: "wikipedia", title: "ScratchJr", href: "https://en.wikipedia.org/wiki/ScratchJr" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/ScratchJr_Logo.png/121px-ScratchJr_Logo.png",
        },
      ],
    })
    .addInfluence("pl+scratch", { refs: [{ href: "https://scratchjr.org/", title: "ScratchJr – Home" }] })
    .addPlatforms(["platf+android", "platf+ios", "platf+chromeos"]);

  /**/
}
