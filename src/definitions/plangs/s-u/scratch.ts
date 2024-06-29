import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+scratch",
    "Scratch",
    {
      name: "Scratch",
      websites: [
        { kind: "wikipedia", title: "Scratch", href: "https://en.wikipedia.org/wiki/Scratch_(programming_language)" },
        { kind: "homepage", title: "scratch.mit.edu", href: "https://scratch.mit.edu/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Scratchlogo.svg" }],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "0.1", date: "2003-10-11", kind: "first" },
        { version: "3.0", date: "2019-01-02", kind: "stable" },
      ],
      extensions: [".sb", ".sb2", ".sb3"],
    },
    {
      implementations: ["pl+squeak", "pl+actionscript", "pl+html5", "pl+javascript"],
      influences: [
        "pl+agentsheets",
        "pl+squeak",
        "pl+objectlogo",
        "pl+logo",
        "pl+smalltalk",
        "pl+hypercard",
        "pl+starlogo",
        "pl+agentcubes",
        "pl+etoys",
        "pl+ucblogo",
      ],
      licenses: ["lic+bsd-s", "lic+gpl"],
      paradigms: ["para+event", "para+visual"],
      platforms: ["platf+win", "platf+mac", "platf+linux", "platf+web", "platf+ios", "platf+dos", "platf+android"],
    },
  );

  lb.define(
    "pl+scratchjr",
    "ScratchJr",
    {
      name: "ScratchJr",
      websites: [
        { kind: "wikipedia", title: "ScratchJr", href: "https://en.wikipedia.org/wiki/ScratchJr" },
        { kind: "homepage", title: "www.scratchjr.org", href: "http://www.scratchjr.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/ScratchJr_Logo.png/121px-ScratchJr_Logo.png",
        },
      ],
      releases: [{ version: "unknown", date: "2014-01-01", kind: "first" }],
    },
    { influences: ["pl+scratch"], platforms: ["platf+android", "platf+ios", "platf+chromeos"] },
  );
}
