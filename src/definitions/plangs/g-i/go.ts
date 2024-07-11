import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+go")
    .merge({
      name: "Go",
      websites: [{ kind: "wikipedia", title: "Go", href: "https://en.wikipedia.org/wiki/Go_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" }],
      releases: [{ name: "Go", version: "1.22.4", date: "2024-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+assembly", "pl+cpp"])
    .addInfluences([
      "pl+alef",
      "pl+c",
      "pl+d",
      "pl+dis-virtual-machine",
      "pl+erlang",
      "pl+limbo",
      "pl+modula",
      "pl+newsqueak",
      "pl+oberon",
      "pl+oberon-2",
      "pl+occam",
      "pl+python",
      "pl+smalltalk",
    ])
    .addInfluence("pl+bcpl", {
      refs: [{ href: "https://talks.golang.org/2014/hellogophers.slide#21", title: "Hello Gophers" }],
    })
    .addPerson("person+robert-griesemer", { role: "designer" })
    .addPerson("person+rob-pike", { role: "designer" })
    .addPerson("person+ken-thompson", {
      role: "designer",
      refs: [{ href: "https://golang.org/doc/go_faq.html", title: "Language Design FAQ" }],
    })
    .addLicense("lic+bsd-c", { refs: [{ href: "https://golang.org/LICENSE", title: "Text file LICENSE" }] })
    .addLicense("lic+patents", { refs: [{ href: "https://golang.org/PATENTS", title: "Additional IP Rights Grant" }] })
    .addParadigms(["para+multi", "para+concurrent", "para+imperative"])
    .addParadigm("para+functional", {
      refs: [{ href: "https://go.dev/doc/codewalk/functions/", title: "Codewalk: First-Class Functions in Go" }],
    })
    .addParadigm("para+objects", {
      refs: [
        {
          href: "https://golang.org/doc/faq#Is_Go_an_object-oriented_language",
          title: "Is Go an object-oriented language?",
        },
      ],
    })
    .addPlatforms(["platf+linux", "platf+mac", "platf+win"])
    .addPlatform("platf+bsd", { refs: [{ href: "http://ports.su/lang/go", title: "lang/go: go-1.4" }] })
    .addPlatform("platf+plan9", { refs: [{ href: "http://go-lang.cat-v.org/os-ports", title: "Go Porting Efforts" }] })
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+nominative"])
    .addTypeSystem("tsys+strong", {
      refs: [
        {
          href: "https://go.dev/ref/spec#Introduction",
          title: "The Go Programming Language Specification - the Go Programming Language",
        },
      ],
    })
    .addTypeSystem("tsys+structural", {
      refs: [
        {
          href: "https://golang.org/doc/faq#implements_interface",
          title: 'Why doesn\'t Go have "implements" declarations?',
        },
      ],
    });

  /**/
}
