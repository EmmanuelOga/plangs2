import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Randall-Hyde" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Randall Hyde";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Randall Hyde","href":"https://en.wikipedia.org/wiki/Randall_Hyde","kind":"wikipedia"}]);
}