import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+jruby",
    "JRuby",
    {
      name: "JRuby",
      websites: [
        { kind: "wikipedia", title: "JRuby", href: "https://en.wikipedia.org/wiki/JRuby" },
        { kind: "homepage", title: "www.jruby.org", href: "https://www.jruby.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/JRuby_logo.png/200px-JRuby_logo.png",
        },
      ],
      releases: [
        { version: "unknown", date: "2001-01-01", kind: "first" },
        { version: "9.4.5.0", date: "2023-11-02", kind: "stable" },
      ],
      references: {
        stable_release: [{ href: "https://github.com/jruby/jruby/releases", title: "Releases · jruby/jruby" }],
      },
    },
    {
      licenses: ["lic+eclipse-public", "lic+gpl", "lic+lgpl"],
      people: [
        ["person+charles-oliver-nutter", { role: "developer" }],
        ["person+nick-sieger", { role: "developer" }],
        ["person+ola-bini", { role: "developer" }],
        ["person+thomas-enebo", { role: "developer" }],
      ],
      platforms: ["platf+jvm"],
    },
  );

  lb.define(
    "pl+mruby",
    "mruby",
    {
      name: "mruby",
      websites: [
        { kind: "wikipedia", title: "mruby", href: "https://en.wikipedia.org/wiki/Mruby" },
        { kind: "homepage", title: "mruby.org", href: "https://mruby.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Mruby_logo_red.svg" }],
      releases: [
        { version: "unknown", date: "2012-04-20", kind: "first" },
        { version: "3.3.0", date: "2024-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          { href: "https://github.com/mruby/mruby/releases/tag/3.3.0", title: "Release 3.3.0" },
          { href: "https://mruby.org/releases/2024/02/14/mruby-3.3.0-released.html", title: "mruby 3.3.0 released" },
        ],
        license: [{ href: "https://github.com/mruby/mruby/blob/master/LICENSE", title: "LICENSE" }],
      },
    },
    { licenses: ["lic+mit"], people: [["person+yukihiro-matsumoto", { role: "developer" }]] },
  );

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
      influences: [
        "pl+ada",
        "pl+basic",
        "pl+clu",
        "pl+cpp",
        "pl+dylan",
        "pl+eiffel",
        "pl+lisp",
        "pl+lua",
        "pl+perl",
        "pl+python",
        "pl+scheme",
        "pl+smalltalk",
      ],
      licenses: ["lic+ruby"],
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+objects", "para+reflective"],
      people: [["person+yukihiro-matsumoto", { role: "designer" }]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define("pl+ruby-mri", "Ruby MRI", {
    name: "Ruby MRI",
    websites: [{ kind: "wikipedia", title: "Ruby MRI", href: "https://en.wikipedia.org/wiki/Ruby_MRI" }],
  });

  lb.define(
    "pl+rubymotion",
    "RubyMotion",
    {
      name: "RubyMotion",
      websites: [
        { kind: "wikipedia", title: "RubyMotion", href: "https://en.wikipedia.org/wiki/RubyMotion" },
        { kind: "homepage", title: "www.rubymotion.com", href: "http://www.rubymotion.com/" },
      ],
    },
    { licenses: ["lic+eula", "lic+proprietary"] },
  );
}
