import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+netrexx",
    "NetRexx",
    {
      name: "NetRexx",
      websites: [
        { kind: "wikipedia", title: "NetRexx", href: "https://en.wikipedia.org/wiki/NetRexx" },
        { kind: "homepage", title: "www.netrexx.org", href: "https://www.netrexx.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/c4/NETREXX.gif" }],
      releases: [
        { version: "unknown", date: "1996-01-01", kind: "first" },
        { version: "4.06", date: "2024-03-02", kind: "stable" },
      ],
      references: {
        license: [
          { href: "https://kenai.com/projects/netrexx/pages/License", title: "ICU License - ICU 1.8.1 and later" },
        ],
        major_implementations: [{ href: "http://www.netrexx.org", title: "NetRexx" }],
      },
      extensions: [".nrx"],
    },
    {
      influences: ["pl+java", "pl+object-rexx", "pl+pl-slash", "pl+rexx"],
      licenses: ["lic+icu"],
      paradigms: ["para+imperative", "para+multi", "para+objects", "para+structured"],
      people: [["person+mike-cowlishaw", "designer"]],
      platforms: [
        "platf+android",
        "platf+cross-platform",
        "platf+linux",
        "platf+mac",
        "platf+win",
        "platf+z-slashos",
        "platf+z-slashvm",
      ],
      typeSystems: ["tsys+dynamic", "tsys+safe", "tsys+static", "tsys+strong"],
    },
  );
}
