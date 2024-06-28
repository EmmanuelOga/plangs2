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
      influences: [
        "pl+agentcubes",
        "pl+agentsheets",
        "pl+etoys",
        "pl+hypercard",
        "pl+logo",
        "pl+objectlogo",
        "pl+smalltalk",
        "pl+squeak",
        "pl+starlogo",
        "pl+ucblogo",
      ],
      licenses: ["lic+bsd-s", "lic+gpl"],
      paradigms: ["para+event", "para+visual"],
      platforms: ["platf+android", "platf+dos", "platf+ios", "platf+linux", "platf+mac", "platf+web", "platf+win"],
    },
  );

  /**/

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
    { influences: ["pl+scratch"], platforms: ["platf+android", "platf+chromeos", "platf+ios"] },
  );

  /**/
}