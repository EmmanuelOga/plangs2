import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+jruby").merge({
    name: "JRuby",
    websites: [{ kind: "wikipedia", title: "JRuby", href: "https://en.wikipedia.org/wiki/JRuby" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/JRuby_logo.png/200px-JRuby_logo.png",
      },
    ],
    releases: [{ version: "9.4.5.0", date: "2023-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+mruby").merge({
    name: "mruby",
    websites: [{ kind: "wikipedia", title: "mruby", href: "https://en.wikipedia.org/wiki/Mruby" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Mruby_logo_red.svg" }],
    releases: [{ version: "3.3.0", date: "2024-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+ruby").merge({
    name: "Ruby",
    websites: [
      { kind: "wikipedia", title: "Ruby", href: "https://en.wikipedia.org/wiki/Ruby_(programming_language)" },
      { kind: "wikipedia", title: "Ruby", href: "https://en.wikipedia.org/wiki/Ruby_programming_language" },
    ],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg" }],
    releases: [{ version: "3.3.3", date: "2024-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+ruby-mri").merge({
    name: "Ruby MRI",
    websites: [{ kind: "wikipedia", title: "Ruby MRI", href: "https://en.wikipedia.org/wiki/Ruby_MRI" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Ruby-logo-notext.png/120px-Ruby-logo-notext.png",
      },
    ],
  });

  g.buildPlang("pl+rubymotion").merge({
    name: "RubyMotion",
    websites: [{ kind: "wikipedia", title: "RubyMotion", href: "https://en.wikipedia.org/wiki/RubyMotion" }],
  });
}
