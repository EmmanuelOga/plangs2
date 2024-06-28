import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+clean",
    "Clean",
    {
      name: "Clean",
      websites: [
        { kind: "wikipedia", title: "Clean", href: "https://en.wikipedia.org/wiki/Clean_(programming_language)" },
        { kind: "homepage", title: "clean.cs.ru.nl", href: "http://clean.cs.ru.nl" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/4/4b/Clean_3.0_%28programming_language%29_logo.svg",
        },
      ],
      releases: [
        { version: "unknown", date: "1987-01-01", kind: "first" },
        { version: "3.1", date: "2022-01-05", kind: "stable" },
      ],
      references: {
        license: [{ href: "https://clean.cs.ru.nl/Download_Clean#Clean_3.0_License", title: "Download Clean" }],
        influenced: [
          {
            href: "http://docs.idris-lang.org/en/latest/reference/uniqueness-types.html",
            title: "Idris - Uniqueness Types",
          },
        ],
      },
      extensions: [".icl", ".dcl", ".abc"],
    },
    {
      influences: ["pl+haskell", "pl+iswim", "pl+miranda"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+functional"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+static", "tsys+strong"],
    },
  );
}
