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
      extensions: [".nrx"],
    },
    {
      influences: ["pl+object-rexx", "pl+rexx", "pl+pl-slash", "pl+java"],
      licenses: ["lic+icu"],
      paradigms: ["para+multi", "para+objects", "para+imperative", "para+structured"],
      people: ["person+mike-cowlishaw"],
      platforms: [
        "platf+cross-platform",
        "platf+linux",
        "platf+win",
        "platf+mac",
        "platf+z-slashos",
        "platf+z-slashvm",
        "platf+android",
      ],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+safe", "tsys+dynamic"],
    },
  );
}
