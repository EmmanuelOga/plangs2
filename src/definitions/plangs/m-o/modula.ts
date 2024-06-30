import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+modula")
    .merge({
      name: "Modula-2",
      websites: [
        { kind: "wikipedia", title: "Modula-2", href: "https://en.wikipedia.org/wiki/Modula-2" },
        { kind: "wikipedia", title: "Modula", href: "https://en.wikipedia.org/wiki/Modula" },
        { kind: "wikipedia", title: "Modula-3", href: "https://en.wikipedia.org/wiki/Modula-3" },
        { kind: "wikipedia", title: "Modula-2+", href: "https://en.wikipedia.org/wiki/Modula-2%2B" },
        { kind: "wikipedia", title: "ORCA/Modula-2", href: "https://en.wikipedia.org/wiki/ORCA/Modula-2" },
      ],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Modula-3.svg" }],
      releases: [{ version: "5.8.6", date: "2010-01-01", kind: "stable" }],
    })
    .addDialects(["pl+alma-0", "pl+modula"])
    .addImplementation("pl+dec", {
      refs: [{ href: "https://modula3.elegosoft.com/cm3/", title: "Critical Mass Modula-3 (CM3)" }],
    })
    .addInfluences(["pl+algol", "pl+cedar", "pl+mesa", "pl+pascal", "pl+modula", "pl+euclid", "pl+oberon"])
    .addPerson("person+niklaus-wirth", { role: "designer" })
    .addPerson("person+luca-cardelli", { role: "designer" })
    .addPerson("person+greg-nelson", { role: "designer" })
    .addPerson("person+the-byte-works", { role: "developer" })
    .addLicenses(["lic+proprietary"])
    .addParadigms([
      "para+imperative",
      "para+structured",
      "para+modular",
      "para+information",
      "para+concurrent",
      "para+objects",
      "para+generic",
    ])
    .addPlatforms([
      "platf+cross-platform",
      "platf+amd",
      "platf+amd-am2900",
      "platf+ia-32",
      "platf+x86-64",
      "platf+bsd",
      "platf+linux",
      "platf+mac",
    ])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+safe"]);

  /**/
}
