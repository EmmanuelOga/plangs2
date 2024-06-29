import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ceylon",
    "Ceylon",
    {
      name: "Ceylon",
      websites: [
        { kind: "wikipedia", title: "Ceylon", href: "https://en.wikipedia.org/wiki/Ceylon_(programming_language)" },
        { kind: "homepage", title: "ceylon-lang.org", href: "http://ceylon-lang.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Ceylon_%28programming_language%29_logo.png/121px-Ceylon_%28programming_language%29_logo.png",
        },
      ],
      releases: [
        { version: "unknown", date: "2011-01-01", kind: "first" },
        { version: "1.3.3", date: "2017-08-21", kind: "stable" },
      ],
      extensions: [".ceylon"],
    },
    {
      influences: ["pl+scala", "pl+java", "pl+smalltalk", "pl+ml", "pl+lisp", "pl+whiley"],
      licenses: ["lic+apache"],
      paradigms: ["para+objects"],
      people: ["person+gavin-king"],
      platforms: ["platf+jvm", "platf+javascript"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+safe"],
    },
  );
}
