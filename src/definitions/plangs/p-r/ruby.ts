import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+jruby",
    {
      name: "JRuby",
      websites: [{ kind: "wikipedia", title: "JRuby", href: "https://en.wikipedia.org/wiki/JRuby" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/JRuby_logo.png/200px-JRuby_logo.png",
        },
      ],
      releases: [{ version: "9.4.5.0", date: "2023-01-01", kind: "stable" }],
    },
    { licenses: ["lic+eclipse-public", "lic+gpl", "lic+lgpl"], platforms: ["platf+jvm"] },
  );

  lb.define(
    "pl+mruby",
    {
      name: "mruby",
      websites: [{ kind: "wikipedia", title: "mruby", href: "https://en.wikipedia.org/wiki/Mruby" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Mruby_logo_red.svg" }],
      releases: [{ version: "3.3.0", date: "2024-01-01", kind: "stable" }],
    },
    { people: ["person+yukihiro-matsumoto"], licenses: ["lic+mit"] },
  );

  lb.define(
    "pl+ruby",
    {
      name: "Ruby",
      websites: [
        { kind: "wikipedia", title: "Ruby", href: "https://en.wikipedia.org/wiki/Ruby_(programming_language)" },
        { kind: "wikipedia", title: "Ruby", href: "https://en.wikipedia.org/wiki/Ruby_programming_language" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg" }],
      releases: [{ version: "3.3.3", date: "2024-01-01", kind: "stable" }],
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
      people: ["person+yukihiro-matsumoto"],
      licenses: ["lic+ruby"],
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+objects", "para+reflective"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+ruby-mri",
    {
      name: "Ruby MRI",
      websites: [{ kind: "wikipedia", title: "Ruby MRI", href: "https://en.wikipedia.org/wiki/Ruby_MRI" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Ruby-logo-notext.png/120px-Ruby-logo-notext.png",
        },
      ],
    },
    { licenses: ["lic+bsd-s", "lic+gpl", "lic+ruby"] },
  );

  lb.define(
    "pl+rubymotion",
    {
      name: "RubyMotion",
      websites: [{ kind: "wikipedia", title: "RubyMotion", href: "https://en.wikipedia.org/wiki/RubyMotion" }],
    },
    { licenses: ["lic+eula", "lic+proprietary"] },
  );
}
