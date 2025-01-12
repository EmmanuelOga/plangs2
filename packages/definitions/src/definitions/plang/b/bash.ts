import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+bash", {
      name: "Bash",
      description:
        "Developed by Brian Fox as a free alternative to the Bourne Shell. Widely adopted as the default shell for many Linux distributions. It incorporates features from the Korn shell (ksh) and the C shell (csh). It is POSIX-compliant, making it compatible with many Bourne shell scripts.",
      shortDesc:
        "Shell and command language supported by the Free Software Foundation.",
      created: "1989",
      extensions: [".bash", ".sh"],
      extHomeURL: "https://www.gnu.org/software/bash/",
      extRedditPath: "bash",
      extWikipediaPath: "Bash_(Unix_shell)",
      filenames: [".bash_profile", ".bashrc", "bashrc"],
      githubColor: "#89e051",
      githubLangId: "346",
      githubName: "Shell",
      githubPopular: true,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["bash", "bourne-again"],
      links: [
        { url: "https://www.gnu.org/software/bash/manual/", title: "Manual" },
      ],
      releases: [
        { version: "5.2.37", name: "Bash 5.2.37", date: "2024-09-23" },
      ],
      stackovTags: ["bash"],
    })
    .relLicenses.add("lic+gnu-gpl")
    .relParadigms.add(
      "para+general-purpose",
      "para+imperative",
      "para+pipeline",
      "para+procedural",
      "para+scripting",
    )
    .relPlatforms.add(
      "plat+apple",
      "plat+bsd",
      "plat+cross",
      "plat+embedded",
      "plat+linux",
      "plat+windows",
    )
    .relTags.add(
      "tag+app",
      "tag+automation",
      "tag+cli",
      "tag+editor",
      "tag+interpreters",
      "tag+scripting",
      "tag+shell",
    )
    .relTypeSystems.add("tsys+dynamic", "tsys+untyped")
    .relWrittenWith.add("pl+c");
}
