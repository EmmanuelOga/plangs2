import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+urbiscript")
    .merge({
      name: "urbiscript",
      websites: [{ kind: "wikipedia", title: "urbiscript", href: "https://en.wikipedia.org/wiki/Urbiscript" }],
      releases: [{ name: "urbiscript", version: "2.7.4", date: "2011-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+cpp"])
    .addInfluence("pl+self", {
      refs: [
        {
          href: "http://www.rfc1149.net/download/documents/scpr2008-08-Baillie.pdf",
          title: "The Urbi Universal Platform for Robotics",
        },
      ],
    })
    .addInfluence("pl+io", {
      refs: [
        {
          href: "http://www.rfc1149.net/download/documents/scpr2008-08-Baillie.pdf",
          title: "The Urbi Universal Platform for Robotics",
        },
      ],
    })
    .addPerson("person+jean-christophe-baillie", { role: "designer" })
    .addLicense("lic+bsd-s", {
      refs: [
        {
          href: "http://www.roboticmagazine.com/software-ai/urbi-the-open-source-operating-system-for-robots",
          title: "Urbi, the open source operating system for robots",
        },
      ],
    })
    .addParadigms(["para+multi", "para+objects", "para+event", "para+imperative", "para+functional", "para+reflective"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic"]);

  /**/
}
