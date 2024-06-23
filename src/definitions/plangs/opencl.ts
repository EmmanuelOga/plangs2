import type { PlangsGraph } from "../../entities/plangs_graph";

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
        { version: "1.0", date: "2021-12-20", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "https://www.khronos.org/registry/OpenCL/specs/opencl-2.2-cplusplus.pdf",
            title: "The OpenCL C++ 1.0 Specification",
          },
          {
            href: "https://web.archive.org/web/20200920173143/https://www.khronos.org/registry/OpenCL/specs/3.0-unified/pdf/OpenCL_C.pdf",
            title: "The OpenCL C Specification Version: 3.0 Document Revision: V3.0.7",
          },
          {
            href: "https://github.com/KhronosGroup/OpenCL-Docs/releases/tag/cxxforopencl-docrev2021.12",
            title: "The C++ for OpenCL 1.0 and 2021 Programming Language Documentation",
          },
        ],
        operating_system: [
          {
            href: "https://docs.google.com/a/arrayfire.com/spreadsheets/d/1Mpzfl2NmLUVSAjIph77-FOsJeuyD9Xjha89r5iHw1hI/edit?pli=1#gid=0",
            title: "Android Devices With OpenCL support",
          },
          { href: "https://wiki.freebsd.org/Graphics/OpenCL", title: "FreeBSD Graphics/OpenCL" },
        ],
        platform: [
          {
            href: "https://www.khronos.org/conformance/adopters/conformant-products/opencl",
            title: "Conformant Products",
          },
        ],
      },
      extensions: [],
    },
    {
      influences: ["pl+c-plus-plus14", "pl+c-plus-plus17", "pl+c99", "pl+cuda"],
      paradigms: ["para+generic", "para+imperative", "para+objects", "para+structured"],
      platforms: ["platf+arm", "platf+ia-32", "platf+x86-64"],
      typeSystems: ["tsys+manifest", "tsys+nominative", "tsys+static", "tsys+weak"],
    },
  );

  /**/
}
