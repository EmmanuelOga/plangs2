import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs
    .set("pl+impromptu", {
      name: "Impromptu",
      description:
        "Impromptu is a Mac OS X programming environment for live coding. Impromptu is built around the Scheme language, which is a member of the Lisp family of languages. The source code of its core has been opened as the Extempore project.",
      firstAppeared: "2005-01-01",
      websites: [
        { href: "http://impromptu.moso.com.au/", title: "impromptu.moso.com.au", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Impromptu_(programming_environment)", title: "Impromptu", kind: "wikipedia" },
      ],
      releases: [{ version: "2.5" }],
      images: [{ kind: "other", title: "Impromptu", url: "/images/plangs/i/impromptu/other.jpg" }],
    })
    .addInfluencedBy(["pl+lisp", "pl+scheme"])
    .addParadigms(["para+functional", "para+multi"])
    .addTypeSystems(["tsys+dynamic", "tsys+static"]);
}
