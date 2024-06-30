import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+hack")
    .merge({
      name: "Hack",
      websites: [
        { kind: "wikipedia", title: "Hack", href: "https://en.wikipedia.org/wiki/Hack_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Hack_%28programming_language%29_logo.svg",
        },
      ],
      releases: [{ name: "Hack", version: "4.172", date: "2022-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+c-sharp", "pl+php", "pl+ocaml", "pl+scala", "pl+haskell"])
    .addInfluence("pl+java", {
      refs: [
        {
          href: "https://web.archive.org/web/20150213220946/http://www.infoworld.com/article/2610885/facebook-q-a--hack-brings-static-typing-to-php-world.html",
          title: "Facebook Q&A: Hack brings static typing to PHP world",
        },
      ],
    })
    .addPerson("person+meta-platforms", { role: "developer" })
    .addLicense("lic+mit", {
      refs: [
        {
          href: "https://web.archive.org/web/20190107074308/https://github.com/facebook/hhvm/blob/master/hphp/hack/LICENSE%20",
          title: "facebook/hhvm: hhvm / hphp / hack / LICENSE",
        },
      ],
    })
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+static", "tsys+dynamic", "tsys+weak", "tsys+gradual"]);

  /**/
}
