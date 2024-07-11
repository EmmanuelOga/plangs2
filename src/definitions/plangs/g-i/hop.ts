import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+hop")
    .merge({
      name: "Hop",
      websites: [{ kind: "wikipedia", title: "Hop", href: "https://en.wikipedia.org/wiki/Hop_(software)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Hop_logo.svg" }],
      releases: [{ name: "Hop", version: "2.4.2", date: "2013-01-01", kind: "stable" }],
    })
    .addInfluence("pl+scheme", {
      refs: [
        {
          href: "http://hop.inria.fr/usr/local/lib/hop/2.2.0/weblets/home/articles/hop-lang/article.html",
          title: "http://hop.inria.fr/usr/local/lib/hop/2.2.0/weblets/home/articles/hop-lang/article.html",
        },
      ],
    })
    .addPerson("person+manuel-serrano", { role: "designer" })
    .addLicenses(["lic+gpl-3"])
    .addParadigms(["para+multi"]);

  /**/
}
