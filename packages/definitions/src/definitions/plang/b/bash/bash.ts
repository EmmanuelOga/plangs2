import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+bash", {
      name: "Bash",
      description:
        "Short for Bourne-Again SHell. A shell and command language supported by the Free Software Foundation. It was first developed for the GNU Project by Brian Fox in 1989 as a free alternative to the Bourne Shell. Bash has become widely adopted as the default shell for many Linux distributions and is available on most modern operating systems. It incorporates features from the Korn shell (ksh) and the C shell (csh) and is POSIX-compliant, making it compatible with many Bourne shell scripts.",
      shortDesc: "Shell and command language supported by the Free Software Foundation.",
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
      links: [{ url: "https://www.gnu.org/software/bash/manual/", title: "Manual" }],
      releases: [{ version: "5.2.37", name: "Bash 5.2.37", date: "2024-09-23" }],
      stackovTags: ["bash"],
    })
    .relLicenses.add("lic+gnu-gpl")
    .relParadigms.add("para+imperative", "para+procedural", "para+scripting")
    .relPlatforms.add("plat+apple", "plat+bsd", "plat+cross", "plat+embedded", "plat+linux", "plat+windows")
    .relTags.add("tag+app", "tag+automation", "tag+cli", "tag+editor", "tag+interpreters", "tag+scripting", "tag+shell")
    .relTypeSystems.add("tsys+dynamic", "tsys+untyped")
    .relWrittenWith.add("pl+c");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
