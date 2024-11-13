import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+cuda", {
      name: "CUDA",
      languishRanking: 56,
      websites: [
        { title: "CUDA - Wikipedia", href: "https://en.wikipedia.org/wiki/CUDA", kind: "wikipedia" },
        { title: "CUDA Zone - Nvidia Developer", href: "https://developer.nvidia.com/cuda-zone", kind: "homepage" },
      ],
      stackovTags: ["cuda"],
      githubName: "Cuda",
      githubLangId: "77",
      githubColor: "#3A4E3A",
      githubPopular: false,
      githubType: "programming",
      description:
        "CUDA (Compute Unified Device Architecture) is a parallel computing platform and application programming interface (API) model developed by Nvidia. It facilitates dramatic increases in computing performance by harnessing the power of the graphics processing unit (GPU).",
      keywords: ["CUDA", "GPGPU", "GPU", "Nvidia", "graphics processing unit", "parallel computing", "parallel programming"],
      extensions: [".cu"],
      year: 2006,
      isMainstream: true,
      releases: [
        { version: "12.6", name: "Stable release", date: "2024-08" },
        { version: "1.0", name: "Initial release", date: "2007-06-23" },
      ],
    })
    .addParadigms(["paradigm+compiled", "paradigm+parallel"])
    .addPlatforms(["plat+linux", "plat+windows"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
