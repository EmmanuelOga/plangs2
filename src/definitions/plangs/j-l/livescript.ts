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
        { version: "unknown", kind: "stable" },
        { version: "1.6.1", date: "2020-07-14", kind: "stable" },
      ],
      extensions: [".ls"],
    },
    {
      influences: ["pl+coffeescript", "pl+javascript", "pl+haskell", "pl+f-sharp"],
      licenses: ["lic+mit"],
      paradigms: ["para+multi", "para+functional", "para+objects"],
      people: ["person+jeremy-ashkenas", "person+satoshi-murakami", "person+george-zahariev"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+weak"],
    },
  );
}
