import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+raku",
    "Raku",
    {
      name: "Raku",
      websites: [
        { kind: "wikipedia", title: "Raku", href: "https://en.wikipedia.org/wiki/Raku_(programming_language)" },
        { kind: "homepage", title: "raku.org", href: "http://raku.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Camelia.svg" }],
      releases: [
        { version: "unknown", date: "2015-12-25", kind: "first" },
        { version: "unknown", date: "2020-10-24", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "http://blogs.perl.org/users/zoffix_znet/2018/11/announce-raku-perl-6-diwali-6d-language-specification-release.html",
            title: "Announce: Raku Perl 6 'Diwali' 6.d Language Specification Release",
          },
        ],
        filename_extensions: [{ href: "https://docs.raku.org/language/modules#Basic_structure", title: "Modules" }],
        influenced_by: [
          {
            href: "https://web.archive.org/web/20120121145808/http://www.perlfoundation.org/perl6/index.cgi?glossary_of_terms_and_jargon",
            title: "Glossary of Terms and Jargon",
          },
        ],
        influenced: [
          {
            href: "http://pugs.blogs.com/pugs/2010/04/how-to-implement-perl-6-in-10.html",
            title: "How to Implement Perl 6 in '10",
          },
        ],
      },
      extensions: [".raku", ".t"],
    },
    {
      implementations: ["pl+rakudo"],
      influenced: ["pl+smalltalk"],
      influences: ["pl+haskell", "pl+javascript", "pl+perl", "pl+ruby", "pl+smalltalk"],
      licenses: ["lic+artistic", "lic+gpl"],
      paradigms: ["para+multi"],
      people: [["person+larry-wall", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+gradual"],
    },
  );

  /**/

  lb.define(
    "pl+rakudo",
    "Rakudo",
    {
      name: "Rakudo",
      websites: [
        { kind: "wikipedia", title: "Rakudo", href: "https://en.wikipedia.org/wiki/Rakudo" },
        { kind: "homepage", title: "rakudo.org", href: "http://rakudo.org/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Rakudo_Logo.png/250px-Rakudo_Logo.png",
        },
      ],
      references: {
        stable_release: [{ href: "https://github.com/rakudo/rakudo/releases", title: "Releases · rakudo/rakudo" }],
      },
      releases: [{ version: "2024.05", date: "2024-05-30", kind: "stable" }],
    },
    { licenses: ["lic+artistic"] },
  );

  /**/
}
