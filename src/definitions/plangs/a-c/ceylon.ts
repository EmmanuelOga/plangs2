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
      references: {
        filename_extensions: [
          {
            href: "http://ceylon-lang.org/documentation/1.2/spec/html_single/#compilationunitstructure",
            title: "The Ceylon Language: §4.1 Compilation unit structure",
          },
        ],
        influenced_by: [
          {
            href: "http://ceylon-lang.org/documentation/1.2/faq/#what_is_ceylon",
            title: "Frequently Asked Questions: What is Ceylon?",
          },
          { href: "https://gitter.im/ceylon/user?at=5660a7242cbea1d7054de9d9", title: "ceylon/user - Gitter" },
          { href: "https://gitter.im/ceylon/user?at=5660a90e5057376520db6f8b", title: "ceylon/user - Gitter" },
          {
            href: "https://jaxenter.com/top-10-ceylon-language-features-java-wishes-it-had-108003.html",
            title: "Top 10 Ceylon language features Java wishes it had",
          },
        ],
      },
      extensions: [".ceylon"],
    },
    {
      influences: ["pl+java", "pl+lisp", "pl+ml", "pl+scala", "pl+smalltalk", "pl+whiley"],
      licenses: ["lic+apache"],
      paradigms: ["para+objects"],
      people: [["person+gavin-king", "designer"]],
      platforms: ["platf+javascript", "platf+jvm"],
      typeSystems: ["tsys+safe", "tsys+static", "tsys+strong"],
    },
  );
}
