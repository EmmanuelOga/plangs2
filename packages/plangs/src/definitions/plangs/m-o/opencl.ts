import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+opencl")
    .merge({
      name: "OpenCL APIOpenCL C/C++ and C++ for OpenCL",
      websites: [
        {
          kind: "wikipedia",
          title: "OpenCL APIOpenCL C/C++ and C++ for OpenCL",
          href: "https://en.wikipedia.org/wiki/OpenCL",
        },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenCL_logo.svg" }],
      releases: [
        { name: "OpenCL APIOpenCL C/C++ and C++ for OpenCL", version: "1.0", date: "2021-01-01", kind: "stable" },
      ],
    })
    .addInfluences(["pl+c99", "pl+cuda", "pl+cpp14", "pl+cpp17"])
    .addParadigms(["para+imperative", "para+structured", "para+objects", "para+generic"])
    .addPlatforms(["platf+ia-32", "platf+x86-64"])
    .addPlatform("platf+arm", {
      refs: [
        {
          href: "https://www.khronos.org/conformance/adopters/conformant-products/opencl",
          title: "Conformant Products",
        },
      ],
    })
    .addTypeSystems(["tsys+static", "tsys+weak", "tsys+manifest", "tsys+nominative"]);

  /**/
}
