import type { PlangsGraph } from "../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildLicense("lic+apache").merge({
    name: "Apache",
    websites: [
      { kind: "wikipedia", title: "Apache", href: "https://en.wikipedia.org/wiki/Apache_License" },
      { kind: "wikipedia", title: "Apache License 2.0", href: "https://en.wikipedia.org/wiki/Apache_License_2.0" },
      {
        kind: "wikipedia",
        title: "Apache-2.0-with-LLVM-Exception",
        href: "https://en.wikipedia.org/wiki/Apache-2.0-with-LLVM-Exception",
      },
      { kind: "wikipedia", title: "ASL 2.0", href: "https://en.wikipedia.org/wiki/Apache_Software_License" },
      { kind: "wikipedia", title: "Apache", href: "https://en.wikipedia.org/wiki/Apache_Licence" },
      { kind: "wikipedia", title: "Apache 2.0", href: "https://en.wikipedia.org/wiki/Apache_2.0" },
    ],
  });

  /**/
}
