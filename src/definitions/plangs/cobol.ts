import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+cobol",
    "COBOL",
    {
      name: "COBOL",
      websites: [{ kind: "wikipedia", title: "COBOL", href: "https://en.wikipedia.org/wiki/COBOL" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/COBOL_Report_Apr60.djvu/page1-121px-COBOL_Report_Apr60.djvu.jpg",
        },
      ],
      references: {
        designed_by: [{ href: "https://doi.org/10.1109%2F52.841602", title: "10.1109/52.841602" }],
        dialects: [
          {
            href: "https://pubs.opengroup.org/onlinepubs/009680799/toc.pdf",
            title: "Technical Standard, COBOL Language",
          },
        ],
        influenced: [
          {
            href: "http://dblp1.uni-trier.de/db/conf/edoc/edoc2000.html",
            title: "Enterprise Distributed Object Computing Conference",
          },
          {
            href: "https://web.archive.org/web/20190113063021/https://www.omg.org/adm/EGLOverviewtoOMG.pdf",
            title: "Introduction to EGL",
          },
          { href: "https://doi.org/10.1145%2F800025.1198410", title: "10.1145/800025.1198410" },
          {
            href: "https://www.sysmaker.com/infopro/x3j15/whatart.htm#why",
            title: "What is PL/B - The Programming Language for Business?",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "1959-01-01", kind: "first" },
        { version: "unknown", date: "1989-01-01", kind: "stable" },
      ],
      extensions: [".cbl", ".cob", ".cpy"],
    },
    {
      implementations: ["pl+gnucobol", "pl+ibm-cobol", "pl+micro-focus"],
      influenced: [
        "pl+aimaco",
        "pl+chill",
        "pl+comtran",
        "pl+dibol",
        "pl+fact-computer",
        "pl+flow-matic",
        "pl+language-h",
        "pl+pl-slash1",
        "pl+programming-language-for-business",
      ],
      influences: [
        "pl+aimaco",
        "pl+c-plus-plus",
        "pl+cobolscript",
        "pl+comtran",
        "pl+egl",
        "pl+eiffel",
        "pl+fact-computer",
        "pl+flow-matic",
        "pl+pl-slashi",
        "pl+programming-language-for-business",
        "pl+smalltalk",
      ],
      paradigms: ["para+generic", "para+imperative", "para+objects"],
      people: [
        ["person+grace-hopper", "designer"],
        ["person+jean-e-sammet", "designer"],
      ],
      typeSystems: ["tsys+static", "tsys+weak"],
    },
  );

  /**/
}
