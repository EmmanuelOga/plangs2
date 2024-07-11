import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+mathematica")
    .merge({
      name: "Mathematica",
      websites: [
        { kind: "wikipedia", title: "Wolfram Mathematica", href: "https://en.wikipedia.org/wiki/Mathematica" },
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
}
