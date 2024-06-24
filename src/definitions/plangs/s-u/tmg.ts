import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+tmg",
    "TMG",
    {
      name: "TMG",
      websites: [{ kind: "wikipedia", title: "TMGUnix TMG", href: "https://en.wikipedia.org/wiki/TMG_(language)" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Brainfuck_to_C_translator_in_Unix_TMG.png/225px-Brainfuck_to_C_translator_in_Unix_TMG.png",
        },
      ],
      releases: [{ version: "unknown", date: "1969-01-01", kind: "first" }],
      extensions: [".t"],
      references: {
        influenced_by: [
          { href: "https://www.bell-labs.com/usr/dmr/www/chist.pdf", title: "The Development of the C Language" },
          {
            href: "https://amakukha.github.io/tmg/TMG_Manual_McIlroy_1972.html",
            title: "A Manual for the Tmg Compiler-writing Language",
          },
        ],
      },
    },
    {
      dialects: ["pl+pdp-11", "pl+pdp-7"],
      influenced: ["pl+b", "pl+yacc"],
      influences: ["pl+algol-68", "pl+b", "pl+pl-slashi", "pl+snobol"],
      people: [
        ["person+douglas-mcilroy", "developer"],
        ["person+robert-m-mcclure", "designer"],
      ],
    },
  );

  /**/
}
