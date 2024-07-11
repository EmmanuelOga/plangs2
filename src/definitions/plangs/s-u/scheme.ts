import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+scheme")
    .merge({
      name: "Scheme",
      websites: [
        { kind: "wikipedia", title: "Scheme", href: "https://en.wikipedia.org/wiki/Scheme_(programming_language)" },
      ],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/3/39/Lambda_lc.svg" }],
      releases: [{ name: "Scheme", version: "unknown", date: "2013-01-01", kind: "stable" }],
    })
    .addDialects(["pl+dsssl"])
    .addInfluences(["pl+algol", "pl+mdl", "pl+lisp"])
    .addInfluence("pl+racket", {
      refs: [{ href: "http://www.r6rs.org", title: "Revised6 Report on the Algorithmic Language Scheme (R6RS)" }],
    })
    .addPerson("person+guy-l-steele", { role: "designer" })
    .addPerson("person+gerald-jay-sussman", { role: "designer" })
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+meta"])
    .addTypeSystems(["tsys+dynamic", "tsys+latent", "tsys+strong"]);

  /**/
}
