import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+oberon", {
      images: [{ kind: "logo", title: "Oberon", url: "/images/plangs/o/oberon/logo.png" }],
      name: "Oberon",
      description:
        "Oberon is a general-purpose programming language first published in 1987 by Niklaus Wirth and the latest member of the Wirthian family of ALGOL-like languages (Euler, ALGOL W, Pascal, Modula, and Modula-2). Oberon was the result of a concentrated effort to increase the power of Modula-2, the direct successor of Pascal, and simultaneously to reduce its complexity. Its principal new feature is the concept of data type extension of record types. It permits constructing new data types on the basis of existing ones and to relate them, deviating from the dogma of strict static typing of data. Type extension is Wirth's way of inheritance reflecting the viewpoint of the parent site. Oberon was developed as part of the implementation of an operating system, also named Oberon at ETH Zurich in Switzerland. The name was inspired both by the Voyager space probe's pictures of the moon of the planet Uranus, named Oberon, and because Oberon is famous as the king of the elves.",
      websites: [
        { href: "https://projectoberon.net/", title: "projectoberon.net", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Oberon_programming_language", title: "Oberon", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [],
    })
    .addInfluencedBy(["pl+pascal"])
    .addParadigms(["para+imperative", "para+modular", "para+oop", "para+structured"])
    .addPlatforms(["platf+linux", "platf+windows", "platf+x86-64"])
    .addTypeSystems(["tsys+dynamic", "tsys+static", "tsys+strong"]);
}
