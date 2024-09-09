import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs
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
    .addInfluencedBy(["pl+awk", "pl+c", "pl+lisp", "pl+lua", "pl+moonscript", "pl+perl", "pl+r5rs", "pl+scheme", "pl+self"])
    .addParadigms(["para+event-driven", "para+functional", "para+imperative", "para+multi", "para+oop", "para+procedural"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+weak"]);
}
