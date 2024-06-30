import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+moonscript",
    "Lua",
    {
      name: "Lua",
      websites: [{ kind: "wikipedia", title: "MoonScript", href: "https://en.wikipedia.org/wiki/MoonScript" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg" }],
      releases: [{ version: "5.4.6", date: "2023-01-01", kind: "stable" }],
      extensions: [".lua"],
    },
    {
      implementations: ["pl+ansi-c", "pl+luajit"],
      influences: ["pl+coffeescript", "pl+cpp", "pl+clu", "pl+modula", "pl+scheme", "pl+snobol"],
      licenses: ["lic+mit"],
      paradigms: [
        "para+multi",
        "para+scripting",
        "para+imperative",
        "para+prototypes",
        "para+objects",
        "para+functional",
        "para+meta",
        "para+reflective",
      ],
      people: ["person+roberto-ierusalimschy"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+weak", "tsys+duck"],
    },
  );
}
