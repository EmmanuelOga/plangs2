import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+algol")
    .merge({
      name: "ALGOL 68",
      websites: [
        { kind: "wikipedia", title: "ALGOL 68", href: "https://en.wikipedia.org/wiki/ALGOL_68" },
        { kind: "wikipedia", title: "ALGOL 58", href: "https://en.wikipedia.org/wiki/ALGOL_58" },
        { kind: "wikipedia", title: "ALGOL", href: "https://en.wikipedia.org/wiki/ALGOL" },
        { kind: "wikipedia", title: "ALGOL 60", href: "https://en.wikipedia.org/wiki/ALGOL_60" },
        { kind: "wikipedia", title: "ALGOL 68C", href: "https://en.wikipedia.org/wiki/ALGOL_68C" },
        { kind: "wikipedia", title: "ALGOL 68-R", href: "https://en.wikipedia.org/wiki/ALGOL_68-R" },
        { kind: "wikipedia", title: "ALGOL 68RS", href: "https://en.wikipedia.org/wiki/ALGOL_68RS" },
        { kind: "wikipedia", title: "ALGOL 68S", href: "https://en.wikipedia.org/wiki/ALGOL_68S" },
        { kind: "wikipedia", title: "ALGOL Y", href: "https://en.wikipedia.org/wiki/ALGOL_Y" },
        { kind: "wikipedia", title: "ALGOL W", href: "https://en.wikipedia.org/wiki/ALGOL_W" },
        { kind: "wikipedia", title: "Dartmouth ALGOL 30", href: "https://en.wikipedia.org/wiki/Dartmouth_ALGOL_30" },
        { kind: "wikipedia", title: "S-algol", href: "https://en.wikipedia.org/wiki/S-algol" },
        { kind: "wikipedia", title: "PS-algol", href: "https://en.wikipedia.org/wiki/PS-algol" },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Algol68RevisedReportCover.jpg/121px-Algol68RevisedReportCover.jpg",
        },
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/1965_ALGOL-20_A_Language_Manual%2C_Fierst_et_al_-_cover.jpg/121px-1965_ALGOL-20_A_Language_Manual%2C_Fierst_et_al_-_cover.jpg",
        },
      ],
      releases: [{ name: "ALGOL 68", version: "unknown", date: "1973-01-01", kind: "stable" }],
    })
    .addDialects([
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
      "pl+simula",
      "pl+simula67",
      "pl+small",
    ])
    .addImplementations(["pl+algol", "pl+flacc", "pl+odra", "pl+bliss", "pl+pl360", "pl+assembly"])
    .addInfluences(["pl+fortran", "pl+superplan", "pl+algol", "pl+pl360", "pl+speedcoding"])
    .addInfluence("pl+plankalkul", {
      refs: [
        {
          href: "https://books.google.com/books?id=nDWPW9uwZPAC&q=algol-68+konrad+zuse&pg=PA292",
          title: "The First Computers: History and Architectures",
        },
        { href: "https://de.wikipedia.org/wiki/Ulf_Hashagen", title: "Hashagen, Ulf" },
      ],
    })
    .addPerson("person+friedrich-l-bauer", { role: "designer" })
    .addPerson("person+hermann-bottenbruch", { role: "designer" })
    .addPerson("person+heinz-rutishauser", { role: "designer" })
    .addPerson("person+klaus-samelson", { role: "designer" })
    .addPerson("person+john-backus", { role: "designer" })
    .addPerson("person+charles-katz", { role: "designer" })
    .addPerson("person+alan-perlis", { role: "designer" })
    .addPerson("person+joseph-henry-wegstein", { role: "designer" })
    .addPerson("person+van-wijngaarden", { role: "designer" })
    .addPerson("person+a-van-wijngaarden", { role: "designer" })
    .addPerson("person+b-j-mailloux", { role: "designer" })
    .addPerson("person+j-e-l-peck", { role: "designer" })
    .addPerson("person+c-h-a-koster", { role: "designer" })
    .addPerson("person+charles-h-lindsey", { role: "designer" })
    .addPerson("person+niklaus-wirth", { role: "designer" })
    .addPerson("person+tony-hoare", { role: "designer" })
    .addPerson("person+anthony-w-knapp", { role: "designer" })
    .addPerson("person+thomas-e-kurtz", { role: "designer" })
    .addPerson("person+ron-morrison", { role: "designer" })
    .addPerson("person+paul-cockshott", { role: "designer" })
    .addParadigms(["para+imperative", "para+structured", "para+multi", "para+concurrent"])
    .addPlatforms(["platf+atari"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+safe", "tsys+structural"]);

  /**/
}
