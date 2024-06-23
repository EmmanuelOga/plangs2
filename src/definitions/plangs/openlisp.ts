import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+openlisp",
    "OpenLisp",
    {
      name: "OpenLisp",
      websites: [
        { kind: "wikipedia", title: "OpenLisp", href: "https://en.wikipedia.org/wiki/OpenLisp" },
        { kind: "homepage", title: "www.eligis.com", href: "http://www.eligis.com" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/OpenLisp_runnning_inside_GNU_Emacs.jpg/300px-OpenLisp_runnning_inside_GNU_Emacs.jpg",
        },
      ],
      releases: [
        { version: "unknown", date: "1988-01-01", kind: "first" },
        { version: "11.7.0", date: "2022-12-13", kind: "stable" },
      ],
    },
    {
      dialects: ["pl+islisp"],
      implementations: ["pl+c"],
      influenced: ["pl+lelisp"],
      influences: ["pl+islisp", "pl+lisp"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi", "para+objects", "para+reflection"],
      people: [["person+christian-jullien", "designer"]],
      platforms: [
        "platf+aarch64",
        "platf+arm",
        "platf+bsd",
        "platf+cygwin",
        "platf+dec",
        "platf+dos",
        "platf+ia-64",
        "platf+linux",
        "platf+mac",
        "platf+mips",
        "platf+openvms",
        "platf+pocket-pc",
        "platf+qnx",
        "platf+risc-v",
        "platf+unix",
        "platf+win",
        "platf+x86",
        "platf+x86-64",
        "platf+z-slashos",
      ],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/
}
