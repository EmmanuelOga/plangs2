import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+scheme",
    "Scheme",
    {
      name: "Scheme",
      websites: [
        { kind: "wikipedia", title: "Scheme", href: "https://en.wikipedia.org/wiki/Scheme_(programming_language)" },
        { kind: "homepage", title: "www.scheme.org", href: "https://www.scheme.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/39/Lambda_lc.svg" }],
      releases: [
        { version: "unknown", date: "1975-01-01", kind: "first" },
        { version: "unknown", date: "2013-01-01", kind: "stable" },
      ],
      extensions: [".scm", ".ss"],
      references: {
        influenced: [
          { href: "https://doc.rust-lang.org/reference/influences.html", title: "Influences - The Rust Reference" },
        ],
      },
    },
    {
      dialects: ["pl+dsssl"],
      influences: ["pl+algol", "pl+lisp", "pl+mdl", "pl+racket"],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi"],
      people: [
        ["person+gerald-jay-sussman", { role: "designer" }],
        ["person+guy-l-steele", { role: "designer" }],
      ],
      typeSystems: ["tsys+dynamic", "tsys+latent", "tsys+strong"],
    },
  );
}
