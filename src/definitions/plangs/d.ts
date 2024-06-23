import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+d",
    "D programming language",
    {
      name: "D programming language",
      websites: [
        { kind: "wikipedia", title: "D", href: "https://en.wikipedia.org/wiki/D_(programming_language)" },
        { kind: "homepage", title: "dlang.org", href: "https://dlang.org" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/24/D_Programming_Language_logo.svg" },
      ],
      references: {
        first_appeared: [
          { href: "http://www.digitalmars.com/d/1.0/changelog1.html", title: "D Change Log to Nov 7 2005" },
        ],
        stable_release: [{ href: "https://dlang.org/changelog/2.108.0.html", title: "2.108.0" }],
        license: [
          {
            href: "http://forum.dlang.org/post/lndgp4$hiq$1@digitalmars.com",
            title: "dmd front end now switched to Boost license",
          },
          {
            href: "https://forum.dlang.org/post/oc8acc$1ei9$1@digitalmars.com",
            title: "dmd Backend converted to Boost License",
          },
          { href: "http://dlang.org/faq.html", title: "D 2.0 FAQ" },
        ],
        filename_extensions: [
          { href: "https://fileinfo.com/extension/d", title: "D Programming Language - Fileinfo.com" },
          { href: "https://dlang.org/dmd-windows.html", title: "D Programming Language - dlang.org" },
        ],
        influenced_by: [
          { href: "https://news.ycombinator.com/item?id=33846139", title: "On: Show HN: A nice C string API" },
          { href: "https://archive.org/details/dprogramminglang00alex", title: "The D programming language" },
        ],
        influenced: [
          {
            href: "https://developer.apple.com/swift/blog/?id=15",
            title: "Building assert() in Swift, Part 2: __FILE__ and __LINE__",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "2001-12-08", kind: "first" },
        { version: "2.108.0", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".d"],
    },
    {
      implementations: ["pl+reference-implementation"],
      influenced: ["pl+ada", "pl+c", "pl+c-plus-plus", "pl+eiffel", "pl+genie", "pl+python", "pl+ruby", "pl+vala"],
      influences: [
        "pl+basic",
        "pl+c",
        "pl+c-plus-plus",
        "pl+c-plus-plus11",
        "pl+c-plus-plus14",
        "pl+c-plus-plus17",
        "pl+c-plus-plus20",
        "pl+c-sharp",
        "pl+eiffel",
        "pl+genie",
        "pl+go",
        "pl+java",
        "pl+python",
        "pl+qore",
        "pl+swift",
        "pl+vala",
      ],
      licenses: ["lic+boost"],
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+objects"],
      people: [
        ["person+andrei-alexandrescu", "designer"],
        ["person+walter-bright", "designer"],
      ],
      platforms: ["platf+bsd", "platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  /**/
}
