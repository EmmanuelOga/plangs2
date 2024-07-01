import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+otcl").merge({
    name: "OTcl",
    websites: [{ kind: "wikipedia", title: "OTcl", href: "https://en.wikipedia.org/wiki/OTcl" }],
  });

  /**/

  g.buildPlang("pl+tcl")
    .merge({
      name: "Tcl",
      websites: [{ kind: "wikipedia", title: "Tcl", href: "https://en.wikipedia.org/wiki/Tcl" }],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Tcl-powered.svg" }],
      releases: [{ name: "Tcl", version: "8.6.14", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+awk", "pl+lisp"])
    .addPerson("person+john-ousterhout", { role: "designer" })
    .addLicense("lic+bsd-s", {
      refs: [{ href: "http://www.tcl-lang.org/software/tcltk/license.html", title: "Tcl/Tk License Terms" }],
    })
    .addParadigms(["para+multi", "para+event", "para+functional", "para+imperative", "para+objects"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+tk")
    .merge({
      name: "Tk",
      websites: [{ kind: "wikipedia", title: "Tk", href: "https://en.wikipedia.org/wiki/Tk_(software)" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Tcl-Tk_universal_scripting.svg",
        },
      ],
      releases: [{ name: "Tk", version: "8.6.13", date: "2022-01-01", kind: "stable" }],
    })
    .addLicense("lic+bsd-s", {
      refs: [{ href: "http://www.tcl.tk/software/tcltk/license.html", title: "Tcl/Tk Licensing Terms" }],
    })
    .addPlatforms(["platf+cross-platform"]);

  /**/

  g.buildPlang("pl+xotcl")
    .merge({
      name: "XOTcl",
      websites: [
        { kind: "wikipedia", title: "XOTcl", href: "https://en.wikipedia.org/wiki/XOTcl" },
        { kind: "homepage", title: "media.wu-wien.ac.at", href: "http://media.wu-wien.ac.at/" },
      ],
      releases: [{ name: "XOTcl", version: "1.6.8", date: "2014-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+tcl", "pl+otcl"])
    .addParadigms(["para+multi", "para+objects", "para+functional", "para+imperative", "para+event"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
