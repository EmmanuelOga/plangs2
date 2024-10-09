import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+chuck", {
      name: "ChucK",
      description:
        "ChucK is a concurrent, strongly timed audio programming language for real-time synthesis, composition, and performance, which runs on Linux, Mac OS X, Microsoft Windows, and iOS. It is designed to favor readability and flexibility for the programmer over other considerations such as raw performance. It natively supports deterministic concurrency and multiple, simultaneous, dynamic control rates. Another key feature is the ability to live code; adding, removing, and modifying code on the fly, while the program is running, without stopping or restarting. It has a highly precise timing/concurrency model, allowing for arbitrarily fine granularity. It offers composers and researchers a powerful and flexible programming tool for building and experimenting with complex audio synthesis programs, and real-time interactive control.",
      keywords: ["chuck", "audio programming", "real-time synthesis", "concurrent programming"],
      websites: [
        { title: "ChucK", href: "http://chuck.cs.princeton.edu/", kind: "homepage" },
        { title: "ChucK", href: "https://en.wikipedia.org/wiki/ChucK", kind: "wikipedia" },
      ],
      extensions: [".ck"],
      firstAppeared: "2003-01-01",
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "1.5.2.4", name: "ChucK 1.5.2.4", date: "2024-01-01" }],
    })
    .addInfluencedBy(["pl+supercollider"])
    .addLicenses(["license+gnu-gpl"])
    .addParadigms(["paradigm+concurrent", "paradigm+interpreted", "paradigm+real-time", "paradigm+synchronous"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+app", "tag+audio-dev", "tag+interpreter"])
    .addTypeSystems(["tsys+strong"])
    .addWrittenIn(["pl+c++"]);
}
