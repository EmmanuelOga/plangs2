import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+javascript")
    .merge({
      name: "JavaScript",
      websites: [
        { kind: "wikipedia", title: "JavaScript", href: "https://en.wikipedia.org/wiki/JavaScript" },
        {
          kind: "wikipedia",
          title: "Javascript",
          href: "https://en.wikipedia.org/wiki/Javascript_(programming_language)",
        },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/JavaScript_code.png/300px-JavaScript_code.png",
        },
      ],
      releases: [
        { name: "JavaScript", version: "unknown", date: "2023-01-01", kind: "stable" },
        { name: "JavaScript", version: "unknown", date: "2025-01-01", kind: "preview" },
      ],
      extensions: [".cjs", ".js", ".mjs[4]"],
    })
    .addDialects(["pl+assemblyscript"])
    .addImplementations(["pl+v8", "pl+javascriptcore", "pl+spidermonkey", "pl+chakra"])
    .addInfluences(["pl+c", "pl+xtalk"])
    .addInfluence("pl+hypertalk", {
      refs: [{ href: "https://archive.org/details/javascriptbible000good", title: "JavaScript Bible" }],
    })
    .addInfluence("pl+java", {
      refs: [
        {
          href: "https://web.archive.org/web/20201224233514/https://books.google.com/books?id=nneBa6-mWfgC&q=The+immediate+concern+at+Netscape+was+it+must+look+like+Java.&pg=PA141",
          title: "Coders at Work: Reflections on the Craft of Programming",
        },
      ],
    })
    .addInfluence("pl+scheme", {
      refs: [
        {
          href: "https://web.archive.org/web/20200227184037/https://speakingjs.com/es5/ch04.html",
          title: "Chapter 4. How JavaScript Was Created",
        },
      ],
    })
    .addInfluence("pl+self", {
      refs: [{ href: "https://brendaneich.com/2008/04/popularity/", title: "Popularity – Brendan Eich" }],
    })
    .addInfluence("pl+awk", {
      refs: [
        {
          href: "https://web.archive.org/web/20200829024704/https://www.youtube.com/watch?v=1EyRscXrehw",
          title: "Brendan Eich: An Introduction to JavaScript, JSConf 2010",
        },
      ],
    })
    .addInfluence("pl+python", {
      refs: [
        {
          href: "https://web.archive.org/web/20181226141121/http://2ality.com/2013/02/javascript-influences.html%0A",
          title: "Perl and Python influences in JavaScript",
        },
      ],
    })
    .addPerson("person+brendan-eich", { role: "designer" })
    .addParadigms(["para+multi", "para+event", "para+functional", "para+imperative", "para+objects"])
    .addTypeSystems(["tsys+dynamic", "tsys+weak", "tsys+duck"]);

  /**/

  g.buildPlang("pl+javascriptcore")
    .merge({
      name: "WebKit",
      websites: [{ kind: "wikipedia", title: "JavaScriptCore", href: "https://en.wikipedia.org/wiki/JavaScriptCore" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/05/WebKit_logo_%282023%29.svg" }],
    })
    .addLicenses(["lic+lgpl"])
    .addLicense("lic+bsd-s", {
      refs: [{ href: "https://webkit.org/licensing-webkit/", title: "Licensing WebKit | WebKit" }],
    });

  /**/
}
