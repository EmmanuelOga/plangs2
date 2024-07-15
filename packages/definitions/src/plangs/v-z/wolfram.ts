import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+wolfram")
    .merge({
      name: "Wolfram Language",
      websites: [
        { kind: "wikipedia", title: "Wolfram Language", href: "https://en.wikipedia.org/wiki/Wolfram_Language" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/1/17/Wolfram_Language_Logo_2016.svg" }],
      releases: [{ name: "Wolfram Language", version: "14.0.0", date: "2024-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+wolfram-mathematica"])
    .addPerson("person+stephen-wolfram", { role: "designer" })
    .addLicenses(["lic+proprietary"])
    .addParadigms(["para+multi", "para+term", "para+functional", "para+imperative", "para+array"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+wolfram-mathematica")
    .merge({
      name: "Wolfram Mathematica",
      websites: [
        { kind: "wikipedia", title: "Mathematica", href: "https://en.wikipedia.org/wiki/Wolfram_Mathematica" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/20/Mathematica_Logo.svg" }],
    })
    .addLicenses(["lic+proprietary"])
    .addPlatforms(["platf+mac", "platf+linux"])
    .addPlatform("platf+win", {
      refs: [
        {
          href: "https://www.wolfram.com/mathematica/system-requirements.html",
          title: "Mathematica 12 System Requirements and Platform Availability",
        },
      ],
    })
    .addPlatform("platf+rpi", {
      refs: [
        {
          href: "https://web.archive.org/web/20140509213354/http://www.theverge.com/2013/11/21/5130394/raspberry-pi-includes-mathematica-wolfram-language-free",
          title: "Raspberry Pi Includes Mathematica for Free",
        },
      ],
    });

  /**/

  g.buildPlang("pl+wolfram-systemmodeler")
    .merge({
      name: "Wolfram System Modeler",
      websites: [
        {
          kind: "wikipedia",
          title: "Wolfram SystemModeler",
          href: "https://en.wikipedia.org/wiki/Wolfram_SystemModeler",
        },
        { kind: "homepage", title: "Wolfram SystemModeler", href: "http://www.wolfram.com/system-modeler" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/48/WolframSystemModelerLogo.png/64px-WolframSystemModelerLogo.png",
        },
      ],
      releases: [{ name: "Wolfram System Modeler", version: "14.0.0", date: "2024-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+proprietary"]);

  /**/
}
