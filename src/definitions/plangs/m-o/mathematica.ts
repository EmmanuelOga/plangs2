import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+mathematica",
    "Mathematica",
    {
      name: "Mathematica",
      websites: [
        { kind: "wikipedia", title: "Wolfram Mathematica", href: "https://en.wikipedia.org/wiki/Mathematica" },
        { kind: "homepage", title: "www.wolfram.com/mathematica/", href: "https://www.wolfram.com/mathematica/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/20/Mathematica_Logo.svg" }],
      references: {
        initial_release: [
          {
            href: "http://blog.wolfram.com/2008/06/23/mathematica-turns-20-today/",
            title: "Mathematica Turns 20 Today",
          },
        ],
        stable_release: [
          {
            href: "https://writings.stephenwolfram.com/2024/01/the-story-continues-announcing-version-14-of-wolfram-language-and-mathematica/",
            title: "The Story Continues: Announcing Version 14 of Wolfram Language and Mathematica",
          },
        ],
        written_in: [
          {
            href: "http://blog.wolfram.com/2013/06/23/celebrating-mathematicas-first-quarter-century/",
            title: "Celebrating Mathematica's First Quarter Century",
          },
          {
            href: "https://web.archive.org/web/20170729133220/http://reference.wolfram.com/legacy/v9/tutorial/TheSoftwareEngineeringOfMathematica.html",
            title: "The Software Engineering of Mathematica—Wolfram Mathematica 9 Documentation",
          },
        ],
        platform: [
          {
            href: "https://www.wolfram.com/mathematica/system-requirements.html",
            title: "Mathematica 12 System Requirements and Platform Availability",
          },
          {
            href: "https://web.archive.org/web/20140509213354/http://www.theverge.com/2013/11/21/5130394/raspberry-pi-includes-mathematica-wolfram-language-free",
            title: "Raspberry Pi Includes Mathematica for Free",
          },
          { href: "http://www.wolfram.com/products/mathematica/platforms/", title: "Wolfram Mathematica" },
        ],
      },
      releases: [
        { version: "unknown", date: "1988-06-23", kind: "first" },
        { version: "14.0.0", date: "2024-01-09", kind: "stable" },
      ],
    },
    { licenses: ["lic+proprietary"], platforms: ["platf+linux", "platf+mac", "platf+rpi", "platf+win"] },
  );

  /**/
}
