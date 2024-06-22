import type { PlangsGraph } from "NaNentities/plangs_graph";

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
      references: {
        first_appeared: [
          { href: "https://www.researchgate.net/publication/221338134", title: "Scratch: A Sneak Preview" },
          { href: "https://en.scratch-wiki.info/wiki/Scratch_Timeline#May", title: "Scratch Timeline – Scratch Wiki" },
        ],
        implementation_language: [
          {
            href: "https://bocoup.com/blog/porting-scratch-from-flash-to-javascript-performance-interoperability-and-extensions",
            title: "Porting Scratch from Flash to JavaScript: Performance, Interoperability and Extensions",
          },
        ],
        influenced: [
          { href: "https://catrobat.org/", title: "Catrobat Home" },
          { href: "https://scratchjr.org/", title: "ScratchJr – Home" },
          { href: "https://snap.berkeley.edu/", title: "Snap! Build Your Own Blocks" },
        ],
      },
      releases: [
        { version: "0.1", date: "2003-10-11", kind: "first" },
        { version: "3.0", date: "2019-01-02", kind: "stable" },
      ],
      extensions: [".sb", ".sb2", ".sb3"],
    },
    {
      implementations: ["pl+actionscript", "pl+html5", "pl+javascript", "pl+squeak"],
      influenced: [
        "pl+agentcubes",
        "pl+agentsheets",
        "pl+etoys",
        "pl+logo",
        "pl+smalltalk",
        "pl+snap-",
        "pl+squeak",
        "pl+turtlestitch",
        "pl+ucblogo",
      ],
      influences: [
        "pl+agentcubes",
        "pl+agentsheets",
        "pl+catrobat",
        "pl+etoys",
        "pl+hypercard",
        "pl+logo",
        "pl+mblock",
        "pl+scratchjr",
        "pl+smalltalk",
        "pl+snap-",
        "pl+starlogo",
        "pl+turtlestitch",
      ],
      licenses: ["lic+bsd-3-clause", "lic+gpl-2"],
      paradigms: ["para+event-driven", "para+visual"],
      platforms: [
        "platf+android",
        "platf+dos",
        "platf+ios",
        "platf+linux",
        "platf+macos",
        "platf+web",
        "platf+windows",
      ],
    },
  );

  /**/
}
