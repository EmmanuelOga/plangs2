import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+go",
    "Go",
    {
      name: "Go",
      websites: [
        { kind: "wikipedia", title: "Go", href: "https://en.wikipedia.org/wiki/Go_(programming_language)" },
        { kind: "homepage", title: "go.dev", href: "https://go.dev" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" }],
      references: {
        paradigm: [
          { href: "https://go.dev/doc/codewalk/functions/", title: "Codewalk: First-Class Functions in Go" },
          {
            href: "https://golang.org/doc/faq#Is_Go_an_object-oriented_language",
            title: "Is Go an object-oriented language?",
          },
          { href: "https://talks.golang.org/2012/chat.slide#5", title: "Go: code that grows with grace" },
        ],
        designed_by: [{ href: "https://golang.org/doc/go_faq.html", title: "Language Design FAQ" }],
        developer: [{ href: "https://golang.org/LICENSE", title: "Text file LICENSE" }],
        typing_discipline: [
          {
            href: "https://go.dev/ref/spec#Introduction",
            title: "The Go Programming Language Specification - the Go Programming Language",
          },
          {
            href: "https://golang.org/doc/faq#implements_interface",
            title: 'Why doesn\'t Go have "implements" declarations?',
          },
          {
            href: "https://web.archive.org/web/20220407025913/https://twitter.com/rob_pike/status/546973312543227904",
            title: "Rob Pike on Twitter",
          },
        ],
        os: [
          { href: "http://ports.su/lang/go", title: "lang/go: go-1.4" },
          { href: "http://go-lang.cat-v.org/os-ports", title: "Go Porting Efforts" },
        ],
        license: [
          { href: "https://golang.org/LICENSE", title: "Text file LICENSE" },
          { href: "https://golang.org/PATENTS", title: "Additional IP Rights Grant" },
        ],
      },
      releases: [
        { version: "unknown", date: "2009-11-10", kind: "first" },
        { version: "1.22.4", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".go"],
    },
    {
      implementations: ["pl+assembly", "pl+c-plus-plus"],
      influenced: [
        "pl+alef",
        "pl+ballerina",
        "pl+bcpl",
        "pl+c",
        "pl+crystal",
        "pl+d",
        "pl+erlang",
        "pl+flix",
        "pl+gleam",
        "pl+limbo",
        "pl+modula",
        "pl+newsqueak",
        "pl+oberon",
        "pl+oberon-2",
        "pl+occam",
        "pl+pascal",
        "pl+python",
        "pl+smalltalk",
        "pl+v",
      ],
      influences: [
        "pl+active-oberon",
        "pl+alef",
        "pl+apl",
        "pl+bcpl",
        "pl+c",
        "pl+communicating-sequential-processes",
        "pl+crystal",
        "pl+limbo",
        "pl+modula",
        "pl+modula-2",
        "pl+newsqueak",
        "pl+oberon",
        "pl+oberon-2",
        "pl+occam",
        "pl+pascal",
        "pl+smalltalk",
        "pl+v",
      ],
      licenses: ["lic+bsd-c", "lic+patents"],
      paradigms: ["para+concurrent", "para+functional", "para+imperative", "para+multi", "para+objects"],
      people: [
        ["person+ken-thompson", "designer"],
        ["person+rob-pike", "designer"],
        ["person+robert-griesemer", "designer"],
      ],
      platforms: ["platf+bsd", "platf+linux", "platf+mac", "platf+plan9", "platf+win"],
      typeSystems: ["tsys+inferred", "tsys+nominative", "tsys+static", "tsys+strong", "tsys+structural"],
    },
  );

  /**/
}
