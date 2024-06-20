import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Person } from "../../../entities/schemas";

export const PERSON_V_Id = "person+Raymond-F-Boyce" as T_Id_V_Person;

export function define(g: PlangsGraph) {
   const p = g.v_person.declare(PERSON_V_Id);

   p.name = "Raymond F. Boyce";

   const pb = g.personBuilder;

   pb.addWebsites(p, [{"title":"Raymond F. Boyce","href":"https://en.wikipedia.org/wiki/Raymond_F._Boyce","kind":"wikipedia"}]);
}