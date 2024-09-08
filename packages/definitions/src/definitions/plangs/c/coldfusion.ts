import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+coldfusion", {
      images: [{ title: "Adobe ColdFusion", kind: "logo", url: "/images/plangs/c/coldfusion/main.png" }],
      name: "Adobe ColdFusion",
      description:
        "Adobe ColdFusion is a commercial rapid web-application development computing platform created by J. J. Allaire in 1995. (The programming language used with that platform is also commonly called ColdFusion, though is more accurately known as CFML.) ColdFusion was originally designed to make it easier to connect simple HTML pages to a database. By version 2 (1996) it had become a full platform that included an IDE in addition to a full scripting language.",
      websites: [
        { href: "https://adobe.com/products/coldfusion-family.html", title: "adobe.com/products/coldfusion-family.html", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/ColdFusion", title: "Adobe ColdFusion", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [],
    })
    .addPlatforms(["platf+cross"])
    .addTags(["tag+app", "tag+server"]);
}
