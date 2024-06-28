import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+gnu-octave",
    "GNU Octave",
    {
      name: "GNU Octave",
      websites: [
        { kind: "wikipedia", title: "GNU Octave", href: "https://en.wikipedia.org/wiki/GNU_Octave" },
        { kind: "homepage", title: "gnu.org/software/octave/", href: "https://gnu.org/software/octave/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Gnu-octave-logo.svg" }],
      references: {
        developers: [
          {
            href: "http://hg.savannah.gnu.org/hgweb/octave/file/tip/doc/interpreter/contributors.in",
            title: "contributors.in",
          },
        ],
        initial_release: [
          {
            href: "https://www.gnu.org/software/octave/about",
            title:
              '"Full-time development began in the Spring of 1992. The first alpha release was January 4, 1993, and version 1.0 was released February 17, 1994."',
          },
        ],
        stable_release: [
          {
            href: "https://octave.org/news/release/2024/03/14/octave-9.1.0-released.html",
            title: "GNU Octave 9.1.0 Released",
          },
        ],
        written_in: [{ href: "https://wiki.octave.org/Building", title: "Building - Octave" }],
        available_in: [
          {
            href: "https://hg.savannah.gnu.org/hgweb/octave/file/4730becad0b1/libgui/languages",
            title:
              "Basque, Belarusian, Catalan, Chinese, Dutch, English, French, German, Hungarian, Italian, Japanese, Latvian, Portuguese (Brazil), Portuguese (Portugal), Russian, Spanish, Turkish, Ukrainian",
          },
        ],
      },
      releases: [
        { version: "1.0", date: "1993-01-01", kind: "first" },
        { version: "9.1.0", date: "2024-01-01", kind: "stable" },
      ],
    },
    { influences: ["pl+matlab"], licenses: ["lic+gpl"], people: [["person+john-w-eaton", "developer"]] },
  );
}
