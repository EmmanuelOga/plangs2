import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+erlang", {
      name: "Erlang",
      description:
        "Erlang (/ˈɜːrlæŋ/ UR-lang) is a general-purpose, concurrent, functional high-level programming language, and a garbage-collected runtime system. The term Erlang is used interchangeably with Erlang/OTP, or Open Telecom Platform (OTP), which consists of the Erlang runtime system, several ready-to-use components (OTP) mainly written in Erlang, and a set of design principles for Erlang programs.",
      firstAppeared: "1986-01-01",
      extensions: [".erl", ".hrl"],
      websites: [
        { href: "https://www.erlang.org/", title: "www.erlang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Erlang_(programming_language)", title: "Erlang", kind: "wikipedia" },
      ],
      releases: [{ version: "27.0.1", date: "2024-01-01" }],
      images: [{ kind: "logo", title: "Erlang", url: "/images/plangs/e/erlang/logo.png" }],
    })
    .addInfluencedBy(["pl+lisp", "pl+ml", "pl+prolog"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+concurrent", "paradigm+functional", "paradigm+multi", "paradigm+oop"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);
}
