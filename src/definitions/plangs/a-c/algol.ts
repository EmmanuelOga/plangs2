import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+algol",
    "ALGOL 60",
    {
      name: "ALGOL 60",
      websites: [
        { kind: "wikipedia", title: "ALGOL", href: "https://en.wikipedia.org/wiki/ALGOL" },
        { kind: "wikipedia", title: "ALGOL 60", href: "https://en.wikipedia.org/wiki/ALGOL_60" },
        { kind: "wikipedia", title: "ALGOL 68", href: "https://en.wikipedia.org/wiki/ALGOL_68" },
        { kind: "wikipedia", title: "PS-algol", href: "https://en.wikipedia.org/wiki/PS-algol" },
        { kind: "wikipedia", title: "S-algol", href: "https://en.wikipedia.org/wiki/S-algol" },
        { kind: "wikipedia", title: "ALGOL 68C", href: "https://en.wikipedia.org/wiki/ALGOL_68C" },
        { kind: "wikipedia", title: "ALGOL 68-R", href: "https://en.wikipedia.org/wiki/ALGOL_68-R" },
        { kind: "wikipedia", title: "ALGOL 68RS", href: "https://en.wikipedia.org/wiki/ALGOL_68RS" },
        { kind: "wikipedia", title: "ALGOL 68S", href: "https://en.wikipedia.org/wiki/ALGOL_68S" },
        { kind: "wikipedia", title: "ALGOL Y", href: "https://en.wikipedia.org/wiki/ALGOL_Y" },
        { kind: "wikipedia", title: "ALGOL W", href: "https://en.wikipedia.org/wiki/ALGOL_W" },
        { kind: "wikipedia", title: "ALGOL 58", href: "https://en.wikipedia.org/wiki/ALGOL_58" },
        { kind: "wikipedia", title: "Algol-like", href: "https://en.wikipedia.org/wiki/Algol-like" },
        { kind: "wikipedia", title: "Dartmouth ALGOL 30", href: "https://en.wikipedia.org/wiki/Dartmouth_ALGOL_30" },
      ],
      releases: [
        { version: "unknown", date: "1983-01-01", kind: "first" },
        { version: "unknown", date: "1968-01-01", kind: "first" },
        { version: "unknown", date: "1973-01-01", kind: "stable" },
        { version: "unknown", date: "1958-01-01", kind: "first" },
        { version: "unknown", date: "1966-01-01", kind: "first" },
        { version: "unknown", date: "1961-01-01", kind: "first" },
        { version: "unknown", date: "1960-01-01", kind: "first" },
        { version: "unknown", date: "1977-01-01", kind: "first" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Algol68RevisedReportCover.jpg/121px-Algol68RevisedReportCover.jpg",
        },
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/1965_ALGOL-20_A_Language_Manual%2C_Fierst_et_al_-_cover.jpg/121px-1965_ALGOL-20_A_Language_Manual%2C_Fierst_et_al_-_cover.jpg",
        },
      ],
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
      dialects: [
        "pl+algol",
        "pl+atlas-autocode",
        "pl+coral",
        "pl+edinburgh-imp",
        "pl+euler",
        "pl+executive-systems-problem-oriented",
        "pl+imp",
        "pl+jovial",
        "pl+mad",
        "pl+napier88",
        "pl+newp",
        "pl+pl360",
        "pl+rtl-slash2",
        "pl+sail",
        "pl+simula-67",
        "pl+small",
      ],
      implementations: ["pl+algol", "pl+assembly", "pl+bliss", "pl+flacc", "pl+odra", "pl+pl360"],
      influences: ["pl+algol", "pl+fortran", "pl+pl360", "pl+plankalkul", "pl+speedcoding", "pl+superplan"],
      paradigms: ["para+concurrent", "para+imperative", "para+multi", "para+structured"],
      people: [
        ["person+a-van-wijngaarden", { role: "designer" }],
        ["person+alan-perlis", { role: "designer" }],
        ["person+anthony-w-knapp", { role: "designer" }],
        ["person+b-j-mailloux", { role: "designer" }],
        ["person+c-h-a-koster", { role: "designer" }],
        ["person+charles-h-lindsey", { role: "designer" }],
        ["person+charles-katz", { role: "designer" }],
        ["person+friedrich-l-bauer", { role: "designer" }],
        ["person+heinz-rutishauser", { role: "designer" }],
        ["person+hermann-bottenbruch", { role: "designer" }],
        ["person+j-e-l-peck", { role: "designer" }],
        ["person+john-backus", { role: "designer" }],
        ["person+joseph-henry-wegstein", { role: "designer" }],
        ["person+klaus-samelson", { role: "designer" }],
        ["person+niklaus-wirth", { role: "designer" }],
        ["person+paul-cockshott", { role: "designer" }],
        ["person+ron-morrison", { role: "designer" }],
        ["person+thomas-e-kurtz", { role: "designer" }],
        ["person+tony-hoare", { role: "designer" }],
        ["person+van-wijngaarden", { role: "designer" }],
      ],
      platforms: ["platf+atari"],
      typeSystems: ["tsys+safe", "tsys+static", "tsys+strong", "tsys+structural"],
    },
  );
}
