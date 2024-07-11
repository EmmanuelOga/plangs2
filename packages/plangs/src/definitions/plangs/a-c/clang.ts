import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+clang")
    .merge({
      name: "Clang",
      websites: [{ kind: "wikipedia", title: "Clang", href: "https://en.wikipedia.org/wiki/Clang" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Clang_13.0.1_version_information_screenshot.png/220px-Clang_13.0.1_version_information_screenshot.png",
        },
      ],
      releases: [{ name: "Clang", version: "18.1.6", date: "2024-01-01", kind: "stable" }],
    })
    .addLicense("lic+apache", {
      refs: [
        {
          href: "https://web.archive.org/web/20201111220059/https://releases.llvm.org/9.0.0/LICENSE.TXT",
          title: "LICENSE.TXT",
        },
      ],
    })
    .addPlatforms(["platf+aarch64", "platf+arm", "platf+ia-32", "platf+x86-64"]);

  /**/

  g.buildPlang("pl+llvm").merge({
    name: "LLVM",
    websites: [{ kind: "wikipedia", title: "LLVM", href: "https://en.wikipedia.org/wiki/LLVM" }],
  });

  /**/
}
