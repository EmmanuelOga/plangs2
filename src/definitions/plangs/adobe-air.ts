import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+adobe-air",
    "Adobe AIR",
    {
      name: "Adobe AIR",
      websites: [
        { kind: "wikipedia", title: "Adobe AIR", href: "https://en.wikipedia.org/wiki/Adobe_AIR" },
        { kind: "homepage", title: "airsdk.harman.com", href: "https://airsdk.harman.com/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/1/11/Adobe_AIR_logo.svg" }],
      releases: [
        { version: "unknown", date: "2008-02-25", kind: "first" },
        { version: "51.0.1.3", date: "2024-06-10", kind: "stable" },
        { version: "33.1.1.932", kind: "preview" },
      ],
      references: {
        stable_release: [
          { href: "https://services.harman.com/partners/adobe", title: "Adobe Partnership" },
          { href: "https://airsdk.harman.com/download", title: "Download Adobe AIR SDK 51.0" },
        ],
        operating_system: [
          { href: "https://services.harman.com/partners/adobe", title: "Harman - Adobe Partnership - HARMAN" },
          { href: "https://developer.blackberry.com/air/download/endofsupport/", title: "End of Support Notice" },
          {
            href: "http://blogs.adobe.com/flashplayer/2011/06/adobe-air-and-linux-increasing-distribution-on-devices.html",
            title: "Adobe AIR and Linux: Increasing Distribution on Devices",
          },
        ],
        available_in: [
          {
            href: "http://www.adobe.com/products/air/tech-specs.html",
            title: "Tech specs and system requirements | Adobe AIR",
          },
        ],
        license: [{ href: "https://www.adobe.com/products/eulas/pdfs/Adobe_AIR.pdf", title: "Adobe AIR 1.1 EULA" }],
      },
    },
    { licenses: ["lic+proprietary"], platforms: ["platf+arm", "platf+ia-32", "platf+mips", "platf+x86-64"] },
  );

  /**/
}
