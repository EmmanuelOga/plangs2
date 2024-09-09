import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs
    .set("pl+euphoria", {
      name: "Euphoria",
      description:
        "Euphoria is a programming language created by Robert Craig of Rapid Deployment Software in Toronto, Ontario, Canada. Initially developed (though not publicly released) on the Atari ST, the first commercial release was for MS-DOS as proprietary software. In 2006, with the release of version 3, Euphoria became open-source software. The openEuphoria Group continues to administer and develop the project.  In December 2010, the openEuphoria Group released version 4 of openEuphoria along with a new identity and mascot for the project. OpenEuphoria is currently available for Windows, Linux, macOS and three flavors of *BSD.",
      firstAppeared: "1993-01-01",
      extensions: [".e", ".edb", ".ex", ".exw"],
      websites: [
        { href: "http://openeuphoria.org/", title: "openeuphoria.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Euphoria_(programming_language)", title: "Euphoria", kind: "wikipedia" },
      ],
      releases: [{ version: "4.1.0", date: "2021-01-01" }],
    })
    .addInfluencedBy(["pl+basic"])
    .addLicenses(["lic+bsd"])
    .addParadigms(["para+imperative", "para+procedural"])
    .addPlatforms(["platf+apple", "platf+bsd", "platf+cross", "platf+linux", "platf+windows"]);
}
