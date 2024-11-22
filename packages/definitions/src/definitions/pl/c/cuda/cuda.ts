import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+cuda", {
      name: "CUDA",
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
      releases: [
        { version: "12.6", name: "Stable release", date: "2024-08" },
        { version: "1.0", name: "Initial release", date: "2007-06-23" },
      ],
      extWikipediaPath: "CUDA",
      extRedditPath: "CUDA",
      extHomeURL: "https://developer.nvidia.com/cuda-zone",
      created: "2006",
    })
    .relParadigms.add(["paradigm+compiled", "paradigm+parallel"])
    .relPlatforms.add(["plat+linux", "plat+windows"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
