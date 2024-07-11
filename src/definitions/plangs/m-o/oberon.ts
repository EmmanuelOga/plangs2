import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+active-oberon")
    .merge({
      name: "Active Oberon",
      websites: [{ kind: "wikipedia", title: "Active Oberon", href: "https://en.wikipedia.org/wiki/Active_Oberon" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/9/97/Oberon_programming_language_logo.svg",
        },
      ],
    })
    .addImplementations(["pl+oberon"])
    .addInfluences(["pl+oberon", "pl+object-oberon", "pl+oberon-2"])
    .addPerson("person+niklaus-wirth", { role: "designer" })
    .addPerson("person+jurg-gutknecht", { role: "designer" })
    .addParadigms(["para+imperative", "para+structured", "para+modular", "para+objects", "para+concurrent"])
    .addPlatforms(["platf+ia-32", "platf+amd64"])
    .addTypeSystems(["tsys+strong", "tsys+static", "tsys+dynamic"]);

  /**/

  g.buildPlang("pl+oberon")
    .merge({
      name: "Oberon",
      websites: [
        { kind: "wikipedia", title: "Oberon", href: "https://en.wikipedia.org/wiki/Oberon_(programming_language)" },
        {
          kind: "wikipedia",
          title: "Oberon",
          href: "https://en.wikipedia.org/wiki/Oberon_(programming_language)#Oberon-07",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/9/97/Oberon_programming_language_logo.svg",
        },
      ],
      releases: [{ name: "Oberon", version: "unknown", date: "2020-01-01", kind: "stable" }],
    })
    .addDialects(["pl+active-oberon", "pl+oberon-2", "pl+obliq"])
    .addInfluences(["pl+modula", "pl+oberon-2"])
    .addParadigms(["para+imperative", "para+structured", "para+modular", "para+objects"])
    .addPlatforms([
      "platf+arm",
      "platf+ia-32",
      "platf+x86-64",
      "platf+win",
      "platf+linux",
      "platf+atari",
      "platf+amiga",
    ])
    .addTypeSystems(["tsys+strong", "tsys+static", "tsys+dynamic"]);

  /**/

  g.buildPlang("pl+oberon-2")
    .merge({
      name: "Oberon-2",
      websites: [{ kind: "wikipedia", title: "Oberon-2", href: "https://en.wikipedia.org/wiki/Oberon-2" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/9/97/Oberon_programming_language_logo.svg",
        },
      ],
    })
    .addInfluences(["pl+oberon", "pl+modula", "pl+object-oberon"])
    .addPerson("person+niklaus-wirth", { role: "designer" })
    .addParadigms(["para+imperative", "para+structured", "para+modular", "para+objects"])
    .addPlatforms(["platf+ia-32", "platf+x86-64", "platf+win", "platf+linux", "platf+mac"])
    .addTypeSystems(["tsys+strong", "tsys+static", "tsys+dynamic"]);

  /**/

  g.buildPlang("pl+object-oberon")
    .merge({
      name: "Object Oberon",
      websites: [{ kind: "wikipedia", title: "Object Oberon", href: "https://en.wikipedia.org/wiki/Object_Oberon" }],
    })
    .addImplementations(["pl+oberon"])
    .addInfluences(["pl+modula", "pl+oberon"])
    .addPerson("person+hanspeter-mossenbock", { role: "developer" })
    .addParadigms(["para+imperative", "para+structured", "para+modular", "para+objects"])
    .addTypeSystems(["tsys+strong", "tsys+static", "tsys+dynamic"]);

  /**/
}
