import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+labview", {
      name: "LabVIEW",
      description:
        "Laboratory Virtual Instrument Engineering Workbench (LabVIEW) is a graphical system design and development platform produced and distributed by National Instruments, based on a programming environment that uses a visual programming language. It is widely used for data acquisition, instrument control, and industrial automation. It provides tools for designing and deploying complex test and measurement systems.",
      websites: [
        { href: "https://www.ni.com/labview", title: "www.ni.com/labview", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/LabVIEW", title: "LabVIEW", kind: "wikipedia" },
      ],
      releases: [{ version: "5.1", date: "2023-01-01" }],
      images: [{ kind: "logo", title: "LabVIEW", url: "/images/plangs/l/labview/logo.jpg" }],
    })
    .addPlatforms(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .addTags([
      "tag+analysis",
      "tag+app",
      "tag+automation",
      "tag+compiler",
      "tag+dataflow",
      "tag+dataq",
      "tag+dsp",
      "tag+embedded",
      "tag+flow",
      "tag+framework",
      "tag+industrial",
      "tag+instrument_control",
      "tag+interpreter",
      "tag+low-code",
      "tag+modeling",
      "tag+scripting",
      "tag+stats",
      "tag+testing",
      "tag+viz",
      "tag+wavelet",
    ])
    .addWrittenIn(["pl+c", "pl+c++", "pl+c-sharp"]);
}
