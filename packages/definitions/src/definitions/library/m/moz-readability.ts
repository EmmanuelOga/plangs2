import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.library
    .set("lib+moz-readability", {
      name: "Readability",
      description:
        "A standalone version of the readability library used for Firefox Reader View.",
      shortDesc:
        "A standalone version of the readability library used for Firefox Reader View.",
      extGithubPath: "mozilla/readability",
      extHomeURL:
        "https://support.mozilla.org/en-US/kb/firefox-reader-view-clutter-free-web-pages",
    })
    .relPlangs.add("pl+javascript", "pl+javascriptcore", "pl+typescript");
}
