import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Benjamin-C-Pierce" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Benjamin C. Pierce";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Benjamin C. Pierce","href":"https://en.wikipedia.org/wiki/Benjamin_C._Pierce","kind":"wikipedia"}]);
}