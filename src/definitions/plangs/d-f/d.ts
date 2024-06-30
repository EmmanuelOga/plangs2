import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+d")
    .merge({
      name: "D",
      websites: [
        { kind: "wikipedia", title: "D", href: "https://en.wikipedia.org/wiki/D_(programming_language)" },
        { kind: "wikipedia", title: "D programming language", href: "https://en.wikipedia.org/wiki/D_language" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/24/D_Programming_Language_logo.svg" },
      ],
      releases: [{ version: "2.108.0", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences([
      "pl+ada",
      "pl+c",
      "pl+cpp",
      "pl+c-sharp",
      "pl+java",
      "pl+python",
      "pl+ms-visual-c-sharp",
      "pl+ruby",
    ])
    .addInfluence("pl+basic", {
      refs: [{ href: "https://news.ycombinator.com/item?id=33846139", title: "On: Show HN: A nice C string API" }],
    })
    .addInfluence("pl+eiffel", {
      refs: [{ href: "https://archive.org/details/dprogramminglang00alex", title: "The D programming language" }],
    })
    .addPerson("person+walter-bright", { role: "designer" })
    .addPerson("person+andrei-alexandrescu", { role: "designer" })
    .addLicense("lic+boost", {
      refs: [
        {
          href: "http://forum.dlang.org/post/lndgp4$hiq$1@digitalmars.com",
          title: "dmd front end now switched to Boost license",
        },
      ],
    })
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+objects"])
    .addPlatforms(["platf+bsd", "platf+linux", "platf+mac", "platf+win"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

  /**/
}
