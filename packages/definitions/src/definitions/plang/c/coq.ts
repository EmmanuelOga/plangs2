import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+coq", {
      name: "Coq",
      description:
        "Interactive theorem prover that allows users to write formal mathematical definitions, executable algorithms, and theorems, mechanically check proofs of those properties, and extract a certified program from proofs. It leverages the calculus of inductive constructions for these purposes. Coq is widely utilized in formal verification projects and mathematical proof checking.",
      shortDesc:
        "Interactive theorem prover focused on formal verification and proof checking.",
      created: "1989",
      extGithubPath: "coq/coq",
      extHomeURL: "https://coq.inria.fr/",
      extRedditPath: "Coq",
      extWikipediaPath: "Coq",
      githubColor: "#d0b68c",
      githubLangId: "69",
      githubName: "Coq",
      githubPopular: false,
      githubStars: 4900,
      githubType: "programming",
      isTranspiler: false,
      keywords: [
        "coq",
        "formal proof",
        "proof assistant",
        "theorem prover",
        "verification",
      ],
      languishRanking: 139,
      releases: [
        { version: "4.10", name: "Initial Release", date: "1989-05-01" },
        { version: "8.20.0", name: "Stable Release", date: "2024-09-03" },
        { version: "8.19.2", date: "2024-01-01" },
      ],
      stackovTags: ["coq"],
    })
    .relInfluencedBy.add("pl+ocaml")
    .relLicenses.add("lic+lgpl")
    .relParadigms.add("para+declarative", "para+functional", "para+logic")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+edu", "tag+interpreters", "tag+proofs")
    .relTypeSystems.add("tsys+dependent", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+ocaml");
}
