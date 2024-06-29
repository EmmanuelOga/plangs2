import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+opencl",
    "OpenCL APIOpenCL C/C++ and C++ for OpenCL",
    {
      name: "OpenCL APIOpenCL C/C++ and C++ for OpenCL",
      websites: [
        {
          kind: "wikipedia",
          title: "OpenCL APIOpenCL C/C++ and C++ for OpenCL",
          href: "https://en.wikipedia.org/wiki/OpenCL",
        },
        { kind: "homepage", title: "www.khronos.org/opencl", href: "https://www.khronos.org/opencl" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenCL_logo.svg" }],
      releases: [
        { version: "unknown", date: "2009-08-28", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "1.0", date: "2021-12-20", kind: "stable" },
      ],
      extensions: [],
    },
    {
      influences: ["pl+c99", "pl+cuda", "pl+cpp14", "pl+cpp17"],
      paradigms: ["para+imperative", "para+structured", "para+objects", "para+generic"],
      platforms: ["platf+arm", "platf+ia-32", "platf+x86-64"],
      typeSystems: ["tsys+static", "tsys+weak", "tsys+manifest", "tsys+nominative"],
    },
  );
}
