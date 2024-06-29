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
        { version: "unknown", kind: "stable" },
        { version: "6.4.0", date: "2023-01-01", kind: "stable" },
      ],
      extensions: [".nlogo", ".nls"],
    },
    {
      implementations: ["pl+scala", "pl+java"],
      influences: ["pl+logo", "pl+starlogo", "pl+objectlogo", "pl+ucblogo"],
      licenses: ["lic+gpl"],
      paradigms: ["para+multi", "para+educational", "para+imperative", "para+computer", "para+simulation"],
      platforms: ["platf+ia-32", "platf+x86-64", "platf+cross-platform", "platf+jvm"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );
}
