import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+euphoria", {
      name: "Euphoria",
      description:
        "Euphoria is a programming language created by Robert Craig of Rapid Deployment Software in Toronto, Ontario, Canada. Initially developed (though not publicly released) on the Atari ST, the first commercial release was for MS-DOS as proprietary software. In 2006, with the release of version 3, Euphoria became open-source software. The openEuphoria Group continues to administer and develop the project.  In December 2010, the openEuphoria Group released version 4 of openEuphoria along with a new identity and mascot for the project. OpenEuphoria is currently available for Windows, Linux, macOS and three flavors of *BSD.",
      keywords: ["euphoria"],
      websites: [
        { title: "openeuphoria.org", href: "http://openeuphoria.org/", kind: "homepage" },
        { title: "Euphoria", href: "https://en.wikipedia.org/wiki/Euphoria_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".e", ".edb", ".ex", ".exw"],
      firstAppeared: "1993-01-01",
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "4.1.0", name: "openEuphoria 4.1.0", date: "2021-01-01" }],
    })
    .addInfluencedBy(["pl+basic"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+imperative", "paradigm+procedural"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .addTags([
      "tag+app",
      "tag+compiler",
      "tag+dbms",
      "tag+interpreter",
      "tag+low-code",
      "tag+modeling",
      "tag+rad",
      "tag+ray-tracer",
      "tag+ui",
      "tag+wavelet",
    ]);
}
