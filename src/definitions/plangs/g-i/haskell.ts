import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+haskell")
    .merge({
      name: "Haskell",
      websites: [
        { kind: "wikipedia", title: "Haskell", href: "https://en.wikipedia.org/wiki/Haskell_(programming_language)" },
        { kind: "wikipedia", title: "Haskell", href: "https://en.wikipedia.org/wiki/Haskell" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/4/4d/Logo_of_the_Haskell_programming_language.svg",
        },
      ],
      releases: [
        { name: "Haskell", version: "unknown", date: "2010-01-01", kind: "stable" },
        { name: "Haskell", version: "unknown", date: "2020-01-01", kind: "preview" },
      ],
    })
    .addDialects(["pl+elm", "pl+gofer", "pl+hume"])
    .addImplementations(["pl+glasgow-haskell-compiler", "pl+hugs", "pl+yhc"])
    .addInfluences([
      "pl+clean",
      "pl+ffp",
      "pl+fp",
      "pl+gofer",
      "pl+hope",
      "pl+id",
      "pl+iswim",
      "pl+kent-recursive-calculator",
      "pl+lisp",
      "pl+miranda",
      "pl+ml",
      "pl+sml",
      "pl+orwell",
      "pl+sasl",
      "pl+scheme",
      "pl+sisal",
      "pl+poly-slashml",
    ])
    .addInfluence("pl+raku", {
      refs: [
        {
          href: "http://pugs.blogs.com/pugs/2010/04/how-to-implement-perl-6-in-10.html",
          title: "How to Implement Perl 6 in '10",
        },
      ],
    })
    .addPerson("person+lennart-augustsson", { role: "designer" })
    .addPerson("person+paul-hudak", { role: "designer" })
    .addPerson("person+john-hughes", { role: "designer" })
    .addPerson("person+simon-peyton-jones", { role: "designer" })
    .addPerson("person+john-launchbury", { role: "designer" })
    .addPerson("person+erik-meijer", { role: "designer" })
    .addPerson("person+philip-wadler", { role: "designer" })
    .addParadigms(["para+functional"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

  /**/
}
