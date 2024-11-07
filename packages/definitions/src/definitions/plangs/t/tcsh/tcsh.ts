import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+tcsh", {
      name: "TENEX C Shell",
      description:
        "tcsh (/ˌtiːˈsiːʃɛl/ “tee-see-shell”, /ˈtiːʃɛl/ “tee-shell”, or as “tee see ess aitch”, tcsh) is a Unix shell based on and backward compatible with the C shell (csh). It provides additional features like command line editing, programmable word completion, and improved history substitution capabilities.",
      keywords: ["tcsh"],
      websites: [
        { title: "www.tcsh.org", href: "http://www.tcsh.org/", kind: "homepage" },
        { title: "TENEX C Shell", href: "https://en.wikipedia.org/wiki/Tcsh", kind: "wikipedia" },
      ],
      year: 1983,
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "6.24.13", name: "Tcsh 6.24.13", date: "2024-01-01" }],
    })
    .addDialectOf(["pl+csh"])
    .addInfluencedBy(["pl+csh"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+interpreted", "paradigm+scripting"])
    .addPlatforms(["plat+bsd", "plat+linux", "plat+windows"])
    .addTags(["tag+cli", "tag+scripting", "tag+shell"])
    .addTypeSystems(["tsys+untyped"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
