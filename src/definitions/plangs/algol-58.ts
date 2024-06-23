import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+algol-58",
    "IAL, ALGOL 58",
    {
      name: "IAL, ALGOL 58",
      websites: [{ kind: "wikipedia", title: "ALGOL 58", href: "https://en.wikipedia.org/wiki/ALGOL_58" }],
      releases: [{ version: "unknown", date: "1958-01-01", kind: "first" }],
      references: {
        influenced_by: [
          {
            href: "https://books.google.com/books?id=nDWPW9uwZPAC&q=algol-68+konrad+zuse&pg=PA292",
            title: "The First Computers: History and Architectures",
          },
        ],
      },
    },
    {
      influenced: [
        "pl+algol-60",
        "pl+dartmouth-algol-30",
        "pl+fortran-95",
        "pl+mad",
        "pl+plankalkul",
        "pl+speedcoding",
        "pl+superplan",
      ],
      influences: ["pl+algol-like", "pl+fortran", "pl+plankalkul", "pl+superplan"],
      paradigms: ["para+imperative", "para+structured"],
      people: [
        ["person+alan-perlis", "designer"],
        ["person+charles-katz", "designer"],
        ["person+friedrich-l-bauer", "designer"],
        ["person+heinz-rutishauser", "designer"],
        ["person+hermann-bottenbruch", "designer"],
        ["person+john-backus", "designer"],
        ["person+joseph-henry-wegstein", "designer"],
        ["person+klaus-samelson", "designer"],
      ],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/
}
