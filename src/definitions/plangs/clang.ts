import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+clang",
    "Clang",
    {
      name: "Clang",
      websites: [
        { kind: "wikipedia", title: "Clang", href: "https://en.wikipedia.org/wiki/Clang" },
        { kind: "homepage", title: "clang.llvm.org", href: "https://clang.llvm.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Clang_13.0.1_version_information_screenshot.png/220px-Clang_13.0.1_version_information_screenshot.png",
        },
      ],
      references: {
        initial_release: [
          {
            href: "https://web.archive.org/web/20161117042311/http://llvm.org/releases/2.1/docs/ReleaseNotes.html",
            title: "LLVM 2.1 Release Notes",
          },
        ],
        stable_release: [
          { href: "https://github.com/llvm/llvm-project/releases/tag/llvmorg-18.1.6", title: "LLVM 18.1.6" },
        ],
        platform: [
          {
            href: "https://web.archive.org/web/20210912214255/https://github.com/llvm/llvm-project/releases",
            title: "Releases",
          },
        ],
        license: [
          {
            href: "https://web.archive.org/web/20201111220059/https://releases.llvm.org/9.0.0/LICENSE.TXT",
            title: "LICENSE.TXT",
          },
          {
            href: "https://web.archive.org/web/20121113204817/https://www.llvm.org/docs/DeveloperPolicy.html#copyright-license-and-patents",
            title: "LLVM Developer Policy",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "2007-09-26", kind: "first" },
        { version: "18.1.6", date: "2024-01-01", kind: "stable" },
      ],
    },
    { licenses: ["lic+apache"], platforms: ["platf+aarch64", "platf+arm", "platf+ia-32", "platf+x86-64"] },
  );

  /**/
}
