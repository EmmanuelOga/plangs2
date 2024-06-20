import type { PlangsGraph } from '../../entities/plangs_graph';

export function define(g: PlangsGraph) {
   const lb = g.licenseBuilder;

  lb.declare(
    "license+simplified-bsd",
    "Simplified BSD",
    [
  {
    "kind": "wikipedia",
    "title": "Simplified BSD",
    "href": "https://en.wikipedia.org/wiki/BSD_licenses#2-clause_license_.28.22Simplified_BSD_License.22_or_.22FreeBSD_License.22.29"
  },
  {
    "kind": "wikipedia",
    "title": "Simplified BSD",
    "href": "https://en.wikipedia.org/wiki/Simplified_BSD_License"
  }
]);

  lb.declare(
    "license+spl-1",
    "SPL-1.0",
    [{"kind":"wikipedia","title":"SPL-1.0","href":"https://en.wikipedia.org/wiki/Sun_Public_License"}]);

  lb.declare(
    "license+sybase-open-watcom-public",
    "Sybase Open Watcom Public License",
    [{"kind":"wikipedia","title":"Sybase Open Watcom Public License","href":"https://en.wikipedia.org/wiki/Sybase_Open_Watcom_Public_License"}]);

}