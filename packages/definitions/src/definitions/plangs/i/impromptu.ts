import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+impromptu", {
      images: [{ title: "Impromptu", kind: "other", url: "/images/plangs/i/impromptu/main.jpg" }],
      name: "Impromptu",
      description:
        "Impromptu is a Mac OS X programming environment for live coding. Impromptu is built around the Scheme language, which is a member of the Lisp family of languages. The source code of its core has been opened as the Extempore project.",
      websites: [
        { href: "http://impromptu.moso.com.au/", title: "impromptu.moso.com.au", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Impromptu_(programming_environment)", title: "Impromptu", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [{ version: "2.5" }],
    })
    .addInfluencedBy(["pl+lisp", "pl+scheme"])
    .addParadigms(["para+functional", "para+multi"])
    .addTypeSystems(["tsys+dynamic", "tsys+static"]);
}
