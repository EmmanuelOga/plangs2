import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+gnu-compiler-collection",
    "GCC",
    {
      name: "GCC",
      websites: [
        {
          kind: "wikipedia",
          title: "GNU Compiler Collection",
          href: "https://en.wikipedia.org/wiki/GNU_Compiler_Collection",
        },
        { kind: "homepage", title: "gcc.gnu.org", href: "https://gcc.gnu.org" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/a/af/GNU_Compiler_Collection_logo.svg" },
      ],
      references: {
        initial_release: [
          {
            href: "https://web.archive.org/web/20230604113400/https://www.gnu.org/software/gcc/releases.html",
            title: "GCC Releases",
          },
        ],
        stable_release: [
          { href: "https://gcc.gnu.org/pipermail/gcc/2024-May/243921.html", title: "GCC 14.1 Released" },
        ],
        written_in: [
          {
            href: "https://web.archive.org/web/20230528012107/https://gcc.gnu.org/codingconventions.html",
            title: "GCC Coding Conventions - GNU Project",
          },
        ],
        size: [
          {
            href: "https://ghostarchive.org/varchive/youtube/20211107/QXwxBM4sbYM",
            title: "Cutting Edge Toolchain (Latest Features in GCC/GLIBC)",
          },
        ],
        license: [
          {
            href: "https://web.archive.org/web/20230331220440/https://www.gnu.org/licenses/gcc-exception-3.1",
            title: "GCC Runtime Library Exception",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "1987-03-22", kind: "first" },
        { version: "14.1", date: "2024-01-01", kind: "stable" },
      ],
    },
    { licenses: ["lic+gpl"], platforms: ["platf+gnu"] },
  );

  /**/
}
