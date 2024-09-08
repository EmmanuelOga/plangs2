import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+puredata", {
      images: [{ title: "Pure Data", kind: "logo", url: "/images/plangs/p/puredata/main.png" }],
      name: "Pure Data",
      description:
        "Pure Data (Pd) is a visual programming language developed by Miller Puckette in the 1990s for creating interactive computer music and multimedia works. While Puckette is the main author of the program, Pd is an open-source project with a large developer base working on new extensions. It is released under BSD-3-Clause. It runs on Linux, MacOS, iOS, Android and Windows.  Ports exist for FreeBSD and IRIX.",
      websites: [
        { href: "http://puredata.info/", title: "puredata.info", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/PureData", title: "Pure Data", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [{ version: "0.53", date: "2023-01-01" }],
    })
    .addLicenses(["lic+bsd"])
    .addTags(["tag+interpreter"]);
}
