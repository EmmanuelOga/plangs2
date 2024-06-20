import type { PlangsGraph } from '../../entities/plangs_graph';

export function define(g: PlangsGraph) {
   const lb = g.licenseBuilder;

  lb.declare(
    "license+eclipse-public",
    "EPL",
    [{"kind":"wikipedia","title":"EPL","href":"https://en.wikipedia.org/wiki/Eclipse_Public_License"}]);

  lb.declare(
    "license+eula",
    "EULA",
    [{"kind":"wikipedia","title":"EULA","href":"https://en.wikipedia.org/wiki/EULA"}]);

}