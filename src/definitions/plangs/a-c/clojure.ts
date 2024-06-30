import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+clojure")
    .merge({
      name: "Clojure",
      websites: [
        { kind: "wikipedia", title: "Clojure", href: "https://en.wikipedia.org/wiki/Clojure" },
        { kind: "wikipedia", title: "Clojure", href: "https://en.wikipedia.org/wiki/Clojure_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Clojure_logo.svg" }],
      releases: [{ name: "Clojure", version: "1.11.2", date: "2024-01-01", kind: "stable" }],
      extensions: [".clj", ".cljc", ".cljd", ".cljr", ".cljs", ".edn"],
    })
    .addInfluences([
      "pl+armed-bear-common-lisp",
      "pl+common-lisp",
      "pl+java",
      "pl+ml",
      "pl+prolog",
      "pl+racket",
      "pl+ruby",
      "pl+scheme",
    ])
    .addInfluence("pl+cpp", {
      refs: [
        {
          href: "https://web.archive.org/web/20170111184835/http://www.codequarterly.com/2011/rich-hickey/",
          title: "Rich Hickey Q&A",
        },
      ],
    })
    .addInfluence("pl+c-sharp", {
      refs: [
        {
          href: "https://web.archive.org/web/20170111184835/http://www.codequarterly.com/2011/rich-hickey",
          title: "Rich Hickey Q&A by Michael Fogus",
        },
      ],
    })
    .addInfluence("pl+erlang", {
      refs: [
        {
          href: "http://radar.oreilly.com/2011/06/clojure-java-lisp-jvm.html",
          title: "Clojure: Lisp meets Java, with a side of Erlang - O'Reilly Radar",
        },
      ],
    })
    .addInfluence("pl+ms-visual-c-sharp", {
      refs: [
        {
          href: "https://web.archive.org/web/20170111184835/http://www.codequarterly.com/2011/rich-hickey",
          title: "Rich Hickey Q&A by Michael Fogus",
        },
      ],
    })
    .addPerson("person+rich-hickey", { role: "designer" })
    .addLicenses(["lic+eclipse-public"])
    .addParadigms(["para+multi"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
