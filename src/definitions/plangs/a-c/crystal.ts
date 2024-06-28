import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+crystal",
    "Crystal",
    {
      name: "Crystal",
      websites: [
        { kind: "wikipedia", title: "Crystal", href: "https://en.wikipedia.org/wiki/Crystal_(programming_language)" },
        { kind: "homepage", title: "crystal-lang.org", href: "https://crystal-lang.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crystal_language_logo.svg" }],
      references: {
        first_appeared: [
          { href: "https://crystal-lang.org/2014/06/19/crystal-0.1.0-released.html", title: "Crystal 0.1.0 released!" },
        ],
        stable_release: [
          { href: "https://github.com/crystal-lang/crystal/releases/tag/1.12.1", title: "Release 1.12.1" },
        ],
        platform: [
          { href: "https://crystal-lang.org/reference/platform_support.html", title: "Crystal Platform Support" },
        ],
        os: [{ href: "https://crystal-lang.org/reference/platform_support.html", title: "Crystal Platform Support" }],
      },
      releases: [
        { version: "unknown", date: "2014-06-19", kind: "first" },
        { version: "1.12.1", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".cr"],
    },
    {
      influences: ["pl+c", "pl+c-sharp", "pl+go", "pl+python", "pl+ruby", "pl+rust"],
      licenses: ["lic+apache"],
      paradigms: ["para+concurrent", "para+multi", "para+objects"],
      people: [
        ["person+ary-borenszweig", "designer"],
        ["person+brian-cardiff", "designer"],
        ["person+juan-wajnerman", "designer"],
      ],
      platforms: ["platf+aarch64", "platf+bsd", "platf+ia-32", "platf+linux", "platf+mac", "platf+win", "platf+x86-64"],
      typeSystems: ["tsys+duck", "tsys+inferred", "tsys+nominative", "tsys+static"],
    },
  );
}
