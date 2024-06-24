import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+livescript",
    "LiveScript",
    {
      name: "LiveScript",
      websites: [
        {
          kind: "wikipedia",
          title: "LiveScript",
          href: "https://en.wikipedia.org/wiki/LiveScript_(programming_language)",
        },
        { kind: "homepage", title: "livescript.net", href: "https://livescript.net" },
      ],
      releases: [
        { version: "unknown", date: "2011-01-01", kind: "first" },
        { version: "1.6.1", date: "2020-07-14", kind: "stable" },
      ],
      references: {
        stable_release: [{ href: "https://github.com/gkz/LiveScript/tags", title: "LiveScript Releases" }],
      },
      extensions: [".ls"],
    },
    {
      influenced: ["pl+coffeescript"],
      influences: ["pl+coffeescript", "pl+f-sharp", "pl+haskell", "pl+javascript"],
      licenses: ["lic+mit"],
      paradigms: ["para+functional", "para+multi", "para+objects"],
      people: [
        ["person+george-zahariev", "designer"],
        ["person+jeremy-ashkenas", "designer"],
        ["person+satoshi-murakami", "designer"],
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+weak"],
    },
  );

  /**/
}
