import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+scratch",
    {
      name: "Scratch",
      websites: [
        { kind: "wikipedia", title: "Scratch", href: "https://en.wikipedia.org/wiki/Scratch_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Scratchlogo.svg" }],
      releases: [
        { version: "0.1", date: "2003-01-01", kind: "first" },
        { version: "3.0", date: "2019-01-01", kind: "stable" },
      ],
    },
    {
      implementations: ["pl+squeak", "pl+actionscript", "pl+html5", "pl+javascript"],
      influences: [
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
      ],
      licenses: ["lic+bsd-s", "lic+gpl"],
      paradigms: ["para+event", "para+visual"],
      platforms: ["platf+win", "platf+mac", "platf+linux", "platf+web", "platf+ios", "platf+dos", "platf+android"],
    },
  );

  lb.define(
    "pl+scratchjr",
    {
      name: "ScratchJr",
      websites: [{ kind: "wikipedia", title: "ScratchJr", href: "https://en.wikipedia.org/wiki/ScratchJr" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/ScratchJr_Logo.png/121px-ScratchJr_Logo.png",
        },
      ],
    },
    { influences: ["pl+scratch"], platforms: ["platf+android", "platf+ios", "platf+chromeos"] },
  );
}
