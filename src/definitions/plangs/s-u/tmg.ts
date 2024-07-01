import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+tmg")
    .merge({
      name: "TMGUnix TMG",
      websites: [{ kind: "wikipedia", title: "TMG", href: "https://en.wikipedia.org/wiki/TMG_(language)" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Brainfuck_to_C_translator_in_Unix_TMG.png/225px-Brainfuck_to_C_translator_in_Unix_TMG.png",
        },
      ],
    })
    .addDialects(["pl+pdp-7", "pl+pdp-11"])
    .addInfluences(["pl+b", "pl+pl-slash"])
    .addInfluence("pl+algol", {
      refs: [{ href: "https://www.bell-labs.com/usr/dmr/www/chist.pdf", title: "The Development of the C Language" }],
    })
    .addInfluence("pl+snobol", {
      refs: [
        {
          href: "https://amakukha.github.io/tmg/TMG_Manual_McIlroy_1972.html",
          title: "A Manual for the Tmg Compiler-writing Language",
        },
      ],
    })
    .addPerson("person+douglas-mcilroy", { role: "developer" });

  /**/
}
