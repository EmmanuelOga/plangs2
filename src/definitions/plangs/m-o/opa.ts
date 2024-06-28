import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+opa",
    "Opa",
    {
      name: "Opa",
      websites: [
        { kind: "wikipedia", title: "Opa", href: "https://en.wikipedia.org/wiki/Opa_(programming_language)" },
        { kind: "homepage", title: "opalang.org", href: "http://opalang.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/6/64/Opa_logo_cloud.png" }],
      releases: [
        { version: "unknown", date: "2011-01-01", kind: "first" },
        { version: "1.1.1", date: "2014-03-08", kind: "stable" },
      ],
      references: {
        stable_release: [
          { href: "https://github.com/MLstate/opalang/releases/tag/v4308", title: "Release 1.1.1 · MLstate/opalang" },
          { href: "http://blog.opalang.org/2013/02/some-great-news-on-opa.html", title: "Some great news on Opa" },
        ],
      },
    },
    {
      influences: ["pl+erlang", "pl+javascript", "pl+ml", "pl+ocaml"],
      licenses: ["lic+affero-gpl", "lic+mit"],
      paradigms: ["para+functional", "para+imperative", "para+multi"],
      platforms: ["platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );
}
