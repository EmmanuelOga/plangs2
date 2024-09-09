import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+tcsh", {
      images: [{ kind: "other", title: "TENEX C Shell", url: "/images/plangs/t/tcsh/other.png" }],
      name: "TENEX C Shell",
      description:
        "tcsh (/ˌtiːˈsiːʃɛl/ “tee-see-shell”, /ˈtiːʃɛl/ “tee-shell”, or as “tee see ess aitch”, tcsh) is a Unix shell based on and backward compatible with the C shell (csh).",
      websites: [
        { href: "http://www.tcsh.org/", title: "www.tcsh.org", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Tcsh", title: "TENEX C Shell", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [{ version: "6.24.13", date: "2024-01-01" }],
    })
    .addLicenses(["lic+bsd"])
    .addPlatforms(["platf+cross"])
    .addWrittenIn(["pl+c"]);
}
