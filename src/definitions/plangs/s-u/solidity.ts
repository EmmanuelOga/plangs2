import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+solidity",
    {
      name: "Solidity",
      websites: [{ kind: "wikipedia", title: "Solidity", href: "https://en.wikipedia.org/wiki/Solidity" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg" }],
      releases: [{ version: "0.8.26", date: "2024-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+cpp"],
      influences: ["pl+cpp", "pl+javascript", "pl+python"],
      people: ["person+gavin-wood"],
      licenses: ["lic+gpl"],
      paradigms: ["para+imperative"],
    },
  );
}
