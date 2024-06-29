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
        { version: "unknown", kind: "stable" },
        { version: "9.4.5.0", date: "2023-11-02", kind: "stable" },
      ],
    },
    {
      licenses: ["lic+eclipse-public", "lic+gpl", "lic+lgpl"],
      people: ["person+charles-oliver-nutter", "person+thomas-enebo", "person+ola-bini", "person+nick-sieger"],
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
        { version: "unknown", kind: "stable" },
        { version: "3.3.0", date: "2024-01-01", kind: "stable" },
      ],
    },
    { licenses: ["lic+mit"], people: ["person+yukihiro-matsumoto"] },
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
    },
    {
      implementations: [
        "pl+c",
        "pl+ruby-mri",
        "pl+graalvm",
        "pl+yarv",
        "pl+rubinius",
        "pl+jruby",
        "pl+rubymotion",
        "pl+mruby",
      ],
      influences: [
        "pl+ada",
        "pl+scheme",
        "pl+lisp",
        "pl+basic",
        "pl+cpp",
        "pl+clu",
        "pl+dylan",
        "pl+eiffel",
        "pl+lua",
        "pl+perl",
        "pl+python",
        "pl+smalltalk",
      ],
      licenses: ["lic+ruby"],
      paradigms: ["para+multi", "para+functional", "para+imperative", "para+objects", "para+reflective"],
      people: ["person+yukihiro-matsumoto"],
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
    { licenses: ["lic+proprietary", "lic+eula"] },
  );
}
