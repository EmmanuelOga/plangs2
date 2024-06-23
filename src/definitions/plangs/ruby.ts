import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ruby",
    "Ruby",
    {
      name: "Ruby",
      websites: [
        { kind: "wikipedia", title: "Ruby", href: "https://en.wikipedia.org/wiki/Ruby_(programming_language)" },
        { kind: "homepage", title: "ruby-lang.org", href: "https://www.ruby-lang.org/en/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg" }],
      releases: [
        { version: "unknown", date: "1995-01-01", kind: "first" },
        { version: "3.3.3", date: "2024-01-01", kind: "stable" },
      ],
      scoping: ["dynamic"],
      extensions: [".rb", ".ru"],
      references: {
        influenced_by: [
          {
            href: "https://web.archive.org/web/20200115080302/http://confreaks.tv/videos/rubyconf2008-reasons-behind-ruby",
            title: "Reasons behind Ruby",
          },
          {
            href: "https://archive.org/details/practicaljrubyon0000bini/page/3",
            title: "Practical JRuby on Rails Web 2.0 Projects: Bringing Ruby on Rails to Java",
          },
        ],
        influenced: [
          {
            href: "https://web.archive.org/web/20180816025550/https://docs.julialang.org/en/stable/",
            title: "Julia 1.0 Documentation: Introduction",
          },
          { href: "https://web.archive.org/web/20181225131630/http://programming.nu/about%0A%20", title: "About Nu™" },
          {
            href: "https://web.archive.org/web/20181225175312/http://ring-lang.sourceforge.net/doc1.6/introduction.html#ring-and-other-languages",
            title: "Ring and other languages",
          },
          {
            href: "https://web.archive.org/web/20190126051127/https://doc.rust-lang.org/reference/influences.html",
            title: "Influences - The Rust Reference",
          },
          {
            href: "https://web.archive.org/web/20181225175312/http://nondot.org/sabre/",
            title: "Chris Lattner's Homepage",
          },
        ],
      },
    },
    {
      implementations: [
        "pl+c",
        "pl+graalvm",
        "pl+jruby",
        "pl+mruby",
        "pl+rubinius",
        "pl+ruby-mri",
        "pl+rubymotion",
        "pl+yarv",
      ],
      influenced: [
        "pl+ada",
        "pl+apache-groovy",
        "pl+clojure",
        "pl+clu",
        "pl+crystal",
        "pl+dart",
        "pl+dylan",
        "pl+eiffel",
        "pl+elixir",
        "pl+fantom",
        "pl+julia",
        "pl+lisp-programming-language",
        "pl+mirah",
        "pl+nu",
        "pl+python",
        "pl+raku",
        "pl+ring",
        "pl+rust",
        "pl+scheme",
        "pl+smalltalk",
        "pl+umple",
      ],
      influences: [
        "pl+ada",
        "pl+basic",
        "pl+c-plus-plus",
        "pl+clojure",
        "pl+clu",
        "pl+coffeescript",
        "pl+crystal",
        "pl+d",
        "pl+dylan",
        "pl+eiffel",
        "pl+elixir",
        "pl+groovy",
        "pl+julia",
        "pl+lisp",
        "pl+lua",
        "pl+mirah",
        "pl+nu",
        "pl+perl",
        "pl+python",
        "pl+ring",
        "pl+rust",
        "pl+smalltalk",
        "pl+swift",
      ],
      licenses: ["lic+ruby"],
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+objects", "para+reflective"],
      people: [["person+yukihiro-matsumoto", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+strong"],
    },
  );

  /**/
}
