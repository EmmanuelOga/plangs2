import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+solidity")
    .merge({
      name: "Solidity",
      websites: [{ kind: "wikipedia", title: "Solidity", href: "https://en.wikipedia.org/wiki/Solidity" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg" }],
      releases: [{ version: "0.8.26", date: "2024-01-01", kind: "stable" }],
    })
    .addImplementation("pl+cpp", { refs: [{ href: "https://github.com/", title: "Build software better, together" }] })
    .addInfluences(["pl+javascript", "pl+cpp", "pl+python"])
    .addPerson("person+gavin-wood", { role: "designer" })
    .addLicense("lic+gpl", {
      refs: [
        {
          href: "https://github.com/ethereum/solidity/blob/bca3fb8ffd7c57a3f6920fd5a115a9a0fc0edb21/LICENSE.txt",
          title: "The Solidity Contract-Oriented Programming Language",
        },
      ],
    })
    .addParadigms(["para+imperative"]);

  /**/
}
