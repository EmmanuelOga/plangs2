import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+java",
    "Java",
    {
      name: "Java",
      websites: [
        { kind: "wikipedia", title: "Java", href: "https://en.wikipedia.org/wiki/Java_(programming_language)" },
        { kind: "homepage", title: "oracle.com/java/", href: "http://oracle.com/java/" },
        { kind: "homepage", title: "java.com", href: "http://java.com" },
        { kind: "homepage", title: "dev.java", href: "http://dev.java" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
      ],
      references: {
        first_appeared: [
          {
            href: "https://web.archive.org/web/20160314102242/http://www.forbes.com/sites/oracle/2015/05/20/javas-20-years-of-innovation/",
            title: "Java's 20 Years of Innovation",
          },
        ],
        influenced_by: [
          {
            href: "https://web.archive.org/web/20230929040943/https://books.google.com/books?id=0rUtBAAAQBAJ&pg=PAPA133#v=onepage&q&f=false",
            title: "Cracking The Java Programming Interview :: 2000+ Java Interview Que/Ans",
          },
          {
            href: "https://web.archive.org/web/20110319065438/http://www.barrycornelius.com/papers/java5/",
            title: "[1]",
          },
          {
            href: "https://web.archive.org/web/20140506214653/http://www.oracle.com/technetwork/java/langenv-140151.html",
            title: "The Java Language Environment",
          },
          {
            href: "https://web.archive.org/web/20110805051057/http://java.sun.com/docs/books/jls/second_edition/html/intro.doc.html#237601",
            title: "The Java Language Specification, 2nd Edition",
          },
          {
            href: "https://web.archive.org/web/20090105145818/http://www.computerworld.com.au/index.php/id%3B1422447371%3Bpp%3B3%3Bfp%3B4194304%3Bfpid%3B1",
            title: "The A-Z of Programming Languages: Modula-3",
          },
          {
            href: "https://web.archive.org/web/20201201054813/http://www.delphikingdom.com/asp/viewitem.asp?catalogid=1155",
            title: "Niklaus Wirth's lecture at the Polytechnic Museum in Moscow",
          },
          {
            href: "https://web.archive.org/web/20110713014816/http://cs.gmu.edu/~sean/stuff/java-objc.html",
            title: "[3]",
          },
          {
            href: "https://web.archive.org/web/20101229090912/http://www.fscript.org/prof/javapassport.pdf",
            title: "History of Java",
          },
          {
            href: "https://web.archive.org/web/20150716194245/http://queue.acm.org/detail.cfm?id=1017013",
            title: "A Conversation with James Gosling – ACM Queue",
          },
          {
            href: "https://web.archive.org/web/20120627043929/http://java.sun.com/docs/white/delegates.html",
            title: 'About Microsoft\'s "Delegates"',
          },
        ],
        influenced: [
          {
            href: "https://web.archive.org/web/20160205114946/http://chapel.cray.com/spec/spec-0.98.pdf",
            title: "Chapel spec (Acknowledgements)",
          },
          {
            href: "https://web.archive.org/web/20171009041815/http://gambaswiki.org/wiki/doc/intro?nh&l=en",
            title: "Gambas Documentation Introduction",
          },
          {
            href: "https://web.archive.org/web/20150213220946/http://www.infoworld.com/article/2610885/facebook-q-a--hack-brings-static-typing-to-php-world.html",
            title: "Facebook Q&A: Hack brings static typing to PHP world",
          },
        ],
      },
      releases: [{ version: "unknown", date: "1995-05-23", kind: "first" }],
      extensions: [".java", ".jmod"],
    },
    {
      influences: [
        "pl+ada",
        "pl+c",
        "pl+c-sharp",
        "pl+clu",
        "pl+cpp",
        "pl+eiffel",
        "pl+emerald",
        "pl+lisp",
        "pl+mdl",
        "pl+mesa",
        "pl+modula-3",
        "pl+oaklisp",
        "pl+oberon",
        "pl+object-pascal",
        "pl+objective-c",
        "pl+objective-cpp",
        "pl+pascal",
        "pl+simula67",
        "pl+smalltalk",
        "pl+strongtalk",
        "pl+ucsd-pascal",
      ],
      paradigms: [
        "para+class",
        "para+concurrent",
        "para+functional",
        "para+generic",
        "para+imperative",
        "para+multi",
        "para+objects",
        "para+reflection",
      ],
      people: [["person+james-gosling", "designer"]],
      typeSystems: ["tsys+manifest", "tsys+nominative", "tsys+safe", "tsys+static", "tsys+strong"],
    },
  );

  /**/
}