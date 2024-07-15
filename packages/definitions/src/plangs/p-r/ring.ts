import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+ring")
    .merge({
      name: "Ring",
      websites: [
        { kind: "wikipedia", title: "Ring", href: "https://en.wikipedia.org/wiki/Ring_(programming_language)" },
        { kind: "homepage", title: "http://ring-lang.net", href: "http://ring-lang.net" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Ringlogo_transparent.png/121px-Ringlogo_transparent.png",
        },
      ],
      releases: [{ name: "Ring", version: "1.20", date: "2024-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+c"])
    .addInfluences(["pl+lua", "pl+c", "pl+c-sharp", "pl+basic", "pl+xbase"])
    .addInfluence("pl+python", {
      refs: [
        {
          href: "https://web.archive.org/web/20181225175312/http://ring-lang.sourceforge.net/doc1.6/introduction.html#ring-and-other-languages",
          title: "Ring and other languages",
        },
      ],
    })
    .addInfluence("pl+qml", {
      refs: [
        {
          href: "http://ring-lang.sourceforge.net/doc1.6/introduction.html#ring-and-other-languages",
          title: "The Ring programming language and other languages",
        },
      ],
    })
    .addInfluence("pl+ruby", {
      refs: [
        {
          href: "https://web.archive.org/web/20181225175312/http://ring-lang.sourceforge.net/doc1.6/introduction.html#ring-and-other-languages",
          title: "Ring and other languages",
        },
      ],
    })
    .addPerson("person+mahmoud-samir-fayed", {
      role: "designer",
      refs: [
        {
          href: "https://link.springer.com/content/pdf/bbm%3A978-1-4842-5833-0%2F1.pdf",
          title: "A Dialogue with Mahmoud Fayed",
        },
      ],
    })
    .addLicenses(["lic+mit"])
    .addParadigms([
      "para+multi",
      "para+objects",
      "para+imperative",
      "para+functional",
      "para+reflective",
      "para+dec",
      "para+natural",
    ])
    .addPlatforms(["platf+win", "platf+linux", "platf+mac"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
