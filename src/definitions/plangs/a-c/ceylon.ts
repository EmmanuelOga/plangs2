import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+ceylon")
    .merge({
      name: "Ceylon",
      websites: [
        { kind: "wikipedia", title: "Ceylon", href: "https://en.wikipedia.org/wiki/Ceylon_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Ceylon_%28programming_language%29_logo.png/121px-Ceylon_%28programming_language%29_logo.png",
        },
      ],
      releases: [{ version: "1.3.3", date: "2017-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+scala", "pl+smalltalk"])
    .addInfluence("pl+java", {
      refs: [
        {
          href: "http://ceylon-lang.org/documentation/1.2/faq/#what_is_ceylon",
          title: "Frequently Asked Questions: What is Ceylon?",
        },
      ],
    })
    .addInfluence("pl+ml", {
      refs: [{ href: "https://gitter.im/ceylon/user?at=5660a7242cbea1d7054de9d9", title: "ceylon/user - Gitter" }],
    })
    .addInfluence("pl+lisp", {
      refs: [{ href: "https://gitter.im/ceylon/user?at=5660a90e5057376520db6f8b", title: "ceylon/user - Gitter" }],
    })
    .addInfluence("pl+whiley", {
      refs: [
        {
          href: "https://jaxenter.com/top-10-ceylon-language-features-java-wishes-it-had-108003.html",
          title: "Top 10 Ceylon language features Java wishes it had",
        },
      ],
    })
    .addLicenses(["lic+apache"])
    .addParadigms(["para+objects"])
    .addPlatforms(["platf+jvm", "platf+javascript"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+safe"]);

  /**/
}
