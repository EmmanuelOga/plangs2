import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+algol").merge({
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
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Algol68RevisedReportCover.jpg/121px-Algol68RevisedReportCover.jpg",
      },
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/1965_ALGOL-20_A_Language_Manual%2C_Fierst_et_al_-_cover.jpg/121px-1965_ALGOL-20_A_Language_Manual%2C_Fierst_et_al_-_cover.jpg",
      },
    ],
    releases: [{ version: "unknown", date: "1973-01-01", kind: "stable" }],
  });
}
