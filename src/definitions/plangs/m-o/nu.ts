import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+nu")
    .merge({
      name: "Nu",
      websites: [{ kind: "wikipedia", title: "Nu", href: "https://en.wikipedia.org/wiki/Nu_(programming_language)" }],
      releases: [{ name: "Nu", version: "2.3.0", date: "2019-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+lisp", "pl+objective-c", "pl+objective-cpp"])
    .addInfluence("pl+ruby", {
      refs: [
        { href: "https://web.archive.org/web/20181225131630/http://programming.nu/about%0A%20", title: "About Nu™" },
      ],
    })
    .addLicenses(["lic+apache"])
    .addParadigms(["para+structured", "para+imperative", "para+functional", "para+objects"])
    .addPlatforms(["platf+x86", "platf+mac"]);

  /**/
}
