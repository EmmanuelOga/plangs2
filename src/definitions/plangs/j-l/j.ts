import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+j",
    "J",
    {
      name: "J",
      websites: [
        { kind: "wikipedia", title: "J", href: "https://en.wikipedia.org/wiki/J_(programming_language)" },
        { kind: "homepage", title: "www.jsoftware.com", href: "http://www.jsoftware.com" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/J_%28programming_language%29_icon.png/121px-J_%28programming_language%29_icon.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1990-01-01", kind: "first" },
        { version: "9.5", date: "2023-12-20", kind: "stable" },
      ],
      references: {
        stable_release: [
          { href: "https://code.jsoftware.com/wiki/System/ReleaseNotes/J9.5", title: "Release Notes J9.5" },
        ],
        os: [{ href: "https://www.jsoftware.com/#/README", title: "Jsoftware" }],
        influenced: [
          {
            href: "https://traims.tumblr.com/post/33883718232/python-for-data-analysis-18-oct-2012-london",
            title: "Wes McKinney at 2012 meeting Python for Data Analysis",
          },
          {
            href: "http://doc.sccode.org/Reference/Adverbs.html",
            title: "SuperCollider documentation, Adverbs for Binary Operators",
          },
        ],
      },
    },
    {
      influences: ["pl+apl", "pl+fl"],
      licenses: ["lic+gpl"],
      paradigms: [
        "para+array",
        "para+class",
        "para+function",
        "para+functional",
        "para+objects",
        "para+prototypes",
        "para+tacit",
      ],
      people: [["person+roger-hui", { role: "designer" }]],
      platforms: [
        "platf+android",
        "platf+cross-platform",
        "platf+ios",
        "platf+linux",
        "platf+mac",
        "platf+rpi",
        "platf+win",
      ],
      typeSystems: ["tsys+dynamic"],
    },
  );
}
