import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+a-")
    .merge({
      name: "A#",
      websites: [{ kind: "wikipedia", title: "A♯", href: "https://en.wikipedia.org/wiki/A%E2%99%AF_(Axiom)" }],
      releases: [
        { name: "A♯", version: "unknown", date: "2008-01-01", kind: "stable" },
        { name: "A♯", version: "unknown", date: "2014-01-01", kind: "preview" },
      ],
    })
    .addInfluences(["pl+pascal", "pl+haskell"])
    .addPerson("person+stephen-m-watt", { role: "designer" })
    .addLicenses(["lic+bsd-s"])
    .addParadigms(["para+multi", "para+objects", "para+functional"])
    .addPlatforms([
      "platf+cross-platform",
      "platf+dec",
      "platf+ia-32",
      "platf+intel-80286",
      "platf+linux",
      "platf+mach",
      "platf+dos",
      "platf+win",
      "platf+openvms",
      "platf+vm",
    ]);

  /**/
}
