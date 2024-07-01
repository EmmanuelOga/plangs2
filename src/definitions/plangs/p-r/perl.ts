import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+perl")
    .merge({
      name: "Perl",
      websites: [{ kind: "wikipedia", title: "Perl", href: "https://en.wikipedia.org/wiki/Perl" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/5/56/Perl_language_logo.svg" }],
      releases: [
        { name: "Perl", version: "5.40.0", date: "2024-01-01", kind: "stable" },
        { name: "Perl", version: "5.39.10", date: "2024-01-01", kind: "preview" },
      ],
    })
    .addDialects(["pl+raku"])
    .addImplementations(["pl+c"])
    .addInfluences(["pl+awk", "pl+c", "pl+cpp", "pl+basic", "pl+lisp", "pl+sed"])
    .addInfluence("pl+unix-shell", {
      refs: [
        {
          href: "https://web.archive.org/web/20170728023959/http://www.perl.com/pub/2007/12/06/soto-11.html",
          title: "Programming is Hard, Let's Go Scripting...",
        },
      ],
    })
    .addInfluence("pl+raku", {
      refs: [
        {
          href: "http://pugs.blogs.com/pugs/2010/04/how-to-implement-perl-6-in-10.html",
          title: "How to Implement Perl 6 in '10",
        },
      ],
    })
    .addPerson("person+larry-wall", { role: "designer" })
    .addLicenses(["lic+artistic"])
    .addLicense("lic+gpl", {
      refs: [
        { href: "https://web.archive.org/web/20110122175123/http://dev.perl.org/licenses/", title: "Perl Licensing" },
      ],
    })
    .addParadigms(["para+multi"])
    .addPlatforms(["platf+cross-platform"]);

  /**/
}
