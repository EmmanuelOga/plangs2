import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+perl", {
      images: [{ kind: "logo", title: "Perl", url: "/images/plangs/p/perl/logo.png" }],
      name: "Perl",
      description:
        'Perl is a high-level, general-purpose, interpreted, dynamic programming language. Though Perl is not officially an acronym, there are various backronyms in use, including "Practical Extraction and Reporting Language".',
      websites: [
        { href: "https://www.perl.org/", title: "perl.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Perl", title: "Perl", kind: "wikipedia" },
      ],
      extensions: [".cgi", ".pl", ".pls", ".plx", ".pm", ".pod", ".psgi", ".t", ".xs"],
      releases: [
        { version: "5.40.0", date: "2024-01-01" },
        { version: "5.41.3", date: "2024-01-01" },
      ],
    })
    .addInfluencedBy(["pl+awk", "pl+basic", "pl+c", "pl+c++", "pl+lisp", "pl+raku", "pl+sed"])
    .addLicenses(["lic+artistic"])
    .addParadigms(["para+multi"])
    .addPlatforms(["platf+cross"])
    .addWrittenIn(["pl+c"]);
}
