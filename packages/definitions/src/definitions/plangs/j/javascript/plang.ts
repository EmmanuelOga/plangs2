import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+javascript", {
      images: [{ kind: "other", title: "JavaScript" }],
      name: "JavaScript",
      description:
        "JavaScript (/ˈdʒɑːvəskrɪpt/), often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior.",
      websites: [
        {
          href: "https://ecma-international.org/publications-and-standards/standards/ecma-262/",
          title: "ecma-international.org/publications-and-standards/standards/ecma-262/",
          kind: "other",
        },
        { href: "https://en.wikipedia.org/wiki/Javascript_(programming_language)", title: "JavaScript", kind: "wikipedia" },
      ],
      extensions: [".cjs", ".js", ".mjs"],
      releases: [],
    })
    .addImplements(["pl+ecmascript"])
    .addInfluencedBy(["pl+awk", "pl+c", "pl+lisp", "pl+lua", "pl+moonscript", "pl+perl", "pl+r5rs", "pl+scheme", "pl+self"])
    .addParadigms(["para+event-driven", "para+functional", "para+imperative", "para+multi", "para+oop", "para+procedural"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+weak"]);
}
