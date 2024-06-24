import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+solidity",
    "Solidity",
    {
      name: "Solidity",
      websites: [
        { kind: "wikipedia", title: "Solidity", href: "https://en.wikipedia.org/wiki/Solidity" },
        { kind: "homepage", title: "soliditylang.org", href: "https://soliditylang.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg" }],
      references: {
        developer: [{ href: "https://github.com/ethereum/solidity", title: "Contributors to ethereum/solidity" }],
        stable_release: [
          { href: "https://github.com/ethereum/solidity/releases/tag/v0.8.26", title: "Release 0.8.26" },
        ],
        implementation_language: [{ href: "https://github.com/", title: "Build software better, together" }],
        license: [
          {
            href: "https://github.com/ethereum/solidity/blob/bca3fb8ffd7c57a3f6920fd5a115a9a0fc0edb21/LICENSE.txt",
            title: "The Solidity Contract-Oriented Programming Language",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "2014-01-01", kind: "first" },
        { version: "0.8.26", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".sol"],
    },
    {
      implementations: ["pl+cpp"],
      influences: ["pl+cpp", "pl+javascript", "pl+python"],
      licenses: ["lic+gpl"],
      paradigms: ["para+imperative"],
      people: [["person+gavin-wood", "designer"]],
    },
  );

  /**/
}
