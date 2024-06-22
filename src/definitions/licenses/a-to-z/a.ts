import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  //-------------------------------------------------------------------------------

  lb.define("lic+academic-free", "Academic Free License", {
    websites: [
      {
        kind: "wikipedia",
        title: "Academic Free License",
        href: "https://en.wikipedia.org/wiki/Academic_Free_License",
      },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("lic+agpl", "AGPL", {
    websites: [
      { kind: "wikipedia", title: "AGPL", href: "https://en.wikipedia.org/wiki/Affero_General_Public_License" },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("lic+apache-2-with-llvm-exception", "Apache-2.0-with-LLVM-Exception", {
    websites: [
      {
        kind: "wikipedia",
        title: "Apache-2.0-with-LLVM-Exception",
        href: "https://en.wikipedia.org/wiki/Apache-2.0-with-LLVM-Exception",
      },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("lic+artistic", "Artistic License", {
    websites: [
      { kind: "wikipedia", title: "Artistic License", href: "https://en.wikipedia.org/wiki/Artistic_License" },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("lic+asl-2", "ASL 2.0", {
    websites: [{ kind: "wikipedia", title: "ASL 2.0", href: "https://en.wikipedia.org/wiki/Apache_Software_License" }],
  });
}
