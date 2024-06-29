import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+javascript",
    "JavaScript",
    {
      name: "JavaScript",
      websites: [
        { kind: "wikipedia", title: "JavaScript", href: "https://en.wikipedia.org/wiki/JavaScript" },
        {
          kind: "wikipedia",
          title: "Javascript",
          href: "https://en.wikipedia.org/wiki/Javascript_(programming_language)",
        },
        {
          kind: "homepage",
          title: "ecma-international.org/publications-and-standards/standards/ecma-262/",
          href: "https://ecma-international.org/publications-and-standards/standards/ecma-262/",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/JavaScript_code.png/300px-JavaScript_code.png",
        },
      ],
      references: {
        first_appeared: [
          {
            href: "https://web.archive.org/web/20070916144913/https://wp.netscape.com/newsref/pr/newsrelease67.html",
            title:
              "Netscape and Sun announce JavaScript, the Open, Cross-platform Object Scripting Language for Enterprise Networks and the Internet",
          },
        ],
        stable_release: [
          { href: "https://262.ecma-international.org/14.0/", title: "ECMAScript® 2023 Language Specification" },
        ],
        preview_release: [{ href: "https://tc39.es/ecma262/", title: "ECMAScript® 2025 Language Specification" }],
        influenced_by: [
          {
            href: "https://web.archive.org/web/20201224233514/https://books.google.com/books?id=nneBa6-mWfgC&q=The+immediate+concern+at+Netscape+was+it+must+look+like+Java.&pg=PA141",
            title: "Coders at Work: Reflections on the Craft of Programming",
          },
          {
            href: "https://web.archive.org/web/20200227184037/https://speakingjs.com/es5/ch04.html",
            title: "Chapter 4. How JavaScript Was Created",
          },
          { href: "https://brendaneich.com/2008/04/popularity/", title: "Popularity – Brendan Eich" },
          {
            href: "https://web.archive.org/web/20200829024704/https://www.youtube.com/watch?v=1EyRscXrehw",
            title: "Brendan Eich: An Introduction to JavaScript, JSConf 2010",
          },
          { href: "https://archive.org/details/javascriptbible000good", title: "JavaScript Bible" },
        ],
      },
      releases: [
        { version: "unknown", date: "1995-12-04", kind: "first" },
        { version: "unknown", date: "2023-01-01", kind: "stable" },
        { version: "unknown", date: "2025-01-01", kind: "preview" },
      ],
      extensions: [],
    },
    {
      dialects: ["pl+assemblyscript"],
      implementations: ["pl+chakra", "pl+javascriptcore", "pl+spidermonkey", "pl+v8"],
      influences: ["pl+awk", "pl+c", "pl+hypertalk", "pl+java", "pl+lisp", "pl+python", "pl+scheme", "pl+self"],
      paradigms: ["para+event", "para+functional", "para+imperative", "para+multi", "para+objects"],
      people: [["person+brendan-eich", { role: "designer" }]],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+weak"],
    },
  );
}
