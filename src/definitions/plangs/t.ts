import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+tcl",
    "Tcl",
    {
      name: "Tcl",
      websites: [
        { kind: "wikipedia", title: "Tcl", href: "https://en.wikipedia.org/wiki/Tcl" },
        { kind: "homepage", title: "www.tcl-lang.org", href: "https://www.tcl-lang.org" },
        { kind: "homepage", title: "www.tcl.tk", href: "https://www.tcl.tk" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Tcl-powered.svg" }],
      references: {
        developer: [{ href: "http://www.tcl.tk/community/coreteam", title: "Tcl/Tk Core Development" }],
        stable_release: [
          {
            href: "https://sourceforge.net/p/tcl/mailman/message/58743251/",
            title: "[TCLCORE] Tcl/Tk 8.6.14 RELEASED",
          },
        ],
        license: [{ href: "http://www.tcl-lang.org/software/tcltk/license.html", title: "Tcl/Tk License Terms" }],
        filename_extensions: [
          { href: "http://docs.activestate.com/tdk/4.1/Compiler.html", title: "Tcl Dev Kit – Compiler" },
        ],
        influenced: [
          {
            href: "http://itc.conversationsnetwork.org/shows/detail3298.html",
            title:
              "PHP on Hormones – history of PHP presentation by Rasmus Lerdorf given at the MySQL Conference in Santa Clara, California",
          },
          {
            href: "https://web.archive.org/web/20081225093003/http://blogs.msdn.com/powershell/archive/2008/05/25/powershell-and-wpf-wtf.aspx",
            title: "PowerShell and WPF: WTF",
          },
          { href: "https://fossil-scm.org/home/doc/trunk/www/th1.md", title: "TH1 Scripts" },
        ],
      },
      releases: [
        { version: "unknown", date: "1988-01-01", kind: "first" },
        { version: "8.6.14", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".tcl", ".tbc"],
    },
    {
      influenced: ["pl+lisp", "pl+xotcl", "pl+php", "pl+awk", "pl+tea", "pl+powershell"],
      influences: ["pl+awk", "pl+lisp", "pl+php", "pl+powershell", "pl+tea"],
      licenses: ["lic+bsd"],
      paradigms: ["para+multi-paradigm", "para+event-driven", "para+functional", "para+imperative", "para+objects"],
      people: [["person+john-ousterhout", "designer"]],
      typeSystems: ["tsys+dynamic"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+tom",
    "Tom",
    {
      name: "Tom",
      websites: [
        { kind: "wikipedia", title: "Tom", href: "https://en.wikipedia.org/wiki/Tom_(pattern_matching_language)" },
        { kind: "homepage", title: "tom.loria.fr", href: "http://tom.loria.fr" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/5/54/Tom_%28pattern_matching_language%29_logo.png",
        },
      ],
      references: {
        stable_release: [
          {
            href: "https://gforge.inria.fr/frs/?group_id=78&release_id=7940",
            title: "https://gforge.inria.fr/frs/?group_id=78&release_id=7940",
          },
        ],
      },
      releases: [{ version: "2.10", date: "2013-03-21", kind: "stable" }],
    },
    { licenses: ["lic+gpl", "lic+bsds"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+turbo-pascal",
    "Turbo Pascal",
    {
      name: "Turbo Pascal",
      websites: [{ kind: "wikipedia", title: "Turbo Pascal", href: "https://en.wikipedia.org/wiki/Turbo_Pascal" }],
    },
    { dialects: ["pl+object-pascal", "pl+pascal"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+txl",
    "TXL",
    {
      name: "TXL",
      websites: [
        { kind: "wikipedia", title: "TXL", href: "https://en.wikipedia.org/wiki/TXL_(programming_language)" },
        { kind: "homepage", title: "www.txl.ca", href: "https://www.txl.ca/" },
      ],
    },
    { paradigms: ["para+pattern-matching", "para+term-rewriting"], people: [["person+james-cordy", "designer"]] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+typescript",
    "TypeScript",
    {
      name: "TypeScript",
      websites: [
        { kind: "wikipedia", title: "TypeScript", href: "https://en.wikipedia.org/wiki/TypeScript" },
        { kind: "homepage", title: "www.typescriptlang.org", href: "https://www.typescriptlang.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg" }],
      references: {
        first_appeared: [
          {
            href: "https://web.archive.org/web/20150403224440/https://typescript.codeplex.com/releases/view/95554",
            title: "TypeScript",
          },
        ],
        stable_release: [
          {
            href: "https://github.com/microsoft/TypeScript/releases/tag/v5.4.2",
            title: "Release TypeScript 5.4 microsoft/TypeScript",
          },
        ],
        typing_discipline: [
          { href: "https://www.typescriptlang.org/docs/handbook/type-compatibility.html", title: "Type Compatibility" },
        ],
        influenced_by: [
          { href: "https://fsharp.org/history/hopl-final/hopl-fsharp.pdf", title: "The Early History of F#" },
          {
            href: "https://javascript.plainenglish.io/how-actionscript-foreshadowed-typescript-149cdb764de9",
            title: "How ActionScript foreshadowed TypeScript",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "2012-10-01", kind: "first" },
        { version: "5.4.2", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".ts", ".tsx", ".mts", ".cts"],
    },
    {
      dialects: ["pl+assemblyscript"],
      influenced: ["pl+bosque", "pl+assemblyscript", "pl+arkts", "pl+javascript", "pl+dart", "pl+actionscript"],
      influences: [
        "pl+c-sharp",
        "pl+f-sharp",
        "pl+java",
        "pl+javascript",
        "pl+actionscript",
        "pl+atscript",
        "pl+assemblyscript",
        "pl+arkts",
      ],
      licenses: ["lic+apache-2"],
      paradigms: ["para+multi-paradigm", "para+functional", "para+generic", "para+imperative", "para+objects"],
      typeSystems: ["tsys+duck", "tsys+gradual", "tsys+structural"],
    },
  );
}
