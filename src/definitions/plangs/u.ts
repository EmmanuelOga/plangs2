import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define("pl+Umple", "Umple", {
    name: "Umple",
    websites: [
      { kind: "wikipedia", title: "Umple", href: "https://en.wikipedia.org/wiki/Umple" },
      { kind: "homepage", title: "www.umple.org", href: "http://www.umple.org/" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Umple_Logo.png/200px-Umple_Logo.png",
      },
    ],
    releases: [
      { version: "unknown", date: "2008-01-01", kind: "first" },
      { version: "unknown", date: "2024-06-06", kind: "stable" },
    ],
    extensions: [".ump"],
    licenses: ["lic+mit"],
    paradigms: ["para+objects"],
    typeSystems: ["tsys+static"],
    platforms: ["platf+jvm"],
    influences: ["pl+Java", "pl+C-Plus-Plus", "pl+UML", "pl+Ruby", "pl+PHP"],
  });
}
