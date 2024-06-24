import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+perl",
    "Perl",
    {
      name: "Perl",
      websites: [
        { kind: "wikipedia", title: "Perl", href: "https://en.wikipedia.org/wiki/Perl" },
        { kind: "homepage", title: "perl.org", href: "https://www.perl.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/5/56/Perl_language_logo.svg" }],
      references: {
        first_appeared: [
          {
            href: "https://web.archive.org/web/20130111100906/http://history.perl.org/PerlTimeline.html",
            title: "The Timeline of Perl and its Culture (v3.0_0505)",
          },
        ],
        stable_release: [
          {
            href: "https://www.nntp.perl.org/group/perl.perl5.porters/2024/06/msg268252.html",
            title: "Perl v5.40.0 is now available",
          },
          {
            href: "https://www.nntp.perl.org/group/perl.perl5.porters/2023/11/msg267400.html",
            title: "Perl 5.34.3, Perl 5.36.3 and Perl 5.38.2 are now available",
          },
        ],
        preview_release: [
          {
            href: "https://www.nntp.perl.org/group/perl.perl5.porters/2024/04/msg268159.html",
            title: "Release announcement for perl v5.39.10",
          },
        ],
        license: [
          { href: "https://web.archive.org/web/20110122175123/http://dev.perl.org/licenses/", title: "Perl Licensing" },
        ],
        influenced_by: [
          {
            href: "https://web.archive.org/web/20170728023959/http://www.perl.com/pub/2007/12/06/soto-11.html",
            title: "Programming is Hard, Let's Go Scripting...",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "1987-12-18", kind: "first" },
        { version: "5.40.0", date: "2024-06-09", kind: "stable" },
        { version: "5.39.10", date: "2024-04-27", kind: "preview" },
      ],
      extensions: [".plx", ".pls", ".pl", ".pm", ".xs", ".t", ".pod", ".cgi", ".psgi"],
    },
    {
      dialects: ["pl+raku"],
      implementations: ["pl+c"],
      influenced: [
        "pl+awk",
        "pl+beanshell",
        "pl+c",
        "pl+c-plus-plus",
        "pl+ecmascript",
        "pl+julia",
        "pl+lisp",
        "pl+newlisp",
        "pl+perl-data",
        "pl+php",
        "pl+powershell",
        "pl+python",
        "pl+qore",
        "pl+raku",
        "pl+ruby",
        "pl+sed",
      ],
      influences: ["pl+awk", "pl+basic", "pl+c", "pl+c-plus-plus", "pl+lisp", "pl+sed", "pl+unix-shell"],
      licenses: ["lic+artistic", "lic+gpl"],
      paradigms: ["para+multi"],
      people: [["person+larry-wall", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/
}
