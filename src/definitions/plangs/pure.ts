import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+pure",
    "Pure",
    {
      name: "Pure",
      websites: [
        { kind: "wikipedia", title: "Pure", href: "https://en.wikipedia.org/wiki/Pure_(programming_language)" },
        { kind: "repository", title: "agraef.github.io/pure-lang/", href: "https://agraef.github.io/pure-lang/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Pure_lang_logo.png/121px-Pure_lang_logo.png",
        },
      ],
      releases: [
        { version: "unknown", date: "2008-01-01", kind: "first" },
        { version: "0.68", date: "2018-04-11", kind: "stable" },
      ],
    },
    {
      influences: ["pl+alice", "pl+haskell", "pl+lisp", "pl+matlab", "pl+q"],
      licenses: ["lic+lgpl"],
      paradigms: ["para+dec", "para+functional", "para+term"],
      people: [["person+albert-graf", "designer"]],
      platforms: ["platf+bsd", "platf+cross-platform", "platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/
}
