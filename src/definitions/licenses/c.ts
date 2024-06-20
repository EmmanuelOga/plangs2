import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  lb.define("lic+cc-attribution", "Creative Commons Attribution", [
    {
      kind: "wikipedia",
      title: "Creative Commons Attribution",
      href: "https://en.wikipedia.org/wiki/Creative_Commons_license#Attribution",
    },
  ]);

  lb.define("lic+cc-by-sa", "CC-BY-SA", [
    {
      kind: "wikipedia",
      title: "CC-BY-SA",
      href: "https://en.wikipedia.org/wiki/Creative_Commons_licenses",
    },
  ]);

  lb.define("lic+cecill", "CeCILL", [
    { kind: "wikipedia", title: "CeCILL", href: "https://en.wikipedia.org/wiki/CeCILL" },
  ]);

  lb.define("lic+closed-source", "Closed source", [
    {
      kind: "wikipedia",
      title: "Closed source",
      href: "https://en.wikipedia.org/wiki/Closed_source",
    },
  ]);

  lb.define("lic+commercial", "Commercial", [
    {
      kind: "wikipedia",
      title: "Commercial",
      href: "https://en.wikipedia.org/wiki/Commercial_software",
    },
    { kind: "wikipedia", title: "Commercial", href: "https://en.wikipedia.org/wiki/Commerce" },
  ]);

  lb.define("lic+commercial-software", "commercial software", [
    {
      kind: "wikipedia",
      title: "commercial software",
      href: "https://en.wikipedia.org/wiki/Commercial_software",
    },
  ]);

  lb.define("lic+cpl", "CPL", [
    {
      kind: "wikipedia",
      title: "CPL",
      href: "https://en.wikipedia.org/wiki/Common_Public_License",
    },
  ]);
}
