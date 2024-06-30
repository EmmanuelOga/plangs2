import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+nim")
    .merge({
      name: "Nim",
      websites: [{ kind: "wikipedia", title: "Nim", href: "https://en.wikipedia.org/wiki/Nim_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Nim_logo.svg" }],
      releases: [{ version: "2.0.4", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+ada", "pl+c", "pl+lisp", "pl+pascal", "pl+python", "pl+oberon", "pl+rust", "pl+oberon-2"])
    .addInfluence("pl+cpp", {
      refs: [
        {
          href: "https://web.archive.org/web/20170711004631/https://nim-lang.org/faq.html",
          title: "FAQ Nim Programming Language",
        },
      ],
    })
    .addInfluence("pl+modula", {
      refs: [{ href: "http://nim-lang.org/question.html", title: "Frequently Asked Questions" }],
    })
    .addInfluence("pl+parasail", {
      refs: [{ href: "https://nim-lang.org/araq/destructors.html", title: "Nim without GC" }],
    })
    .addParadigms([
      "para+multi",
      "para+compiled",
      "para+concurrent",
      "para+imperative",
      "para+functional",
      "para+objects",
      "para+meta",
    ])
    .addPlatforms(["platf+ia-32", "platf+x86-64", "platf+arm", "platf+aarch64", "platf+risc-v"])
    .addPlatform("platf+cross-platform", {
      refs: [{ href: "https://nim-lang.org/install.html", title: "Install Nim" }],
    })
    .addTypeSystems(["tsys+inferred", "tsys+structural"])
    .addTypeSystem("tsys+static", { refs: [{ href: "https://nim-by-example.github.io/", title: "Nim by example" }] })
    .addTypeSystem("tsys+strong", {
      refs: [{ href: "https://ibob.github.io/slides/nimrodbg/#/", title: "Метапрограмиране с Nimrod" }],
    });

  /**/
}
