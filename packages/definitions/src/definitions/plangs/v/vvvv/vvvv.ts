import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+vvvv", {
      name: "vvvv",
      description:
        'vvvv (German pronunciation: [faʊfiːɐ̯] = "Vau Vier" or "v4") is a digital general purpose toolkit with a special focus on real-time video synthesis and programming large media environments with physical interfaces, real-time motion graphics, audio and video. vvvv uses a dataflow approach and a visual programming interface for rapid prototyping and developing.  Applications written in vvvv are commonly called patches. Patches consist of a network of nodes. Patches can be created, edited and tested while they are running. Patches are stored on the disk in standard XML format. vvvv is written in Borland Delphi, and plugins can be developed in the .NET Framework in C#.',
      firstAppeared: "1998-01-01",
      websites: [
        { href: "http://www.vvvv.org/", title: "www.vvvv.org", kind: "homepage" },
        { href: "http://www.visualprogramming.net/", title: "www.visualprogramming.net", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Vvvv", title: "vvvv", kind: "wikipedia" },
      ],
      images: [{ kind: "logo", title: "vvvv", url: "/images/plangs/v/vvvv/logo.png" }],
    })
    .addInfluencedBy(["pl+apl", "pl+max-msp"])
    .addParadigms(["paradigm+visual"])
    .addPlatforms(["plat+windows"])
    .addTags(["tag+3dg", "tag+app", "tag+audio-dev", "tag+dataflow", "tag+flow", "tag+framework", "tag+ray-tracer"])
    .addTypeSystems(["tsys+strong"]);
}
