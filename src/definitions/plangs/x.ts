import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+xaml",
    "XAML",
    { name: "XAML", websites: [{ kind: "wikipedia", title: "XAML", href: "https://en.wikipedia.org/wiki/XAML" }] },
    { influenced: ["pl+qml"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+xod",
    "XOD",
    {
      name: "XOD",
      websites: [
        { kind: "wikipedia", title: "XOD", href: "https://en.wikipedia.org/wiki/XOD_(programming_language)" },
        { kind: "homepage", title: "xod.io", href: "http://xod.io" },
      ],
      releases: [
        { version: "unknown", date: "2016-01-01", kind: "first" },
        { version: "0.38.0", date: "2021-03-12", kind: "stable" },
      ],
    },
    {
      licenses: ["lic+gnu-affero-gpl"],
      paradigms: ["para+dataflow", "para+declarative", "para+functional", "para+visual"],
      platforms: ["platf+arduino", "platf+rpi"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+xojo",
    "Xojo",
    {
      name: "Xojo",
      websites: [
        { kind: "wikipedia", title: "Xojo", href: "https://en.wikipedia.org/wiki/Xojo" },
        { kind: "homepage", title: "xojo.com", href: "http://xojo.com" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/31/Logomark_Xojo_Company.svg" }],
      references: { stable_release: [{ href: "https://www.xojo.com/download/", title: "Xojo: Downloads" }] },
      releases: [{ version: "3.1", date: "2023-10-25", kind: "stable" }],
    },
    { influenced: ["pl+basic", "pl+visual-basic"], licenses: ["lic+freemium"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+xpath",
    "XPath",
    { name: "XPath", websites: [{ kind: "wikipedia", title: "XPath", href: "https://en.wikipedia.org/wiki/XPath" }] },
    { influenced: ["pl+xquery"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+xquery",
    "XQuery",
    {
      name: "XQuery",
      websites: [
        { kind: "wikipedia", title: "XQuery", href: "https://en.wikipedia.org/wiki/XQuery" },
        { kind: "homepage", title: "www.w3.org/XML/Query/", href: "http://www.w3.org/XML/Query/" },
      ],
      releases: [
        { version: "unknown", date: "2007-01-01", kind: "first" },
        { version: "unknown", date: "2017-03-21", kind: "stable" },
      ],
      references: {
        stable_release: [{ href: "http://www.w3.org/TR/xquery-31/", title: "XQuery 3.1 Recommendation" }],
        typing_discipline: [
          {
            href: "https://www.w3.org/TR/xquery-31/#id-static-typing-feature",
            title: "XQuery 3.1: An XML Query Language",
          },
          { href: "https://technet.microsoft.com/en-us/library/ms190938.aspx", title: "XQuery and Static Typing" },
        ],
      },
      extensions: [".xq", ".xql", ".xqm", ".xqy", ".xquery"],
    },
    {
      influences: ["pl+sql", "pl+xpath", "pl+xslt"],
      paradigms: ["para+declarative", "para+functional", "para+modular"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+xsb",
    "XSB",
    {
      name: "XSB",
      websites: [
        { kind: "wikipedia", title: "XSB", href: "https://en.wikipedia.org/wiki/XSB" },
        { kind: "homepage", title: "Sourceforge.net", href: "https://xsb.sourceforge.net/" },
      ],
      releases: [{ version: "5.0", date: "2022-05-12", kind: "stable" }],
      extensions: [".P"],
    },
    {
      influences: ["pl+prolog"],
      paradigms: ["para+logic"],
      people: [
        ["person+david-s-warren", "designer"],
        ["person+kostis-sagonas", "designer"],
        ["person+terrance-swift", "designer"],
      ],
      platforms: ["platf+cross-platform"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+xslt",
    "XSLT",
    {
      name: "XSLT",
      websites: [
        { kind: "wikipedia", title: "XSLT", href: "https://en.wikipedia.org/wiki/XSLT" },
        { kind: "homepage", title: "www.w3.org/TR/xslt-30/", href: "https://www.w3.org/TR/xslt-30/" },
      ],
      releases: [
        { version: "unknown", date: "1998-01-01", kind: "first" },
        { version: "3.0", date: "2017-06-08", kind: "stable" },
      ],
      extensions: [".xslt"],
    },
    {
      implementations: ["pl+libxslt", "pl+saxon", "pl+xalan"],
      influenced: ["pl+boomerang", "pl+xquery"],
      influences: ["pl+dsssl"],
      paradigms: ["para+declarative"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+xtend",
    "Xtend",
    {
      name: "Xtend",
      websites: [
        { kind: "wikipedia", title: "Xtend", href: "https://en.wikipedia.org/wiki/Xtend" },
        { kind: "homepage", title: "eclipse.dev/Xtext/xtend/", href: "https://eclipse.dev/Xtext/xtend/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Xtend-logo-c.png" }],
      releases: [
        { version: "unknown", date: "2011-01-01", kind: "first" },
        { version: "2.25.0", date: "2021-03-02", kind: "stable" },
      ],
      references: {
        stable_release: [{ href: "https://www.eclipse.org/xtend/releasenotes.html", title: "Xtend - Release Notes" }],
      },
    },
    {
      influences: ["pl+groovy", "pl+java", "pl+scala", "pl+smalltalk"],
      licenses: ["lic+eclipse-public"],
      paradigms: ["para+functional", "para+imperative", "para+objects"],
      people: [
        ["person+sebastian-zarnekow", "designer"],
        ["person+sven-efftinge", "designer"],
      ],
      platforms: ["platf+cross-platform", "platf+jvm"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );
}
