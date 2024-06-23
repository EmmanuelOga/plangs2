import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+picolisp",
    "PicoLisp",
    {
      name: "PicoLisp",
      websites: [
        { kind: "wikipedia", title: "Picolisp", href: "https://en.wikipedia.org/wiki/Picolisp" },
        { kind: "homepage", title: "picolisp.com", href: "http://picolisp.com" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/40/PicoLisp_Logo.svg" }],
      releases: [{ version: "unknown", date: "1988-01-01", kind: "first" }],
      extensions: [".l"],
      references: { dialects: [{ href: "https://software-lab.de/down.html", title: "PicoLisp Download" }] },
    },
    {
      dialects: ["pl+lisp"],
      implementations: ["pl+llvm"],
      licenses: ["lic+mit"],
      paradigms: ["para+dec", "para+functional", "para+imperative", "para+meta", "para+objects", "para+reflective"],
      people: [["person+alexander-burger", "designer"]],
      platforms: ["platf+posix"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+strong"],
    },
  );

  /**/
}
