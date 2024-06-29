import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+kawa",
    "Kawa",
    {
      name: "Kawa",
      websites: [
        { kind: "wikipedia", title: "Kawa", href: "https://en.wikipedia.org/wiki/Kawa_(Scheme_implementation)" },
        { kind: "homepage", title: "www.gnu.org/software/kawa", href: "https://www.gnu.org/software/kawa" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Kawa-logo.svg" }],
      references: {
        first_appeared: [{ href: "https://gitlab.com/kashell/Kawa/-/blob/master/ChangeLog", title: "Change log" }],
        stable_release: [{ href: "https://www.gnu.org/software/kawa/news.html", title: "Kawa: News – Recent Changes" }],
      },
      releases: [
        { version: "unknown", date: "1996-06-10", kind: "first" },
        { version: "3.1.1", date: "2020-01-16", kind: "stable" },
      ],
    },
    {
      implementations: ["pl+java", "pl+scheme"],
      influences: ["pl+lisp", "pl+scheme"],
      licenses: ["lic+mit"],
      people: [["person+per-bothner", { role: "designer" }]],
      platforms: ["platf+cross-platform", "platf+jvm"],
    },
  );
}
