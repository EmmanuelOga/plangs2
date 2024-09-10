import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+tcsh", {
      name: "TENEX C Shell",
      description:
        "tcsh (/ˌtiːˈsiːʃɛl/ “tee-see-shell”, /ˈtiːʃɛl/ “tee-shell”, or as “tee see ess aitch”, tcsh) is a Unix shell based on and backward compatible with the C shell (csh).",
      websites: [
        { href: "http://www.tcsh.org/", title: "www.tcsh.org", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Tcsh", title: "TENEX C Shell", kind: "wikipedia" },
      ],
      releases: [{ version: "6.24.13", date: "2024-01-01" }],
      images: [{ kind: "other", title: "TENEX C Shell", url: "/images/plangs/t/tcsh/other.png" }],
    })
    .addLicenses(["license+bsd"])
    .addPlatforms(["plat+cross"])
    .addWrittenIn(["pl+c"]);
}
