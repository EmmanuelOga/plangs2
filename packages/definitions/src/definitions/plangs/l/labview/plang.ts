import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+labview", {
      images: [{ kind: "logo", title: "LabVIEW", url: "/images/plangs/l/labview/logo.jpg" }],
      name: "LabVIEW",
      description:
        "Laboratory Virtual Instrument Engineering Workbench (LabVIEW) is a graphical system design and development platform produced and distributed by National Instruments, based on a programming environment that uses a visual programming language. It is widely used for data acquisition, instrument control, and industrial automation. It provides tools for designing and deploying complex test and measurement systems.",
      websites: [
        { href: "https://www.ni.com/labview", title: "www.ni.com/labview", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/LabVIEW", title: "LabVIEW", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [{ version: "5.1", date: "2023-01-01" }],
    })
    .addPlatforms(["platf+apple", "platf+cross", "platf+linux", "platf+windows"])
    .addTags(["tag+automation", "tag+dataq", "tag+dsp", "tag+embedded", "tag+industrial", "tag+instrument_control", "tag+testing", "tag+wavelet"])
    .addWrittenIn(["pl+c", "pl+c++", "pl+c-sharp"]);
}
