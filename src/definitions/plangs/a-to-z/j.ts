import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+j",
    "J",
    {
      name: "J",
      websites: [
        { kind: "wikipedia", title: "J", href: "https://en.wikipedia.org/wiki/J_(programming_language)" },
        { kind: "homepage", title: "www.jsoftware.com", href: "http://www.jsoftware.com" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/J_%28programming_language%29_icon.png/121px-J_%28programming_language%29_icon.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1990-01-01", kind: "first" },
        { version: "9.5", date: "2023-12-20", kind: "stable" },
      ],
      references: {
        stable_release: [
          { href: "https://code.jsoftware.com/wiki/System/ReleaseNotes/J9.5", title: "Release Notes J9.5" },
        ],
        os: [{ href: "https://www.jsoftware.com/#/README", title: "Jsoftware" }],
        influenced: [
          {
            href: "https://traims.tumblr.com/post/33883718232/python-for-data-analysis-18-oct-2012-london",
            title: "Wes McKinney at 2012 meeting Python for Data Analysis",
          },
          {
            href: "http://doc.sccode.org/Reference/Adverbs.html",
            title: "SuperCollider documentation, Adverbs for Binary Operators",
          },
        ],
      },
    },
    {
      influenced: ["pl+apl", "pl+fl"],
      influences: ["pl+apl", "pl+fl", "pl+numpy", "pl+supercollider"],
      licenses: ["lic+gpl-3"],
      paradigms: [
        "para+array",
        "para+class-based",
        "para+function-level",
        "para+functional",
        "para+objects",
        "para+prototypes",
        "para+tacit",
      ],
      people: [["person+roger-hui", "designer"]],
      platforms: [
        "platf+android",
        "platf+cross-platform",
        "platf+ios",
        "platf+linux",
        "platf+macos",
        "platf+rpi",
        "platf+windows",
      ],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/

  lb.define(
    "pl+jq",
    "jq",
    {
      name: "jq",
      websites: [
        { kind: "wikipedia", title: "jq", href: "https://en.wikipedia.org/wiki/Jq_(programming_language)" },
        { kind: "repository", title: "jqlang.github.io/jq", href: "https://jqlang.github.io/jq" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Jq_logo.svg" }],
      releases: [
        { version: "unknown", date: "2012-08-21", kind: "first" },
        { version: "1.7.1", date: "2023-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [{ href: "https://github.com/jqlang/jq/releases/tag/jq-1.7.1", title: "Release jq 1.7.1" }],
      },
    },
    {
      implementations: ["pl+c", "pl+go", "pl+rust"],
      influenced: ["pl+icon"],
      licenses: ["lic+mit"],
      paradigms: ["para+functional", "para+json", "para+tacit"],
      people: [["person+stephen-dolan", "designer"]],
      platforms: ["platf+cross-platform"],
    },
  );

  /**/

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
        ["person+charles-oliver-nutter", "designer"],
        ["person+nick-sieger", "designer"],
        ["person+ola-bini", "designer"],
        ["person+thomas-enebo", "designer"],
      ],
      platforms: ["platf+jvm"],
    },
  );

  /**/

  lb.define(
    "pl+json",
    "JSON",
    { name: "JSON", websites: [{ kind: "wikipedia", title: "JSON", href: "https://en.wikipedia.org/wiki/JSON" }] },
    { influenced: ["pl+qml", "pl+rebol"] },
  );

  /**/
}
