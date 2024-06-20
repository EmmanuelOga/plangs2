import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+A-N-Habermann" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "A. N. Habermann";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"A. N. Habermann","href":"https://en.wikipedia.org/wiki/Nico_Habermann","kind":"wikipedia"}]);
}