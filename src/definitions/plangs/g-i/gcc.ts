import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+gcc")
    .merge({
      name: "GCC",
      websites: [{ kind: "wikipedia", title: "GCC", href: "https://en.wikipedia.org/wiki/GNU_Compiler_Collection" }],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/a/af/GNU_Compiler_Collection_logo.svg" },
      ],
      releases: [{ name: "GNU Compiler Collection", version: "14.1", date: "2024-01-01", kind: "stable" }],
    })
    .addLicense("lic+gpl", {
      refs: [
        {
          href: "https://web.archive.org/web/20230331220440/https://www.gnu.org/licenses/gcc-exception-3.1",
          title: "GCC Runtime Library Exception",
        },
      ],
    })
    .addPlatforms(["platf+gnu"]);

  /**/
}
