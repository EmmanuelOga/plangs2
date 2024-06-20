import type { PlangsGraph } from '../../entities/plangs_graph';

export function define(g: PlangsGraph) {
   const lb = g.licenseBuilder;

  lb.declare(
    "license+qpl",
    "QPL",
    [{"kind":"wikipedia","title":"QPL","href":"https://en.wikipedia.org/wiki/Q_Public_License"}]);

  lb.declare(
    "license+qt-commercial",
    "Qt Commercial License",
    [{"kind":"wikipedia","title":"Qt Commercial License","href":"https://en.wikipedia.org/wiki/Qt_Commercial_License"}]);

}