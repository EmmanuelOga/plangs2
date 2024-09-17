import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+puredata", {
      name: "Pure Data",
      description:
        "Pure Data (Pd) is a visual programming language developed by Miller Puckette in the 1990s for creating interactive computer music and multimedia works. While Puckette is the main author of the program, Pd is an open-source project with a large developer base working on new extensions. It is released under BSD-3-Clause. It runs on Linux, MacOS, iOS, Android and Windows.  Ports exist for FreeBSD and IRIX.",
      websites: [
        { href: "http://puredata.info/", title: "puredata.info", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/PureData", title: "Pure Data", kind: "wikipedia" },
      ],
      releases: [{ version: "0.53", date: "2023-01-01" }],
      images: [{ kind: "logo", title: "Pure Data", url: "/images/plangs/p/puredata/logo.png" }],
    })
    .addLicenses(["license+bsd"])
    .addTags([
      "tag+audio-dev",
      "tag+dataflow",
      "tag+dsp",
      "tag+flow",
      "tag+games",
      "tag+industrial",
      "tag+interpreter",
      "tag+midi",
      "tag+multimedia",
      "tag+ray-tracer",
      "tag+ui",
      "tag+video",
      "tag+wavelet",
    ]);
}
