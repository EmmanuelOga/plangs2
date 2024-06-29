import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+erlang",
    "Erlang",
    {
      name: "Erlang",
      websites: [
        { kind: "wikipedia", title: "Erlang", href: "https://en.wikipedia.org/wiki/Erlang_(programming_language)" },
        { kind: "homepage", title: "www.erlang.org", href: "https://www.erlang.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/04/Erlang_logo.svg" }],
      releases: [
        { version: "unknown", date: "1986-01-01", kind: "first" },
        { version: "26.2.5", date: "2024-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [{ href: "https://github.com/erlang/otp/releases/tag/OTP-26.2.5", title: "Release 26.2.5" }],
        influenced_by: [
          {
            href: "https://vimeo.com/97329186",
            title:
              "Joe Armstrong - Functional Programming the Long Road to Enlightenment: a Historical and Personal Narrative",
          },
        ],
        influenced: [
          {
            href: "http://radar.oreilly.com/2011/06/clojure-java-lisp-jvm.html",
            title: "Clojure: Lisp meets Java, with a side of Erlang - O'Reilly Radar",
          },
          { href: "https://doc.rust-lang.org/reference/influences.html", title: "Influences - The Rust Reference" },
        ],
      },
      extensions: [".erl", ".hrl"],
    },
    {
      dialects: ["pl+lfe"],
      influences: ["pl+lisp", "pl+ml", "pl+plex", "pl+prolog", "pl+smalltalk"],
      licenses: ["lic+apache"],
      paradigms: ["para+concurrent", "para+functional", "para+multi", "para+objects"],
      people: [["person+joe-armstrong", { role: "designer" }]],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );
}
