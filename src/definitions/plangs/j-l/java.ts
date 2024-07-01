import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+generic-java")
    .merge({
      name: "Generic Java",
      websites: [{ kind: "wikipedia", title: "Generic Java", href: "https://en.wikipedia.org/wiki/Generic_Java" }],
    })
    .addInfluences(["pl+pizza"]);

  /**/

  g.buildPlang("pl+java")
    .merge({
      name: "Java",
      websites: [
        { kind: "wikipedia", title: "Java", href: "https://en.wikipedia.org/wiki/Java_(programming_language)" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
      ],
    })
    .addInfluences([
      "pl+ada",
      "pl+c",
      "pl+cedar",
      "pl+emerald",
      "pl+clu",
      "pl+simula67",
      "pl+lisp",
      "pl+smalltalk",
      "pl+mdl",
      "pl+oaklisp",
      "pl+objective-cpp",
      "pl+strongtalk",
    ])
    .addInfluence("pl+cpp", {
      refs: [
        {
          href: "https://web.archive.org/web/20210527025512/https://books.google.com/books?id=0rUtBAAAQBAJ&pg=PA133",
          title: "Cracking The Java Programming Interview :: 2000+ Java Interview Que/Ans",
        },
        {
          href: "https://web.archive.org/web/20230929040943/https://books.google.com/books?id=0rUtBAAAQBAJ&pg=PAPA133#v=onepage&q&f=false",
          title: "Cracking The Java Programming Interview :: 2000+ Java Interview Que/Ans",
        },
      ],
    })
    .addInfluence("pl+c-sharp", {
      refs: [
        {
          href: "https://web.archive.org/web/20110319065438/http://www.barrycornelius.com/papers/java5/",
          title: "[1]",
        },
      ],
    })
    .addInfluence("pl+eiffel", {
      refs: [
        {
          href: "https://web.archive.org/web/20140506214653/http://www.oracle.com/technetwork/java/langenv-140151.html",
          title: "The Java Language Environment",
        },
      ],
    })
    .addInfluence("pl+mesa", {
      refs: [
        {
          href: "https://web.archive.org/web/20110805051057/http://java.sun.com/docs/books/jls/second_edition/html/intro.doc.html#237601",
          title: "The Java Language Specification, 2nd Edition",
        },
      ],
    })
    .addInfluence("pl+modula", {
      refs: [
        {
          href: "https://web.archive.org/web/20090105145818/http://www.computerworld.com.au/index.php/id%3B1422447371%3Bpp%3B3%3Bfp%3B4194304%3Bfpid%3B1",
          title: "The A-Z of Programming Languages: Modula-3",
        },
      ],
    })
    .addInfluence("pl+oberon", {
      refs: [
        {
          href: "https://web.archive.org/web/20201201054813/http://www.delphikingdom.com/asp/viewitem.asp?catalogid=1155",
          title: "Niklaus Wirth's lecture at the Polytechnic Museum in Moscow",
        },
      ],
    })
    .addInfluence("pl+objective-c", {
      refs: [
        {
          href: "https://web.archive.org/web/20110713014816/http://cs.gmu.edu/~sean/stuff/java-objc.html",
          title: "[3]",
        },
      ],
    })
    .addInfluence("pl+pascal", {
      refs: [
        {
          href: "https://web.archive.org/web/20101229090912/http://www.fscript.org/prof/javapassport.pdf",
          title: "History of Java",
        },
        {
          href: "https://web.archive.org/web/20120627043929/http://java.sun.com/docs/white/delegates.html",
          title: 'About Microsoft\'s "Delegates"',
        },
      ],
    })
    .addPerson("person+james-gosling", { role: "designer" })
    .addParadigms([
      "para+multi",
      "para+generic",
      "para+objects",
      "para+class",
      "para+functional",
      "para+imperative",
      "para+reflection",
      "para+concurrent",
    ])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+safe", "tsys+nominative", "tsys+manifest"]);

  /**/

  g.buildPlang("pl+java-ee")
    .merge({
      name: "Java EE",
      websites: [{ kind: "wikipedia", title: "Java EE", href: "https://en.wikipedia.org/wiki/Java_EE" }],
    })
    .addInfluences(["pl+gemstone"]);

  /**/

  g.buildPlang("pl+java-object-oriented-querying")
    .merge({
      name: "jOOQ",
      websites: [
        { kind: "wikipedia", title: "jOOQ", href: "https://en.wikipedia.org/wiki/Java_Object_Oriented_Querying" },
      ],
      releases: [{ name: "jOOQ", version: "3.19.2", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+sql"])
    .addLicenses(["lic+apache"])
    .addPlatforms(["platf+jvm"]);

  /**/

  g.buildPlang("pl+java-persistence-query")
    .merge({
      name: "JPQL",
      websites: [
        { kind: "wikipedia", title: "JPQL", href: "https://en.wikipedia.org/wiki/Java_Persistence_Query_Language" },
      ],
    })
    .addInfluences(["pl+sql"]);

  /**/

  g.buildPlang("pl+javafx-script")
    .merge({
      name: "JavaFX",
      websites: [
        { kind: "wikipedia", title: "JavaFX", href: "https://en.wikipedia.org/wiki/JavaFX_Script" },
        { kind: "homepage", title: "http://javafx.com/", href: "http://javafx.com/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/JavaFX_Logo.png/200px-JavaFX_Logo.png",
        },
      ],
      releases: [{ name: "JavaFX", version: "1.2", date: "2009-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+gpl"])
    .addPlatforms(["platf+jvm", "platf+cross-platform"]);

  /**/

  g.buildPlang("pl+join-java")
    .merge({
      name: "Join Java",
      websites: [
        { kind: "wikipedia", title: "Join Java", href: "https://en.wikipedia.org/wiki/Join_Java" },
        { kind: "homepage", title: "joinjava.unisa.edu.au", href: "http://joinjava.unisa.edu.au/" },
      ],
    })
    .addInfluences(["pl+java"])
    .addParadigms(["para+imperative", "para+reflective"]);

  /**/
}
