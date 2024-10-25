import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+perl", {
      name: "Perl",
      description:
        'Perl is a high-level, general-purpose, interpreted, dynamic programming language. Though Perl is not officially an acronym, there are various backronyms in use, including "Practical Extraction and Reporting Language".',
      keywords: ["perl"],
      websites: [
        { title: "perl.org", href: "https://www.perl.org/", kind: "homepage" },
        { title: "Perl", href: "https://en.wikipedia.org/wiki/Perl", kind: "wikipedia" },
      ],
      extensions: [".cgi", ".pl", ".pls", ".plx", ".pm", ".pod", ".psgi", ".t", ".xs"],
      year: 1987,
      isTranspiler: false,
      isMainstream: true,
      releases: [
        { version: "5.40.0", name: "Perl 5.40.0", date: "2024-01-01" },
        { version: "5.41.3", name: "Perl 5.41.3", date: "2024-01-01" },
      ],
    })
    .addInfluencedBy(["pl+awk", "pl+basic", "pl+c", "pl+c++", "pl+lisp", "pl+raku", "pl+sed"])
    .addLicenses(["license+artistic"])
    .addParadigms(["paradigm+functional", "paradigm+multi", "paradigm+oop", "paradigm+procedural", "paradigm+scripting"])
    .addPlatforms(["plat+cross"])
    .addTags([
      "tag+app",
      "tag+compiler",
      "tag+dbms",
      "tag+framework",
      "tag+genomics",
      "tag+industrial",
      "tag+interpreter",
      "tag+scripting",
      "tag+shell",
      "tag+viz",
    ])
    .addTypeSystems(["tsys+duck", "tsys+dynamic"])
    .addWrittenIn(["pl+c"]);
}
