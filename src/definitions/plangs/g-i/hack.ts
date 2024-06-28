import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+hack",
    "Hack",
    {
      name: "Hack",
      websites: [
        { kind: "wikipedia", title: "Hack", href: "https://en.wikipedia.org/wiki/Hack_(programming_language)" },
        { kind: "homepage", title: "hacklang.org", href: "https://hacklang.org/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Hack_%28programming_language%29_logo.svg",
        },
      ],
      references: {
        designed_by: [
          {
            href: "https://web.archive.org/web/20210301030703/http://www.serpentine.com/blog/2014/03/28/where-credit-belongs-for-hack/",
            title: "Where Credit Belongs for Hack",
          },
        ],
        license: [
          {
            href: "https://web.archive.org/web/20190107074308/https://github.com/facebook/hhvm/blob/master/hphp/hack/LICENSE%20",
            title: "facebook/hhvm: hhvm / hphp / hack / LICENSE",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "2014-01-01", kind: "first" },
        { version: "4.172", date: "2022-01-01", kind: "stable" },
      ],
    },
    {
      influences: ["pl+c-sharp", "pl+haskell", "pl+java", "pl+ocaml", "pl+php", "pl+scala"],
      licenses: ["lic+mit"],
      people: [
        ["person+alok-menghrajani", "designer"],
        ["person+drew-paroski", "designer"],
        ["person+julien-verlaguet", "designer"],
        ["person+meta-platforms", "developer"],
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+gradual", "tsys+static", "tsys+weak"],
    },
  );
}
