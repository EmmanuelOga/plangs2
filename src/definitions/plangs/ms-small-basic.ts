import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ms-small-basic",
    "Microsoft Small Basic",
    {
      name: "Microsoft Small Basic",
      websites: [
        {
          kind: "wikipedia",
          title: "Microsoft Small Basic",
          href: "https://en.wikipedia.org/wiki/Microsoft_Small_Basic",
        },
        {
          kind: "homepage",
          title: "smallbasic-publicwebsite.azurewebsites.net",
          href: "https://smallbasic-publicwebsite.azurewebsites.net/",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Small_Basic.png/300px-Small_Basic.png",
        },
      ],
      references: {
        designed_by: [
          {
            href: "https://books.google.com/books?id=YXVVngEACAAJ",
            title: "Programming Games with Microsoft Small Basic",
          },
          {
            href: "https://techcommunity.microsoft.com/t5/small-basic-blog/featured-article-interviews-with-vijaye-raji-the-creator-of/ba-p/337729",
            title: "Featured Article: Interviews with Vijaye Raji, the creator of Small Basic",
          },
        ],
        license: [{ href: "https://github.com/sb/smallbasic-editor/blob/master/LICENSE", title: "SmallBasic" }],
      },
      releases: [
        { version: "unknown", date: "2008-10-23", kind: "first" },
        { version: "1.2", date: "2015-10-01", kind: "stable" },
      ],
      extensions: [".sb"],
    },
    {
      influenced: ["pl+objectlogo"],
      influences: ["pl+logo", "pl+qbasic", "pl+visual-basic-.net"],
      licenses: ["lic+mit"],
      paradigms: ["para+imperative", "para+objects", "para+structured"],
      platforms: ["platf+.net", "platf+web", "platf+win"],
      typeSystems: ["tsys+dynamic", "tsys+weak"],
    },
  );

  /**/
}
