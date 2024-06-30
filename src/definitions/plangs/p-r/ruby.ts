import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+jruby")
    .merge({
      name: "JRuby",
      websites: [{ kind: "wikipedia", title: "JRuby", href: "https://en.wikipedia.org/wiki/JRuby" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/JRuby_logo.png/200px-JRuby_logo.png",
        },
      ],
      releases: [{ version: "9.4.5.0", date: "2023-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+eclipse-public", "lic+gpl", "lic+lgpl"])
    .addPlatforms(["platf+jvm"]);

  /**/

  g.buildPlang("pl+mruby")
    .merge({
      name: "mruby",
      websites: [{ kind: "wikipedia", title: "mruby", href: "https://en.wikipedia.org/wiki/Mruby" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Mruby_logo_red.svg" }],
      releases: [{ version: "3.3.0", date: "2024-01-01", kind: "stable" }],
    })
    .addPerson("person+yukihiro-matsumoto", { role: "developer" })
    .addLicense("lic+mit", {
      refs: [{ href: "https://github.com/mruby/mruby/blob/master/LICENSE", title: "LICENSE" }],
    });

  /**/

  g.buildPlang("pl+rubinius")
    .merge({
      name: "Rubinius",
      websites: [{ kind: "wikipedia", title: "Rubinius", href: "https://en.wikipedia.org/wiki/Rubinius" }],
      releases: [{ version: "5.0", date: "2020-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+mozilla-public"]);

  /**/

  g.buildPlang("pl+ruby")
    .merge({
      name: "Ruby",
      websites: [
        { kind: "wikipedia", title: "Ruby", href: "https://en.wikipedia.org/wiki/Ruby_(programming_language)" },
        { kind: "wikipedia", title: "Ruby", href: "https://en.wikipedia.org/wiki/Ruby_programming_language" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg" }],
      releases: [{ version: "3.3.3", date: "2024-01-01", kind: "stable" }],
    })
    .addImplementations([
      "pl+c",
      "pl+ruby-mri",
      "pl+graalvm",
      "pl+yarv",
      "pl+rubinius",
      "pl+jruby",
      "pl+rubymotion",
      "pl+mruby",
    ])
    .addInfluences(["pl+ada", "pl+eiffel", "pl+cpp", "pl+lua", "pl+scheme"])
    .addInfluence("pl+clu", {
      refs: [
        {
          href: "https://archive.org/details/practicaljrubyon0000bini/page/3",
          title: "Practical JRuby on Rails Web 2.0 Projects: Bringing Ruby on Rails to Java",
        },
      ],
    })
    .addInfluence("pl+dylan", {
      refs: [
        {
          href: "https://archive.org/details/practicaljrubyon0000bini/page/3",
          title: "Practical JRuby on Rails Web 2.0 Projects: Bringing Ruby on Rails to Java",
        },
      ],
    })
    .addInfluence("pl+python", {
      refs: [
        {
          href: "https://archive.org/details/practicaljrubyon0000bini/page/3",
          title: "Practical JRuby on Rails Web 2.0 Projects: bringing Ruby on Rails to the Java platform",
        },
      ],
    })
    .addInfluence("pl+basic", {
      refs: [
        {
          href: "https://web.archive.org/web/20200115080302/http://confreaks.tv/videos/rubyconf2008-reasons-behind-ruby",
          title: "Reasons behind Ruby",
        },
      ],
    })
    .addInfluence("pl+lisp", {
      refs: [
        {
          href: "https://archive.org/details/practicaljrubyon0000bini/page/3",
          title: "Practical JRuby on Rails Web 2.0 Projects: Bringing Ruby on Rails to Java",
        },
      ],
    })
    .addInfluence("pl+perl", {
      refs: [
        {
          href: "https://archive.org/details/practicaljrubyon0000bini/page/3",
          title: "Practical JRuby on Rails Web 2.0 Projects: Bringing Ruby on Rails to Java",
        },
      ],
    })
    .addInfluence("pl+smalltalk", {
      refs: [
        {
          href: "https://archive.org/details/practicaljrubyon0000bini/page/3",
          title: "Practical JRuby on Rails Web 2.0 Projects: Bringing Ruby on Rails to Java",
        },
      ],
    })
    .addPerson("person+yukihiro-matsumoto", { role: "designer" })
    .addLicenses(["lic+ruby"])
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+objects", "para+reflective"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+ruby-mri")
    .merge({
      name: "Ruby MRI",
      websites: [{ kind: "wikipedia", title: "Ruby MRI", href: "https://en.wikipedia.org/wiki/Ruby_MRI" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Ruby-logo-notext.png/120px-Ruby-logo-notext.png",
        },
      ],
    })
    .addLicenses(["lic+ruby", "lic+bsd-s", "lic+gpl"]);

  /**/

  g.buildPlang("pl+rubymotion")
    .merge({
      name: "RubyMotion",
      websites: [{ kind: "wikipedia", title: "RubyMotion", href: "https://en.wikipedia.org/wiki/RubyMotion" }],
    })
    .addLicenses(["lic+proprietary", "lic+eula"]);

  /**/
}
