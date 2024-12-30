import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+cuda", {
      name: "CUDA",
      description:
        "Compute Unified Device Architecture is a parallel computing platform and application programming interface (API) model developed by Nvidia. It facilitates dramatic increases in computing performance by harnessing the power of the graphics processing unit (GPU).",
      shortDesc: "Parallel computing platform and API model by Nvidia for GPU acceleration.",
      created: "2006",
      extensions: [".cu"],
      extGithubPath: "NVIDIA/cuda-samples",
      extHomeURL: "https://developer.nvidia.com/cuda-zone",
      extRedditPath: "CUDA",
      extWikipediaPath: "CUDA",
      githubColor: "#3A4E3A",
      githubLangId: "77",
      githubName: "Cuda",
      githubPopular: false,
      githubStars: 6600,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["CUDA", "GPGPU", "GPU", "Nvidia", "graphics processing unit", "parallel computing", "parallel programming"],
      releases: [
        { version: "1.0", name: "Initial release", date: "2007-06-23" },
        { version: "12.6", name: "Stable release", date: "2024-08" },
      ],
      stackovTags: ["cuda"],
    })
    .relParadigms.add("para+compiled", "para+parallel")
    .relPlatforms.add("plat+linux", "plat+windows")
    .relWrittenWith.add("pl+c++");
}
