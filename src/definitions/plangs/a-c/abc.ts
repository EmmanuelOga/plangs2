import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+abc")
    .merge({
      name: "ABC",
      websites: [{ kind: "wikipedia", title: "ABC", href: "https://en.wikipedia.org/wiki/ABC_(programming_language)" }],
      releases: [{ name: "ABC", version: "1.05.02", date: "1990-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+setl", "pl+isetl", "pl+setl2"])
    .addInfluence("pl+algol", {
      refs: [
        {
          href: "https://books.google.com/books?q=He-was-clearly-influenced-by-ALGOL-68",
          title: "Masterminds of Programming: Conversations with the Creators of Major Programming Languages",
        },
      ],
    })
    .addPerson("person+lambert-meertens", { role: "designer" })
    .addPerson("person+steven-pemberton", { role: "designer" })
    .addPerson("person+centrum-wiskunde", { role: "developer" })
    .addParadigms(["para+multi", "para+imperative", "para+structured"])
    .addPlatforms(["platf+unix", "platf+win", "platf+mac", "platf+atari"])
    .addTypeSystems(["tsys+strong", "tsys+polymorphic"]);

  /**/
}
