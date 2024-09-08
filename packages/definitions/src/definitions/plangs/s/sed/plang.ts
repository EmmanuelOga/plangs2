import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+sed", {
      images: [{ kind: "other", title: "sed" }],
      name: "sed",
      description:
        'sed ("stream editor") is a Unix utility that parses and transforms text, using a simple, compact programming language. It was developed from 1973 to 1974 by Lee E. McMahon of Bell Labs,\nand is available today for most operating systems. sed was based on the scripting features of the interactive editor ed ("editor", 1971) and the earlier qed ("quick editor", 1965–66). It was one of the earliest tools to support regular expressions, and remains in use for text processing, most notably with the substitution command. Popular alternative tools for plaintext string manipulation and "stream editing" include AWK and Perl.',
      websites: [{ href: "https://en.wikipedia.org/wiki/Sed", title: "sed", kind: "wikipedia" }],
      extensions: [],
      releases: [],
    })
    .addParadigms(["para+scripting"])
    .addWrittenIn(["pl+c"]);
}
