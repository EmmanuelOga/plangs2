import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+d", {
      images: [{ title: "D programming language", kind: "logo", url: "/images/plangs/d/d/main.png" }],
      name: "D programming language",
      description:
        "D, also known as dlang, is a multi-paradigm system programming language created by Walter Bright at Digital Mars and released in 2001. Andrei Alexandrescu joined the design and development effort in 2007. Though it originated as a re-engineering of C++, D is now a very different language. As it has developed, it has drawn inspiration from other high-level programming languages. Notably, it has been influenced by Java, Python, Ruby, C#, and Eiffel.",
      websites: [
        { href: "http://dlang.org/", title: "dlang.org", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/D_(programming_language)", title: "D programming language", kind: "wikipedia" },
      ],
      extensions: [".d"],
      releases: [{ version: "2.109.1", date: "2024-01-01" }],
    })
    .addInfluencedBy(["pl+ada", "pl+basic", "pl+c", "pl+c++", "pl+c-sharp", "pl+eiffel", "pl+ruby"])
    .addLicenses(["lic+boost"])
    .addParadigms(["para+functional", "para+imperative", "para+multi", "para+oop"])
    .addPlatforms(["platf+apple", "platf+bsd", "platf+linux", "platf+windows"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);
}
