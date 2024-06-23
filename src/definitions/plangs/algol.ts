import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+algol",
    "ALGOL",
    {
      name: "ALGOL",
      websites: [{ kind: "wikipedia", title: "ALGOL", href: "https://en.wikipedia.org/wiki/ALGOL" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/1965_ALGOL-20_A_Language_Manual%2C_Fierst_et_al_-_cover.jpg/121px-1965_ALGOL-20_A_Language_Manual%2C_Fierst_et_al_-_cover.jpg",
        },
      ],
      releases: [{ version: "unknown", date: "1958-01-01", kind: "first" }],
    },
    {
      dialects: [
        "pl+algol-58",
        "pl+algol-60",
        "pl+algol-68",
        "pl+algol-68s",
        "pl+algol-w",
        "pl+atlas-autocode",
        "pl+coral",
        "pl+dartmouth-algol-30",
        "pl+edinburgh-imp",
        "pl+euler",
        "pl+executive-systems-problem-oriented-language",
        "pl+imp",
        "pl+jovial",
        "pl+mad",
        "pl+napier88",
        "pl+newp",
        "pl+pl360",
        "pl+ps-algol",
        "pl+rtl-slash2",
        "pl+sail",
        "pl+simula-67",
        "pl+small",
        "pl+systems-programming-language",
      ],
      influenced: [
        "pl+bliss",
        "pl+coral",
        "pl+dartmouth-basic",
        "pl+dylan",
        "pl+icon-programming-language",
        "pl+jovial",
        "pl+mesa",
        "pl+modula-2-plus",
        "pl+modula-3",
        "pl+newp",
        "pl+pl-slashm",
        "pl+pl360",
        "pl+rapira",
        "pl+rexx",
        "pl+scheme",
        "pl+small",
      ],
      influences: ["pl+c", "pl+pascal", "pl+pl-slashi", "pl+scheme", "pl+simula"],
      paradigms: ["para+imperative", "para+structured"],
      people: [["person+van-wijngaarden", "designer"]],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/
}
