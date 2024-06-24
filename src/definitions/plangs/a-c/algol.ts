import type { PlangsGraph } from "../../../entities/plangs_graph";

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
        "pl+executive-systems-problem-oriented",
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
      ],
      influenced: [
        "pl+bliss",
        "pl+coral",
        "pl+dartmouth-basic",
        "pl+dylan",
        "pl+icon",
        "pl+jovial",
        "pl+mesa",
        "pl+modula-2p",
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

  lb.define(
    "pl+algol-60",
    "ALGOL 60",
    {
      name: "ALGOL 60",
      websites: [{ kind: "wikipedia", title: "ALGOL 60", href: "https://en.wikipedia.org/wiki/ALGOL_60" }],
      releases: [{ version: "unknown", date: "1960-01-01", kind: "first" }],
    },
    {
      influenced: [
        "pl+algol-68",
        "pl+algol-w",
        "pl+atlas-autocode",
        "pl+basic",
        "pl+clu",
        "pl+combined",
        "pl+concurrent-pascal",
        "pl+dartmouth-algol-30",
        "pl+edinburgh-imp",
        "pl+euler",
        "pl+executive-systems-problem-oriented",
        "pl+imp",
        "pl+iswim",
        "pl+napier88",
        "pl+pl-slash1",
        "pl+pop-2",
        "pl+ps-algol",
        "pl+setl",
        "pl+simula-67",
      ],
      influences: ["pl+ada", "pl+algol-58", "pl+c", "pl+combined", "pl+pascal", "pl+pl-slashi", "pl+simula"],
      paradigms: ["para+imperative", "para+structured"],
      people: [["person+van-wijngaarden", "designer"]],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+algol-68",
    "ALGOL 68",
    {
      name: "ALGOL 68",
      websites: [{ kind: "wikipedia", title: "ALGOL 68", href: "https://en.wikipedia.org/wiki/ALGOL_68" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Algol68RevisedReportCover.jpg/121px-Algol68RevisedReportCover.jpg",
        },
      ],
      releases: [
        { version: "unknown", date: "1968-01-01", kind: "first" },
        { version: "unknown", date: "1973-01-01", kind: "stable" },
      ],
    },
    {
      implementations: ["pl+algol-68-r", "pl+algol-68c", "pl+algol-68rs", "pl+algol-68s", "pl+flacc", "pl+odra"],
      influenced: [
        "pl+abc",
        "pl+ada",
        "pl+c",
        "pl+cpp",
        "pl+draco",
        "pl+elan",
        "pl+python",
        "pl+rtl-slash2",
        "pl+s3",
        "pl+seed7",
        "pl+tmg",
      ],
      influences: ["pl+algol-60", "pl+algol-y"],
      paradigms: ["para+concurrent", "para+imperative", "para+multi"],
      people: [
        ["person+a-van-wijngaarden", "designer"],
        ["person+b-j-mailloux", "designer"],
        ["person+c-h-a-koster", "designer"],
        ["person+j-e-l-peck", "designer"],
      ],
      typeSystems: ["tsys+safe", "tsys+static", "tsys+strong", "tsys+structural"],
    },
  );

  /**/

  lb.define("pl+algol-68-r", "ALGOL 68-R", {
    name: "ALGOL 68-R",
    websites: [{ kind: "wikipedia", title: "ALGOL 68-R", href: "https://en.wikipedia.org/wiki/ALGOL_68-R" }],
  });

  /**/

  lb.define("pl+algol-68c", "ALGOL 68C", {
    name: "ALGOL 68C",
    websites: [{ kind: "wikipedia", title: "ALGOL 68C", href: "https://en.wikipedia.org/wiki/ALGOL_68C" }],
  });

  /**/

  lb.define("pl+algol-68rs", "ALGOL 68RS", {
    name: "ALGOL 68RS",
    websites: [{ kind: "wikipedia", title: "ALGOL 68RS", href: "https://en.wikipedia.org/wiki/ALGOL_68RS" }],
  });

  /**/

  lb.define(
    "pl+algol-68s",
    "ALGOL 68S",
    {
      name: "ALGOL 68S",
      websites: [{ kind: "wikipedia", title: "ALGOL 68S", href: "https://en.wikipedia.org/wiki/ALGOL_68S" }],
      releases: [{ version: "unknown", date: "1977-01-01", kind: "first" }],
    },
    {
      implementations: ["pl+bliss"],
      paradigms: ["para+concurrent", "para+imperative", "para+multi"],
      people: [["person+charles-h-lindsey", "designer"]],
      platforms: ["platf+atari"],
      typeSystems: ["tsys+safe", "tsys+static", "tsys+strong", "tsys+structural"],
    },
  );

  /**/

  lb.define(
    "pl+algol-like",
    "Algol-like",
    {
      name: "Algol-like",
      websites: [{ kind: "wikipedia", title: "Algol-like", href: "https://en.wikipedia.org/wiki/Algol-like" }],
    },
    { influenced: ["pl+algol-58"] },
  );

  /**/

  lb.define(
    "pl+algol-w",
    "ALGOL W",
    {
      name: "ALGOL W",
      websites: [{ kind: "wikipedia", title: "ALGOL W", href: "https://en.wikipedia.org/wiki/ALGOL_W" }],
      releases: [{ version: "unknown", date: "1966-01-01", kind: "first" }],
    },
    {
      implementations: ["pl+pl360"],
      influenced: ["pl+modula-2", "pl+pascal", "pl+pl360"],
      influences: ["pl+algol-60", "pl+modula-2", "pl+pascal"],
      paradigms: ["para+imperative", "para+multi", "para+structured"],
      people: [
        ["person+niklaus-wirth", "designer"],
        ["person+tony-hoare", "designer"],
      ],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+algol-y",
    "ALGOL Y",
    {
      name: "ALGOL Y",
      websites: [{ kind: "wikipedia", title: "ALGOL Y", href: "https://en.wikipedia.org/wiki/ALGOL_Y" }],
    },
    { influenced: ["pl+algol-68"] },
  );

  /**/

  lb.define(
    "pl+dartmouth-algol-30",
    "Dartmouth ALGOL 30",
    {
      name: "Dartmouth ALGOL 30",
      websites: [
        { kind: "wikipedia", title: "Dartmouth ALGOL 30", href: "https://en.wikipedia.org/wiki/Dartmouth_ALGOL_30" },
      ],
      releases: [{ version: "unknown", date: "1961-01-01", kind: "first" }],
    },
    {
      implementations: ["pl+assembly"],
      influenced: ["pl+dope"],
      influences: ["pl+algol-58", "pl+algol-60", "pl+dartmouth-time-sharing-system"],
      paradigms: ["para+imperative", "para+multi", "para+structured"],
      people: [
        ["person+anthony-w-knapp", "designer"],
        ["person+thomas-e-kurtz", "designer"],
      ],
    },
  );

  /**/

  lb.define(
    "pl+ps-algol",
    "PS-algol",
    {
      name: "PS-algol",
      websites: [{ kind: "wikipedia", title: "PS-algol", href: "https://en.wikipedia.org/wiki/PS-algol" }],
      releases: [{ version: "unknown", date: "1983-01-01", kind: "first" }],
    },
    {
      influenced: ["pl+napier88"],
      influences: ["pl+algol-60", "pl+napier88", "pl+s-algol"],
      paradigms: ["para+imperative", "para+multi", "para+structured"],
      people: [
        ["person+paul-cockshott", "designer"],
        ["person+ron-morrison", "designer"],
      ],
    },
  );

  /**/

  lb.define(
    "pl+s-algol",
    "S-algol",
    {
      name: "S-algol",
      websites: [{ kind: "wikipedia", title: "S-algol", href: "https://en.wikipedia.org/wiki/S-algol" }],
    },
    { influenced: ["pl+napier88", "pl+ps-algol"] },
  );

  /**/
}
