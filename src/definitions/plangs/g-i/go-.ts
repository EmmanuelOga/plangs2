import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+go-")
    .merge({
      name: "Go!",
      websites: [{ kind: "wikipedia", title: "Go!", href: "https://en.wikipedia.org/wiki/Go!_(programming_language)" }],
      releases: [{ name: "Go!", version: "unknown", date: "2007-01-01", kind: "preview" }],
    })
    .addInfluence("pl+prolog", {
      refs: [
        {
          href: "https://web.archive.org/web/20100722010320/http://www.informationweek.com/news/software/web_services/showArticle.jhtml?articleID=221601351",
          title: "Google 'Go' Name Brings Accusations Of 'Evil'",
        },
      ],
    })
    .addPerson("person+keith-clark", { role: "designer" })
    .addLicenses(["lic+gpl-2"])
    .addParadigms(["para+multi", "para+concurrent", "para+logic", "para+functional", "para+imperative", "para+objects"])
    .addPlatforms(["platf+unix"])
    .addTypeSystems(["tsys+strong"]);

  /**/
}
