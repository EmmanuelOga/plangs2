import type { PlangsGraph } from '../../entities/plangs_graph';

export function define(g: PlangsGraph) {
   const lb = g.licenseBuilder;

  lb.declare(
    "license+x11",
    "X11",
    [{"kind":"wikipedia","title":"X11","href":"https://en.wikipedia.org/wiki/MIT_License"}]);

  lb.declare(
    "license+xfree86",
    "XFree86",
    [{"kind":"wikipedia","title":"XFree86","href":"https://en.wikipedia.org/wiki/XFree86_License"}]);

}