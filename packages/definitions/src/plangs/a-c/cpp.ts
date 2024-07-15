import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+cpp")
    .merge({
      name: "C++",
      websites: [{ kind: "wikipedia", title: "C++", href: "https://en.wikipedia.org/wiki/C%2B%2B" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" }],
      releases: [
        { name: "C++", version: "unknown", date: "1488-01-01", kind: "stable" },
        { name: "C++", version: "unknown", date: "2023-01-01", kind: "preview" },
      ],
      extensions: [".c++", ".h++"],
    })
    .addInfluences(["pl+ada", "pl+c", "pl+ml", "pl+simula"])
    .addInfluence("pl+algol", {
      refs: [{ href: "https://doi.org/10.1145%2F234286.1057836", title: "10.1145/234286.1057836" }],
    })
    .addInfluence("pl+bcpl", {
      refs: [
        {
          href: "https://web.archive.org/web/20211230092718/https://www.youtube.com/watch?v=15QF2q66NhU",
          title: "C++20: Reaching for the Aims of C++ - Bjarne Stroustrup - CppCon 2021",
        },
      ],
    })
    .addInfluence("pl+clu", {
      refs: [
        { href: "https://doi.org/10.1145%2F234286.1057836", title: "10.1145/234286.1057836" },
        { href: "https://doi.org/10.1145/234286.1057836", title: "A History of C++: 1979--1991" },
      ],
    })
    .addInfluence("pl+f-sharp", {
      refs: [
        { href: "https://doi.org/10.1145%2F3386320", title: "Thriving in a crowded and changing world: C++ 2006–2020" },
      ],
    })
    .addInfluence("pl+mesa", {
      refs: [{ href: "https://doi.org/10.1145%2F234286.1057836", title: "10.1145/234286.1057836" }],
    })
    .addInfluence("pl+modula", {
      refs: [{ href: "https://doi.org/10.1145%2F234286.1057836", title: "10.1145/234286.1057836" }],
    })
    .addInfluence("pl+smalltalk", {
      refs: [{ href: "https://doi.org/10.1145%2F234286.1057836", title: "10.1145/234286.1057836" }],
    })
    .addPerson("person+bjarne-stroustrup", { role: "designer" })
    .addParadigms(["para+multi", "para+imperative", "para+functional", "para+objects", "para+generic", "para+modular"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+nominative", "tsys+inferred"]);

  /**/

  g.buildPlang("pl+cpp11")
    .merge({
      name: "C++11",
      websites: [{ kind: "wikipedia", title: "C++11", href: "https://en.wikipedia.org/wiki/C%2B%2B11" }],
    })
    .addInfluences(["pl+d"]);

  /**/

  g.buildPlang("pl+cpp14")
    .merge({
      name: "C++14",
      websites: [{ kind: "wikipedia", title: "C++14", href: "https://en.wikipedia.org/wiki/C%2B%2B14" }],
    })
    .addInfluences(["pl+d"]);

  /**/

  g.buildPlang("pl+cpp17")
    .merge({
      name: "C++17",
      websites: [{ kind: "wikipedia", title: "C++17", href: "https://en.wikipedia.org/wiki/C%2B%2B17" }],
    })
    .addInfluences(["pl+d"]);

  /**/

  g.buildPlang("pl+cpp20")
    .merge({
      name: "C++20",
      websites: [{ kind: "wikipedia", title: "C++20", href: "https://en.wikipedia.org/wiki/C%2B%2B20" }],
    })
    .addInfluences(["pl+d"]);

  /**/

  g.buildPlang("pl+cppbuilder")
    .merge({
      name: "C++Builder",
      websites: [{ kind: "wikipedia", title: "C++Builder", href: "https://en.wikipedia.org/wiki/C%2B%2BBuilder" }],
      releases: [{ name: "C++Builder", version: "12.1", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+delphi", "pl+cpp"])
    .addLicenses(["lic+trialware"])
    .addParadigms(["para+objects", "para+functional", "para+strongly"])
    .addPlatforms(["platf+x64"])
    .addPlatform("platf+win", {
      refs: [
        {
          href: "http://docwiki.embarcadero.com/RADStudio/Sydney/en/Installation_Notes#Operating_System_Requirements",
          title: "Installation Notes - Operating System Requirements",
        },
      ],
    });

  /**/

  g.buildPlang("pl+objective-cpp")
    .merge({
      name: "Objective-C",
      websites: [
        { kind: "wikipedia", title: "Objective-C++", href: "https://en.wikipedia.org/wiki/Objective-C%2B%2B" },
        {
          kind: "homepage",
          title: "developer.apple.com",
          href: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html",
        },
      ],
    })
    .addImplementations(["pl+clang", "pl+gcc"])
    .addInfluences(["pl+cpp", "pl+c", "pl+smalltalk"])
    .addPerson("person+brad-cox", { role: "designer" })
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+static", "tsys+dynamic", "tsys+weak"]);

  /**/
}
