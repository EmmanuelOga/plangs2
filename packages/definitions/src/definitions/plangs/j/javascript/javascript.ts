import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+javascript", {
      name: "JavaScript",
      description:
        "JavaScript (/ˈdʒɑːvəskrɪpt/), often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior.",
      firstAppeared: "1995-01-01",
      extensions: [".cjs", ".js", ".mjs"],
      websites: [
        {
          href: "https://ecma-international.org/publications-and-standards/standards/ecma-262/",
          title: "ecma-international.org/publications-and-standards/standards/ecma-262/",
          kind: "other",
        },
        { href: "https://en.wikipedia.org/wiki/Javascript_(programming_language)", title: "JavaScript", kind: "wikipedia" },
      ],
      images: [{ kind: "other", title: "JavaScript", url: "/images/plangs/j/javascript/other.png" }],
    })
    .addImplements(["pl+ecmascript"])
    .addInfluencedBy(["pl+awk", "pl+c", "pl+lisp", "pl+lua", "pl+moonscript", "pl+perl", "pl+python", "pl+r5rs", "pl+scheme", "pl+self"])
    .addParadigms(["paradigm+event-driven", "paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop", "paradigm+procedural"])
    .addTags([
      "tag+app",
      "tag+asm",
      "tag+dbms",
      "tag+framework",
      "tag+if",
      "tag+industrial",
      "tag+interpreter",
      "tag+ray-tracer",
      "tag+scripting",
      "tag+viz",
    ])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+weak"]);
}
