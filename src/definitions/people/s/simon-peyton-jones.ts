import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Simon-Peyton-Jones" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Simon Peyton Jones";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Simon Peyton Jones","href":"https://en.wikipedia.org/wiki/Simon_Peyton_Jones","kind":"wikipedia"}]);
}