import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs
    .set("pl+scratch", {
      name: "Scratch",
      description:
        "Scratch is a high-level, block-based visual programming language and website aimed primarily at children as an educational tool, with a target audience of ages 8 to 16. Users on the site can create projects on the website using a block-like interface. Scratch was conceived and designed through collaborative National Science Foundation grants awarded to Mitchel Resnick and Yasmin Kafai. Scratch is developed by the MIT Media Lab and has been translated into 70+ languages, being used in most parts of the world. Scratch is taught and used in after-school centers, schools, and colleges, as well as other public knowledge institutions. As of 15 February 2023, community statistics on the language's official website show more than 123 million projects shared by over 103 million users, over 804 million total projects ever created (including unshared projects), and more than 95 million monthly website visits.",
      firstAppeared: "2003-01-01",
      extensions: [".sb", ".sb2", ".sb3", ".sprite", ".sprite2", ".sprite3"],
      websites: [
        { href: "https://scratch.mit.edu/", title: "scratch.mit.edu", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Scratch_(programming_language)", title: "Scratch", kind: "wikipedia" },
      ],
      releases: [{ version: "3.0", date: "2019-01-01" }],
      images: [{ kind: "other", title: "Scratch", url: "/images/plangs/s/scratch/other.png" }],
    })
    .addInfluencedBy(["pl+squeak"])
    .addLicenses(["lic+bsd", "lic+gnu-gpl"])
    .addParadigms(["para+event-driven", "para+visual"])
    .addPlatforms(["platf+android", "platf+apple", "platf+linux", "platf+windows"])
    .addWrittenIn(["pl+actionscript", "pl+javascript", "pl+squeak"]);
}
