import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+netlogo",
    "NetLogo",
    {
      name: "NetLogo",
      websites: [
        { kind: "wikipedia", title: "NetLogo", href: "https://en.wikipedia.org/wiki/NetLogo" },
        { kind: "homepage", title: "ccl.northwestern.edu/netlogo", href: "http://ccl.northwestern.edu/netlogo" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/NetLogo_%28logo%29.png/280px-NetLogo_%28logo%29.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1999-01-01", kind: "first" },
        { version: "6.4.0", date: "2023-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [{ href: "https://github.com/NetLogo/NetLogo/releases/tag/6.4.0", title: "Release 6.4.0" }],
      },
      extensions: [".nlogo", ".nls"],
    },
    {
      implementations: ["pl+java", "pl+scala"],
      influences: ["pl+logo", "pl+objectlogo", "pl+starlogo", "pl+ucblogo"],
      licenses: ["lic+gpl"],
      paradigms: ["para+computer", "para+imperative", "para+list", "para+multi", "para+simulation"],
      platforms: ["platf+cross-platform", "platf+ia-32", "platf+jvm", "platf+x86-64"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );
}
